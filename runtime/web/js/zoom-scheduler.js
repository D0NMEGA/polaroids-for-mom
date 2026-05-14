// runtime/web/js/zoom-scheduler.js — Fixed-cadence camera-zoom scheduler.
//
// Every CONFIG.ZOOM_INTERVAL_S seconds (default 15), picks a random polaroid
// from scene.userData.polaroids and dispatches a camera-zoom event via
// camera-zoom.js. The scheduler owns:
//   - The setZoomActive callback (sets/clears the main.js flag so the
//     frame loop knows to skip cameraPath.update during the zoom).
//   - The prefers-reduced-motion suspension: when reduced-motion is on,
//     no zoom event is scheduled. Live media-query subscription means a
//     mid-session toggle takes effect at the next interval boundary.
//   - Single-event-at-a-time guarantee: a second zoom can never start
//     while a first is running. The interval timer is rearmed from the
//     zoom event's onComplete, not on a fixed setInterval cadence.

import { CONFIG } from './config.js';
import { buildCameraZoom } from './camera-zoom.js';

/**
 * Create the zoom scheduler.
 *
 * @param {THREE.Scene} scene        scene.userData.polaroids must be populated.
 * @param {THREE.PerspectiveCamera} camera
 * @param {{ positionAt: (t: number) => {x: number, y: number, z: number} }} cameraPath
 * @param {() => number} getElapsedTime  Returns loop's current absolute seconds.
 * @param {(active: boolean) => void} setZoomActive  Toggles main.js's render-loop gate.
 * @returns {{
 *   start: () => void,
 *   stop:  () => void,
 *   isReducedMotion: boolean,
 * }}
 */
export function createZoomScheduler(scene, camera, cameraPath, getElapsedTime, setZoomActive) {
  const polaroids = (scene.userData && scene.userData.polaroids) || [];
  if (polaroids.length === 0) {
    console.warn('[zoom-scheduler] no polaroids in scene.userData — scheduler is a no-op');
  }

  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reducedMotion = mql.matches;
  mql.addEventListener('change', (e) => {
    reducedMotion = e.matches;
  });

  let timerId = null;
  let running = false;

  function armNext() {
    if (!running) return;
    if (reducedMotion) {
      console.log('[zoom-scheduler] reduced-motion active — zooms suspended');
      return;
    }
    console.log(`[zoom-scheduler] next zoom in ${CONFIG.ZOOM_INTERVAL_S}s`);
    timerId = setTimeout(fire, CONFIG.ZOOM_INTERVAL_S * 1000);
  }

  function fire() {
    timerId = null;
    if (!running) return;
    if (reducedMotion) return;
    if (polaroids.length === 0) {
      armNext();
      return;
    }
    const target = polaroids[Math.floor(Math.random() * polaroids.length)];
    setZoomActive(true);
    const tl = buildCameraZoom(camera, target, cameraPath, getElapsedTime, {
      onComplete: () => {
        setZoomActive(false);
        armNext();
      },
    });
    // If buildCameraZoom returned null (GSAP unavailable in some smoke
    // contexts), the callbacks.onComplete inside builder already fires —
    // we still need to rearm the next interval.
    if (!tl) {
      setZoomActive(false);
      armNext();
    }
  }

  return {
    start() {
      if (running) return;
      running = true;
      // The IMMEDIATE first zoom is now triggered from main.js (at T+2s) via
      // a direct buildCameraZoom call. The scheduler picks up from there with
      // CONFIG.ZOOM_INTERVAL_S spacing. If main.js's immediate test is removed,
      // restore the old 3s fast-first behavior by replacing the interval here
      // with `setTimeout(fire, 3000)`.
      console.log('[zoom-scheduler] starting — first scheduled zoom in '
                  + CONFIG.ZOOM_INTERVAL_S + 's (immediate test owns T+2s)');
      armNext();
    },
    stop() {
      running = false;
      if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
      }
    },
    get isReducedMotion() {
      return reducedMotion;
    },
  };
}
