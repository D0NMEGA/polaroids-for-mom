// runtime/web/js/camera-path.js — Plan 05: ambient camera drift along a
// lissajous figure-8 with two dwell points and prefers-reduced-motion support.
//
// Contract (UI-SPEC §"Camera path geometry" + MOTION-01/02 + PERF-04):
//   - Path: lissajous on the X/Z table plane.
//       x = LISSAJOUS_A · sin(2π · t/T)
//       z = LISSAJOUS_B · sin(4π · t/T + π/2)
//     The 2:1 frequency ratio (2π for X, 4π for Z) produces a figure-8
//     rather than an ellipse. The `+π/2` phase shift positions the figure-8
//     so its crossover sits at the table center (0, 0).
//   - Period T: 90s (LISSAJOUS_PERIOD_S). Doubles to 180s under
//     prefers-reduced-motion (PERF-04).
//   - Two dwell points at fraction t/T = 0.25 and 0.75 of the cycle (the
//     lissajous extremes). At each dwell the camera slows to near-zero
//     velocity for ~DWELL_DURATION_S of the cycle. Implemented by easing
//     the parametric phase through a piecewise smoothstep before plugging
//     into the sin() formulas — smoothstep has derivative 0 at both ends
//     of each segment, which is exactly the "ease to near-zero velocity at
//     dwell" behavior the UI-SPEC requires (no `power2.inOut` keyframe
//     tween; the parametric phase IS the tween).
//   - Camera Y constant at CAMERA_HEIGHT_MULT × POLAROID_H + 3 (the +3
//     elevates the camera enough to read as a downward-looking table view
//     at FOV 38°; matches the static pose set in renderer.js).
//   - Z baseline offset of +4 keeps the camera "in front of" the scatter,
//     looking back toward origin — without it, the figure-8 would orbit
//     ambiguously above the table.
//   - camera.lookAt(0, 0, 0) every frame. The camera translates only;
//     MOTION-01 forbids any rotation around its own axis or orbit motion.
//
// Forbidden surfaces (MOTION-01, MOTION-02, MOTION-09, SCENE-10):
//   - No user input controllers (no orbit/trackball — screensaver is
//     non-interactive per SCENE-10; PROJECT.md out-of-scope).
//   - No linear interpolation between dwell points — smoothstep mandatory.
//   - No camera.rotation.* mutations (orbit motion is forbidden).
//   - No gsap on the camera path itself (the path is parametric per-frame;
//     gsap is reserved for the lift sequence in Plan 06).
//   - No post-processing (bloom, motion blur, DOF) — owned upstream.

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG } from './config.js';

/**
 * Eases the parametric phase fraction t ∈ [0..1) through a piecewise
 * smoothstep so that the camera slows to near-zero velocity at each
 * dwell point.
 *
 * The phase is divided into three segments by the dwell fractions
 * (default [0.25, 0.75]):
 *   - [0 .. d1]
 *   - [d1 .. d2]
 *   - [d2 .. 1]
 *
 * Each segment is independently smoothstepped (3u² - 2u³). Smoothstep's
 * derivative at u=0 and u=1 is zero, so the eased phase has flat spots
 * at every segment boundary — i.e. at every dwell point. The output
 * preserves the [0..1) range and the cumulative phase ordering, so
 * downstream sin() evaluation produces the same overall figure-8 with
 * dwell pauses baked in.
 *
 * @param {number} t Phase fraction in [0..1).
 * @returns {number} Eased phase fraction in [0..1).
 */
function easedT(t) {
  const dwells = CONFIG.DWELL_TIMES;
  const d1 = dwells[0];
  const d2 = dwells[1];
  let segStart;
  let segEnd;
  if (t < d1) {
    segStart = 0;
    segEnd = d1;
  } else if (t < d2) {
    segStart = d1;
    segEnd = d2;
  } else {
    segStart = d2;
    segEnd = 1;
  }
  const u = (t - segStart) / (segEnd - segStart);
  // 70% linear + 30% smoothstep. Donovan UAT: pure smoothstep dwells too
  // long at the lissajous extremes — the derivative is zero at u=0 and u=1
  // which means the camera literally stops at each end. Blending toward
  // linear keeps the visible slowdown but shortens it to a brief drift.
  const smoothstep = u * u * (3 - 2 * u);
  const eased = 0.7 * u + 0.3 * smoothstep;
  return segStart + eased * (segEnd - segStart);
}

/**
 * Computes the camera position at time t (seconds, monotonically
 * increasing) and writes it into camera.position. Always sets
 * camera.lookAt(0, 0, 0) — the camera translates only.
 *
 * If prefersReducedMotion is true, the period doubles (180s) — slower
 * ambient drift (PERF-04). The lift sequence is disabled separately in
 * Plan 06; this module owns only the camera half of PERF-04.
 *
 * @param {THREE.PerspectiveCamera} camera Camera to position.
 * @param {number} t Absolute time in seconds since loop.start().
 * @param {boolean} [prefersReducedMotion=false] User accessibility preference.
 */
export function updateCameraPosition(camera, t, prefersReducedMotion = false) {
  const p = computeCameraPosition(t, prefersReducedMotion);
  camera.position.set(p.x, p.y, p.z);
  camera.lookAt(0, 0, 0);
}

/**
 * Pure function: returns the camera position the figure-8 would have at
 * absolute time `t`, without mutating any THREE object. Used by the
 * camera-zoom interrupt to plan its "return to the figure-8" target
 * before the zoom begins — so the camera arrives exactly where the path
 * has moved on to during the zoom (no visible jump on handoff).
 *
 * @param {number} t Absolute seconds since loop.start().
 * @param {boolean} [prefersReducedMotion=false]
 * @returns {{x: number, y: number, z: number}}
 */
export function computeCameraPosition(t, prefersReducedMotion = false) {
  const period = prefersReducedMotion
    ? CONFIG.LISSAJOUS_PERIOD_S * 2
    : CONFIG.LISSAJOUS_PERIOD_S;
  const phase = (((t % period) + period) % period) / period;
  const eT = easedT(phase);
  const x = CONFIG.LISSAJOUS_A * Math.sin(2 * Math.PI * eT);
  const z = CONFIG.LISSAJOUS_B * Math.sin(4 * Math.PI * eT + Math.PI / 2);
  const y = CONFIG.CAMERA_HEIGHT_MULT * CONFIG.POLAROID_H + 3;
  return { x, y, z: z + 4 };
}

/**
 * Factory: returns a path object with an `update(camera, t)` method that
 * is wired to the live `prefers-reduced-motion` media query. If the user
 * toggles the setting mid-session, the next call to update() picks up the
 * new period automatically.
 *
 * @returns {{
 *   update: (camera: THREE.PerspectiveCamera, t: number) => void,
 *   readonly prefersReducedMotion: boolean,
 * }}
 */
export function createCameraPath() {
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  let prefersReduced = mql.matches;
  mql.addEventListener('change', (e) => {
    prefersReduced = e.matches;
  });

  return {
    update(camera, t) {
      updateCameraPosition(camera, t, prefersReduced);
    },
    // Predict the figure-8 position at an absolute time without writing
    // to a camera — used by camera-zoom.js to compute the return target.
    positionAt(t) {
      return computeCameraPosition(t, prefersReduced);
    },
    get prefersReducedMotion() {
      return prefersReduced;
    },
  };
}
