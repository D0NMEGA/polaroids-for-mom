// Tape strip mesh factory — small unlit color planes layered on polaroid borders.
//
// Source: 01-UI-SPEC.md §"Tape strip palette" (four named colors with exact opacity);
//         01-UI-SPEC.md §"30% Secondary" (MeshBasicMaterial, transparent=true);
//         research/FEATURES.md §3 (slightly raised, soft drop-shadow look).
//
// Caller (Plan 04) composes tape into a polaroid via polaroidGroup.add(createTape())
// and positions the mesh within the polaroid via mesh.position. Caller also decides
// the tape count per polaroid (TAPE_RATIO 27.5% get 1 strip; TAPE_DOUBLE_RATIO 5%
// get 2 strips — a subset of the 27.5%).

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG } from './config.js';

// Re-export the palette from CONFIG so consumers can import it ergonomically
// (rather than reaching back through CONFIG when they only need the palette).
export const TAPE_PALETTE = CONFIG.TAPE_PALETTE;

/**
 * Create one tape strip mesh. The palette color and rotation are randomized per call.
 *
 * @returns {THREE.Mesh}
 */
export function createTape() {
  // Pick a random palette entry: cream / dustyPink / kraft / fadedBlue
  const entry = TAPE_PALETTE[Math.floor(Math.random() * TAPE_PALETTE.length)];

  const geom = new THREE.PlaneGeometry(CONFIG.TAPE_W, CONFIG.TAPE_H);
  // MeshBasicMaterial (NOT Standard) per UI-SPEC §"30% Secondary" — tape is unlit
  // and reads as flat colored masking tape rather than reflective material.
  const mat = new THREE.MeshBasicMaterial({
    color: entry.color,
    transparent: true,
    opacity: entry.opacity,
  });
  const mesh = new THREE.Mesh(geom, mat);

  // Random rotation 0..π/2 (0-90°) around Z — tape lies on the polaroid card face,
  // so its surface normal IS the polaroid's surface normal.
  mesh.rotation.z = Math.random() * (Math.PI / 2);

  // Raise slightly above the polaroid border to read as a layered piece of tape
  // rather than a co-planar decal (matches FEATURES.md §3 "soft drop shadow look").
  mesh.position.z = 0.005;

  // castShadow lets the tape strip cast its own tiny shadow onto the polaroid
  // border below it — the "drop shadow look" without any post-processing.
  mesh.castShadow = true;
  mesh.receiveShadow = false;

  mesh.name = `tape-${entry.name}`;
  mesh.userData = { paletteName: entry.name };
  return mesh;
}
