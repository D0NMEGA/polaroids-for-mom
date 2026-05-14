// Polaroid card factory — SX-70 proportions, white border + photo aperture.
//
// Source: 01-UI-SPEC.md §"Polaroid card internal proportions" (SCENE-03 verbatim);
//         01-UI-SPEC.md §"30% Secondary" (border material rules);
//         01-UI-SPEC.md §"10% Accent" (aperture material rules);
//         01-UI-SPEC.md §"Shadow contract" (SCENE-07).
//
// Returns a THREE.Group containing:
//   - border mesh   (MeshStandardMaterial plane, full card, casts + receives shadow)
//   - aperture mesh (MeshStandardMaterial plane, upper 80%, no cast / receives only)
//
// Plan 04 will compose tape strips into the group via group.add(createTape()).
// Plan 06 animates the entire group (position/rotation) during the lift cycle.
// Plan 07 replaces the setCaption stub with the real composite-into-border bake.

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG } from './config.js';

/**
 * Create a polaroid card.
 *
 * @param {string} id - unique polaroid identifier (e.g., "polaroid-00")
 * @param {object} [options]
 * @param {string} [options.photoUrl] - photo source path (caller may later supply texture)
 * @param {string} [options.caption]  - caption text (consumed by Plan 07)
 * @returns {THREE.Group}
 */
export function createPolaroid(id, options = {}) {
  const group = new THREE.Group();
  group.name = id;

  const W = CONFIG.POLAROID_W;
  const H = CONFIG.POLAROID_H;

  // --- Border (white, full card) ---
  const borderGeom = new THREE.PlaneGeometry(W, H);
  const borderRoughness = CONFIG.BORDER_ROUGHNESS_MIN +
    Math.random() * (CONFIG.BORDER_ROUGHNESS_MAX - CONFIG.BORDER_ROUGHNESS_MIN);
  const borderMat = new THREE.MeshStandardMaterial({
    color: CONFIG.COLOR_POLAROID_BORDER,
    roughness: borderRoughness,
    metalness: 0.0,
  });
  const border = new THREE.Mesh(borderGeom, borderMat);
  border.castShadow = true;
  border.receiveShadow = true;
  border.name = 'border';
  group.add(border);

  // --- Aperture (photo plane, upper 80% of card) ---
  // Aperture width  = W × (1 - 2 × BORDER_SIDE_FRAC) = W × 0.90
  // Aperture height = H × APERTURE_FRAC              = H × 0.80
  // Aperture vertical center: +(BORDER_BOTTOM_FRAC - BORDER_TOP_FRAC) × H / 2
  //   = (0.18 - 0.05) × 1.236 / 2 ≈ +0.0803 in local Y (UP, leaving the wider
  //   white strip at the bottom for the caption per SCENE-03 verbatim).
  const apW = W * (1 - 2 * CONFIG.BORDER_SIDE_FRAC);
  const apH = H * CONFIG.APERTURE_FRAC;
  const apY = (CONFIG.BORDER_BOTTOM_FRAC - CONFIG.BORDER_TOP_FRAC) * H / 2;

  const apertureGeom = new THREE.PlaneGeometry(apW, apH);
  const apertureMat = new THREE.MeshStandardMaterial({
    color: CONFIG.COLOR_PHOTO_BASE,
    roughness: CONFIG.APERTURE_ROUGHNESS,
    metalness: 0.0,
  });
  const aperture = new THREE.Mesh(apertureGeom, apertureMat);
  // Tiny +Z offset to defeat polygon co-planarity z-fighting between border and aperture.
  aperture.position.set(0, apY, 0.001);
  aperture.castShadow = false;       // parent border casts the polaroid's shadow
  aperture.receiveShadow = true;
  aperture.name = 'aperture';
  group.add(aperture);

  // userData carries metadata + setter methods.
  // restPosition / restRotation are filled by the caller (Plan 04 scatter) after creation.
  group.userData = {
    id,
    restPosition: new THREE.Vector3(),
    restRotation: new THREE.Euler(),
    photoUrl: options.photoUrl || null,
    caption: options.caption || '',
    hasTape: 0,
    border,
    aperture,
    /**
     * Swap the aperture map with a new texture (used by Plan 04 when textures load).
     * @param {THREE.Texture} texture
     */
    setPhoto(texture) {
      apertureMat.map = texture;
      apertureMat.needsUpdate = true;
    },
    /**
     * Stub for Plan 07 — stores the caption texture reference; Plan 07 replaces
     * this body to composite the baked caption into the border material's map.
     * @param {THREE.Texture | null} texture
     */
    setCaption(texture) {
      this._captionTexture = texture;
    },
  };

  return group;
}
