// Scatter layout composer — wires every Plan 02 + Plan 03 factory into the scene.
//
// Source: 01-04-PLAN.md <interfaces> block (verbatim translation of the spec).
// Dependencies (single-source-of-truth via CONFIG):
//   - createPolaroid (polaroid.js, Plan 03) — SX-70 group with border + aperture
//   - poissonScatter (scatter.js, Plan 03) — non-overlapping (x, z) positions
//   - createTape     (tape.js, Plan 03)    — 4-color tape strip mesh
//   - TextureCache   (texture-cache.js, Plan 02) — LRU + SRGBColorSpace + dispose hygiene
//   - PHOTO_MANIFEST (photo-manifest.js, Plan 04 Task 1) — 12 Drive/ placeholder URLs
//   - CONFIG         (config.js, Plan 01) — every numeric constant
//
// Workflow per polaroid index i in [0, SCATTER_COUNT_TARGET):
//   1. Take position { x, z } = positions[i] from poissonScatter.
//   2. Create polaroid via createPolaroid("polaroid-NN", { photoUrl }).
//   3. Lay the polaroid flat on the table:
//        rotation.set(-π/2, 0, spinRad, 'ZYX')
//      Euler order 'ZYX' applies Z first (in-plane spin within the polaroid's
//      face plane), then Y (no-op), then X (tilt -π/2 to lie flat). This gives
//      the visual "lying flat on the table, rotated ±15° around the table normal"
//      without needing a parent-Group hierarchy. See plan body for rationale.
//   4. Position at (x, i × STACK_Z_OFFSET, z) — tiny per-polaroid Y offset prevents
//      z-fighting on overlap (UI-SPEC §"Spacing Scale" — STACK_Z_OFFSET = 0.003).
//   5. Copy position + rotation into userData.restPosition / restRotation so Plan 06
//      can return the polaroid to its exact starting pose after each lift.
//   6. Roll TAPE_RATIO (27.5%) for 1 tape strip; if rolled, roll TAPE_DOUBLE_RATIO
//      conditional (= 5% / 27.5% = ~18% of taped polaroids) for a 2nd strip.
//      Tape positions overlap a random corner by ~50% per FEATURES.md §3.
//   7. Add the polaroid Group to the scene; push it onto the polaroids array.
//   8. Kick off texture load via textureCache.get(photoUrl).then(setPhoto).
//      Each load is wrapped in .catch(warn) so a missing photo never crashes the
//      bootstrap (T-04-03 mitigation — DoS via failed texture load).
//
// After the loop, await Promise.all(loadPromises) so the first rendered frame
// already has every aperture textured — no flash of blank white cards.
//
// Returns the polaroids array; ALSO stashes it on scene.userData.polaroids so
// Plan 05 / 06 / 07 can access it without re-importing this module.

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG } from './config.js';
import { createPolaroid } from './polaroid.js';
import { poissonScatter } from './scatter.js';
import { createTape } from './tape.js';
import { PHOTO_MANIFEST } from './photo-manifest.js';
// Caption modules left importable but unused — ship-now build skips captions.
// Re-import { CAPTIONS } from './captions-data.js';
// Re-import { bakeCaptionTexture, waitForCaveatFont } from './caption-baker.js';

/**
 * Build the initial polaroid scatter and add it to the scene.
 *
 * @param {THREE.Scene} scene
 * @param {{ get: (url: string) => Promise<THREE.Texture> }} textureCache
 * @returns {Promise<THREE.Group[]>}
 */
export async function createScatterLayout(scene, textureCache) {
  // Sample target positions on the table plane (XZ).
  const positions = poissonScatter({ count: CONFIG.SCATTER_COUNT_TARGET });
  /** @type {THREE.Group[]} */
  const polaroids = [];

  // Texture loads run concurrently; awaited after the loop so the first render
  // shows all 12 photos. Each promise's catch swallows individual failures so
  // Promise.all itself never rejects — T-04-03 mitigation per the plan's threat
  // register.
  const textureLoadPromises = [];

  for (let i = 0; i < positions.length; i++) {
    const { x, z } = positions[i];
    const id = `polaroid-${String(i).padStart(3, '0')}`;
    // Random photo from the manifest (was index-cycled, which produced visible
    // repeating patterns). With 12 placeholder photos × 150 polaroids, each
    // photo lands ~12× on average — random distribution mixes them more naturally.
    // Phase 2 replaces this manifest with ~250 unique photos.
    const photoUrl = PHOTO_MANIFEST[Math.floor(Math.random() * PHOTO_MANIFEST.length)];

    const group = createPolaroid(id, { photoUrl });

    // Random spin around the card's normal (the +Y world axis after the X tilt).
    // Uniformly in [-ROTATION_RANGE, +ROTATION_RANGE]; with ROTATION_RANGE=π/2
    // this gives a "tossed on a table" half-turn variety.
    const spinRad = (Math.random() - 0.5) * 2 * CONFIG.ROTATION_RANGE;

    // XYZ (default) Euler order: apply X tilt FIRST so the card lies flat in
    // the XZ plane, then Z spin around the now-vertical local Z (= world +Y =
    // card's normal). With ZYX the spin would happen first in the upright
    // frame and large angles would tilt the card off-flat — visible domino
    // effect at ±90° in the prior commit's UAT.
    group.rotation.set(-Math.PI / 2, 0, spinRad, 'XYZ');

    // POLAROID_Y_LIFT (12mm) lifts the whole scatter above the table plane so
    // polaroid 0 never co-planes with the table (caused visible z-fighting in
    // initial UAT). STACK_Z_OFFSET (3mm) on top of that prevents adjacent
    // polaroids from co-planing with each other.
    const stackY = CONFIG.POLAROID_Y_LIFT + i * CONFIG.STACK_Z_OFFSET;
    group.position.set(x, stackY, z);

    // Record rest pose so Plan 06 lift sequence can return the polaroid to
    // its exact original (x, y, z) and (rx, ry, rz, order) after each hold.
    group.userData.restPosition.copy(group.position);
    group.userData.restRotation.copy(group.rotation);

    // Tape strips: 27.5% of polaroids get one, ~5% of total get two.
    // The "second tape" inner roll is conditional on the first having succeeded,
    // so the joint probability matches: P(second) = TAPE_DOUBLE_RATIO/TAPE_RATIO
    // × TAPE_RATIO = TAPE_DOUBLE_RATIO. Math: 0.05 / 0.275 ≈ 0.182.
    if (Math.random() < CONFIG.TAPE_RATIO) {
      const tape1 = createTape();
      // Random corner: 0 = TR, 1 = TL, 2 = BL, 3 = BR (in polaroid local XY).
      const corner = Math.floor(Math.random() * 4);
      const cornerX = (corner === 0 || corner === 3) ? CONFIG.POLAROID_W / 2 : -CONFIG.POLAROID_W / 2;
      const cornerY = (corner === 0 || corner === 1) ? CONFIG.POLAROID_H / 2 : -CONFIG.POLAROID_H / 2;
      // Place tape AT the corner (not 50% inward) so half the strip overhangs
      // the polaroid edge — reads as a piece of tape stuck to the corner of a
      // photo rather than a small sticker centered on the card.
      tape1.position.set(cornerX, cornerY, 0.005);
      group.add(tape1);
      group.userData.hasTape = 1;

      if (Math.random() < CONFIG.TAPE_DOUBLE_RATIO / CONFIG.TAPE_RATIO) {
        const tape2 = createTape();
        // Pick a DIFFERENT corner (offset by 1..3 in mod-4 space, never 0).
        const otherCorner = (corner + 1 + Math.floor(Math.random() * 3)) % 4;
        const ocX = (otherCorner === 0 || otherCorner === 3) ? CONFIG.POLAROID_W / 2 : -CONFIG.POLAROID_W / 2;
        const ocY = (otherCorner === 0 || otherCorner === 1) ? CONFIG.POLAROID_H / 2 : -CONFIG.POLAROID_H / 2;
        tape2.position.set(ocX, ocY, 0.005);
        group.add(tape2);
        group.userData.hasTape = 2;
      }
    }

    scene.add(group);
    polaroids.push(group);

    // Kick off the texture load — non-blocking until we Promise.all below.
    // Catch is per-promise so one missing file never poisons the whole batch.
    textureLoadPromises.push(
      textureCache.get(photoUrl).then((texture) => {
        group.userData.setPhoto(texture);
      }).catch((err) => {
        // Plan 04 must not crash on a missing photo per UI-SPEC §"No error
        // states surfaced visually". Leave the aperture white; log a warning.
        console.warn('[polaroids] photo load failed', photoUrl, err);
      })
    );
  }

  // Eager-load all textures so the first rendered frame shows every photo.
  // 12 unique URLs × ~3 polaroids each = 12 HTTP/file:// fetches (cache hits
  // on the repeats). PERF-03 cap is 60; we land comfortably under it.
  await Promise.all(textureLoadPromises);

  // Caption baking — DISABLED for ship-now build. Polaroid borders stay as
  // the warm off-white material color from polaroid.js. Re-enable later by
  // uncommenting this block and the CAPTIONS / caption-baker imports above.

  // Stash on scene.userData for camera-zoom / lift / etc. access.
  scene.userData = scene.userData || {};
  scene.userData.polaroids = polaroids;

  console.log('[polaroids] scatter built:', polaroids.length, 'polaroids (captions off)');

  return polaroids;
}
