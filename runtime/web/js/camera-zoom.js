// runtime/web/js/camera-zoom.js — Camera bird's-eye zoom interrupt.
//
// Replaces the Plan 06 polaroid lift: instead of moving the photo to the camera,
// move the CAMERA to a 90° bird's-eye view of a randomly-chosen polaroid.
// Hold for ZOOM_HOLD_S seconds, then return the camera to wherever the figure-8
// path would be at that moment (so the handoff is seamless — no visible jump
// when the path resumes its writes).
//
// Behavior contract:
//   1. Suspend phase: caller sets a zoomActive flag in main.js so the frame
//      loop stops calling cameraPath.update() for the duration of the zoom.
//   2. Dive: tween camera.position to (polaroid.x, polaroid.y + ZOOM_HEIGHT,
//      polaroid.z) over ZOOM_TRANSITION_S, simultaneously tween the lookAt
//      target from (0,0,0) to the polaroid position. ease: power2.inOut.
//   3. Hold: ZOOM_HOLD_S seconds at the bird's-eye pose.
//   4. Return: compute the figure-8 position at "current time + transition
//      duration" via cameraPath.positionAt(). Tween position there and tween
//      lookAt back to (0,0,0). Same easing.
//   5. Resume: caller clears zoomActive in onComplete; the next frame's
//      cameraPath.update() takes over with no jump because we predicted
//      its exact landing point.
//
// GSAP loads via the UMD <script> tag in index.html (window.gsap). This module
// resolves the reference at call time so it works both in browser and Node
// smoke tests (where gsap may be absent — the function returns null in that
// case and the scheduler skips the event).

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG } from './config.js';

// Resolve gsap LAZILY at call time. If we capture window.gsap at module-init,
// any load-order issue (e.g. module evaluates before the UMD <script> tag
// finishes) leaves us with a permanent null reference and every zoom event
// silently no-ops — which is exactly what Donovan saw in his first UAT.
function getGsap() {
  return (typeof window !== 'undefined' && window.gsap) || null;
}

// Scratch objects allocated once and reused across every zoom event.
const lookAtTarget = new THREE.Vector3(0, 0, 0);
const photoTopDir = new THREE.Vector3(0, 1, 0);
const upState = { x: 0, y: 1, z: 0 };

/**
 * Build and start a GSAP timeline that dives the camera to a bird's-eye
 * view of `polaroid`, holds, then returns to the figure-8 path.
 *
 * @param {THREE.PerspectiveCamera} camera
 * @param {THREE.Object3D} polaroid Target polaroid group (uses its world position).
 * @param {{ positionAt: (t: number) => {x: number, y: number, z: number} }} cameraPath
 * @param {() => number} getElapsedTime Returns the loop's current absolute seconds.
 * @param {object} [callbacks]
 * @param {() => void} [callbacks.onStart]    Fires before the dive tween starts.
 * @param {() => void} [callbacks.onComplete] Fires after the return tween ends.
 * @returns {object|null} A GSAP timeline (or null if GSAP is unavailable).
 */
export function buildCameraZoom(camera, polaroid, cameraPath, getElapsedTime, callbacks = {}) {
  const gsap = getGsap();
  if (!gsap) {
    console.warn('[camera-zoom] gsap unavailable — skipping zoom event');
    callbacks.onComplete && callbacks.onComplete();
    return null;
  }
  console.log('[camera-zoom] firing — diving to', polaroid.name || '(unnamed)');

  // Snapshot the world position of the polaroid (parent transforms could
  // matter if we ever nest, though Phase 1 polaroids are direct children of
  // the scene root). updateMatrixWorld ensures the matrix is current.
  polaroid.updateMatrixWorld(true);
  const polaroidWorldPos = new THREE.Vector3();
  polaroid.getWorldPosition(polaroidWorldPos);

  // Cache the dive target so the lookAt tween knows where to aim.
  const diveTarget = {
    x: polaroidWorldPos.x,
    y: polaroidWorldPos.y + CONFIG.ZOOM_HEIGHT,
    z: polaroidWorldPos.z,
  };
  // The lookAt point during the hold is the polaroid itself.
  const lookAtAtPolaroid = {
    x: polaroidWorldPos.x,
    y: polaroidWorldPos.y,
    z: polaroidWorldPos.z,
  };

  // Initialize the lookAt target to the figure-8's current lookAt (origin)
  // — the camera was looking there until the moment this zoom starts.
  lookAtTarget.set(0, 0, 0);

  // Compute the polaroid's "photo top" direction in world coordinates.
  // The photo texture's top edge corresponds to the polaroid group's local +Y.
  // After the (-π/2 X, spinRad Z) rotation this vector lives in the XZ plane.
  // We tween camera.up from world-up (0,1,0) → photoTop during the dive so
  // that when the camera reaches its bird's-eye pose (view direction parallel
  // to world Y), camera.lookAt has a well-defined orientation that lines up
  // the photo right-side-up in the frame. Restored on return.
  polaroid.updateMatrixWorld(true);
  photoTopDir.set(0, 1, 0).applyQuaternion(polaroid.quaternion).normalize();
  upState.x = 0; upState.y = 1; upState.z = 0;

  // Capture lookAt + up updates onto the camera every frame the tween advances.
  const applyLookAt = () => {
    camera.up.set(upState.x, upState.y, upState.z);
    camera.lookAt(lookAtTarget);
  };

  // Pre-compute the return position based on the time the zoom STARTED PLUS
  // the full event duration. Because the figure-8 keeps advancing during the
  // zoom (even though we don't write to the camera), the path will be at
  // this predicted position when we hand back control. No jump.
  let returnPos = null; // filled at the start of the return phase

  const tl = gsap.timeline({
    onStart: () => {
      callbacks.onStart && callbacks.onStart();
    },
    onComplete: () => {
      callbacks.onComplete && callbacks.onComplete();
    },
  });

  // ---- Dive ----
  // Position dives from current camera location to directly above the polaroid.
  tl.to(camera.position, {
    x: diveTarget.x,
    y: diveTarget.y,
    z: diveTarget.z,
    duration: CONFIG.ZOOM_TRANSITION_S,
    ease: CONFIG.ZOOM_TRANSITION_EASE,
    onUpdate: applyLookAt,
  });
  // LookAt slides from origin (the figure-8's gaze point) to the polaroid.
  tl.to(lookAtTarget, {
    x: lookAtAtPolaroid.x,
    y: lookAtAtPolaroid.y,
    z: lookAtAtPolaroid.z,
    duration: CONFIG.ZOOM_TRANSITION_S,
    ease: CONFIG.ZOOM_TRANSITION_EASE,
  }, '<'); // start at the same time as the position tween
  // Camera.up rotates from world-up (0,1,0) → photo-top (in XZ plane) so the
  // polaroid lands right-side-up in the bird's-eye frame.
  tl.to(upState, {
    x: photoTopDir.x,
    y: photoTopDir.y,
    z: photoTopDir.z,
    duration: CONFIG.ZOOM_TRANSITION_S,
    ease: CONFIG.ZOOM_TRANSITION_EASE,
  }, '<');

  // ---- Hold (3s) ----
  // Pause exactly ZOOM_HOLD_S seconds at the bird's-eye pose. We use an
  // empty target object with a duration tween — GSAP's idiomatic "wait".
  tl.to({}, { duration: CONFIG.ZOOM_HOLD_S });

  // Before the return tween starts, compute where the figure-8 will be at
  // the moment the return tween ends. Capturing here (not at zoom start)
  // means we account for any small clock skew during the hold.
  tl.call(() => {
    const now = getElapsedTime();
    const arrivalTime = now + CONFIG.ZOOM_TRANSITION_S;
    returnPos = cameraPath.positionAt(arrivalTime);
  });

  // ---- Return ----
  // Tween toward the predicted figure-8 position. Use function-valued GSAP
  // targets so they're resolved at tween-start (after the .call above sets
  // returnPos). LookAt tweens back to (0, 0, 0). Camera.up tweens back to
  // world-up so the figure-8 view resumes normally on handoff.
  tl.to(camera.position, {
    x: () => returnPos.x,
    y: () => returnPos.y,
    z: () => returnPos.z,
    duration: CONFIG.ZOOM_TRANSITION_S,
    ease: CONFIG.ZOOM_TRANSITION_EASE,
    onUpdate: applyLookAt,
  });
  tl.to(lookAtTarget, {
    x: 0,
    y: 0,
    z: 0,
    duration: CONFIG.ZOOM_TRANSITION_S,
    ease: CONFIG.ZOOM_TRANSITION_EASE,
  }, '<');
  tl.to(upState, {
    x: 0,
    y: 1,
    z: 0,
    duration: CONFIG.ZOOM_TRANSITION_S,
    ease: CONFIG.ZOOM_TRANSITION_EASE,
  }, '<');

  return tl;
}
