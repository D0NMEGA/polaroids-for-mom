// runtime/web/js/frame-loop.js — 30-FPS-throttled animation loop.
//
// Per MOTION-10, PERF-01, UI-SPEC §"Performance contract":
//   "use requestAnimationFrame with a manual lastFrame clamp; do NOT rely on
//    native rAF 60fps cap"
//
// Strategy: rAF runs every browser frame (60+ Hz), but we only call the user's
// tick(dt, t) + render() callbacks once per FRAME_INTERVAL_MS (= 1000 / FPS_CAP).
// Between throttle windows the loop is essentially free — we schedule rAF and
// immediately return. This halves the work on a 60Hz panel (which is what
// macOS Sequoia 15 caps WKWebView at) and preserves battery.
//
// Why not a fixed-interval timer (the kind that drifts under load when a
// browser throttles background tabs to 1Hz)? In legacyScreenSaver the
// WKWebView occlusion bug specifically degrades fixed-interval timers to 1Hz
// even with the documented workaround. rAF + accumulator is the durable
// pattern that respects the host's frame budget.
//
// dt is clamped to 0.1s max to prevent huge time jumps when the screensaver
// resumes after the system has been asleep — without the clamp, a multi-second
// dt would teleport the lissajous t parameter and visibly snap the camera.

import { CONFIG } from './config.js';

/**
 * Build a 30-FPS-throttled rAF loop.
 *
 * Calls `tick(dtSeconds, totalSeconds)` at most once per (1000/FPS_CAP)ms,
 * followed immediately by `render()`.
 *
 * `totalSeconds` is absolute time since loop.start() and is what Plan 05's
 * camera path uses for the lissajous parametric `t` parameter.
 *
 * Returns { start, stop } controls.
 */
export function createFrameLoop({ tick, render }) {
  const frameIntervalMs = 1000 / CONFIG.FPS_CAP;
  let running = false;
  let startTimeMs = 0;
  let lastFrameMs = 0;
  let rafHandle = null;

  function loop(nowMs) {
    if (!running) return;
    const elapsed = nowMs - lastFrameMs;
    if (elapsed >= frameIntervalMs) {
      const dtSec = Math.min(elapsed / 1000, 0.1); // clamp dt to avoid huge jumps
      const totalSec = (nowMs - startTimeMs) / 1000;
      tick(dtSec, totalSec);
      render();
      // Align to interval to avoid drift — subtract the leftover into the
      // next frame's elapsed budget rather than letting it accumulate.
      lastFrameMs = nowMs - (elapsed % frameIntervalMs);
    }
    rafHandle = requestAnimationFrame(loop);
  }

  return {
    start() {
      if (running) return;
      running = true;
      startTimeMs = performance.now();
      lastFrameMs = startTimeMs;
      rafHandle = requestAnimationFrame(loop);
    },
    stop() {
      running = false;
      if (rafHandle !== null) cancelAnimationFrame(rafHandle);
      rafHandle = null;
    },
  };
}
