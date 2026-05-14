// Poisson-disk 2D sampler for polaroid table positions.
//
// Source: 01-UI-SPEC.md §"Spacing Scale" (POISSON_MIN_DIST = 0.70 × POLAROID_W);
//         01-UI-SPEC.md §"Phase 1 Acceptance Checklist" (SCENE-02 — 25-40 visible);
//         research/FEATURES.md §7 (Poisson-disk positioning rationale).
//
// Algorithm: Bridson-style dart-throwing. For up to maxAttempts tries, generate a
// uniformly random candidate in [-w/2..+w/2] × [-d/2..+d/2]. Accept if it is at
// least `minDist` away (squared distance compared in hot loop) from every existing
// point; reject otherwise. Stop when count is reached or attempts exhausted.
//
// Returns an array of { x, z } objects. Y is always 0 — polaroids sit on the table
// plane and Plan 04 adds STACK_Z_OFFSET layering per-polaroid when composing.

import { CONFIG } from './config.js';

/**
 * Generate non-overlapping 2D positions on the table plane.
 *
 * @param {object} [opts]
 * @param {number} [opts.count]       - target point count (default SCATTER_COUNT_TARGET = 35)
 * @param {{w: number, d: number}} [opts.bounds] - table area
 * @param {number} [opts.minDist]     - minimum center-to-center distance
 * @param {number} [opts.maxAttempts] - dart-throwing budget before giving up
 * @returns {{x: number, z: number}[]}
 */
export function poissonScatter({
  count = CONFIG.SCATTER_COUNT_TARGET,
  bounds = { w: CONFIG.SCATTER_BOUNDS_W, d: CONFIG.SCATTER_BOUNDS_D },
  minDist = CONFIG.POISSON_MIN_DIST * CONFIG.POLAROID_W,
  maxAttempts = 5000,
} = {}) {
  const points = [];
  const halfW = bounds.w / 2;
  const halfD = bounds.d / 2;
  const minDistSq = minDist * minDist;

  let attempts = 0;
  while (points.length < count && attempts < maxAttempts) {
    attempts++;
    const candidate = {
      x: (Math.random() * 2 - 1) * halfW,
      z: (Math.random() * 2 - 1) * halfD,
    };
    let ok = true;
    for (let i = 0; i < points.length; i++) {
      const dx = candidate.x - points[i].x;
      const dz = candidate.z - points[i].z;
      if (dx * dx + dz * dz < minDistSq) {
        ok = false;
        break;
      }
    }
    if (ok) points.push(candidate);
  }
  return points;
}
