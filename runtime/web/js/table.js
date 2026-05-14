// runtime/web/js/table.js — Wooden table plane (the 60% dominant surface).
//
// Per UI-SPEC §"60% Dominant — Table surface":
//   - PlaneGeometry sized SCATTER_BOUNDS × TABLE_OVERSCAN (50% larger than the
//     polaroid scatter so the table edge never appears in camera frame).
//   - MeshStandardMaterial with warm walnut color (#7a5a3a), roughness 0.85,
//     metalness 0. No wood-grain texture in Plan 02 — that's optional Phase 1
//     polish. The flat warm color reads correctly under HemisphereLight + key
//     light alone.
//   - receiveShadow = true (the table is where polaroid contact shadows fall —
//     SCENE-07 §"#1 cue that distinguishes physical objects from stickers").
//   - castShadow = false (nothing below the table to cast onto — optimization).
//
// PlaneGeometry defaults to the XY plane (upright). Rotate -π/2 on X to lie
// flat with Y up, matching the scene's world axes (Y is vertical).

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG } from './config.js';
import { createWoodCanvas } from './wood-texture.js';
import { loadImageAsTexture } from './texture-cache.js';
import { TABLETOP_URIS } from './tabletop-data.js';

export function createTable() {
  const w = CONFIG.SCATTER_BOUNDS_W * CONFIG.TABLE_OVERSCAN;
  const d = CONFIG.SCATTER_BOUNDS_D * CONFIG.TABLE_OVERSCAN;
  const geom = new THREE.PlaneGeometry(w, d);

  // Material starts with a placeholder color. If CONFIG.TABLETOP_IMAGE is
  // set, a TextureLoader async-replaces the map once the image is decoded.
  // Otherwise the procedural wood canvas is used immediately.
  const mat = new THREE.MeshStandardMaterial({
    color: CONFIG.COLOR_TABLE,
    roughness: CONFIG.TABLE_ROUGHNESS,
    metalness: 0.0,
  });

  // Allow runtime override of the tabletop via window.POLAROIDS_TABLETOP
  // (set by config-overrides.js, which the installer rewrites). Falls back
  // to the bundled CONFIG.TABLETOP_IMAGE if the override isn't present.
  const tabletopChoice = (typeof window !== 'undefined' && window.POLAROIDS_TABLETOP !== undefined)
    ? window.POLAROIDS_TABLETOP
    : CONFIG.TABLETOP_IMAGE;

  if (tabletopChoice && TABLETOP_URIS[tabletopChoice]) {
    // Use the inlined data: URI (file:// can't load cross-file images in WebGL).
    const url = TABLETOP_URIS[tabletopChoice];
    // Use our no-CORS image loader (works over file://). Tile 3×2 so the
    // low-res webp doesn't stretch.
    loadImageAsTexture(url).then((tex) => {
      // MirroredRepeatWrapping reflects the texture at every tile boundary, so
      // adjacent tiles match perfectly along the seam — invisible regardless of
      // where the camera is. RepeatWrapping always produces a hard seam at
      // y=0 (the world Z=0 line which falls right in the middle of the initial
      // camera view). Mirror eliminates that.
      tex.wrapS = THREE.MirroredRepeatWrapping;
      tex.wrapT = THREE.MirroredRepeatWrapping;
      tex.repeat.set(3, 2);
      // Belt-and-suspenders shift: even with mirror, offset half-a-tile in y
      // so any subtle pattern variance lands away from the initial camera
      // center. Mirror does the heavy lifting; this is just decoration.
      tex.offset.set(0, 0.25);
      mat.map = tex;
      mat.color = new THREE.Color(0xffffff);
      mat.needsUpdate = true;
    }).catch((err) => {
      console.warn(`[table] tabletop image load failed (${url}); falling back to procedural wood`, err);
      const woodCanvas = createWoodCanvas(CONFIG.COLOR_TABLE);
      const woodTexture = new THREE.CanvasTexture(woodCanvas);
      woodTexture.colorSpace = THREE.SRGBColorSpace;
      woodTexture.wrapS = THREE.ClampToEdgeWrapping;
      woodTexture.wrapT = THREE.ClampToEdgeWrapping;
      woodTexture.needsUpdate = true;
      mat.map = woodTexture;
      mat.color = new THREE.Color(0xffffff);
      mat.needsUpdate = true;
    });
  } else {
    // Procedural wood-grain canvas → CanvasTexture, one tile across the plane.
    const woodCanvas = createWoodCanvas(CONFIG.COLOR_TABLE);
    const woodTexture = new THREE.CanvasTexture(woodCanvas);
    woodTexture.colorSpace = THREE.SRGBColorSpace;
    woodTexture.wrapS = THREE.ClampToEdgeWrapping;
    woodTexture.wrapT = THREE.ClampToEdgeWrapping;
    woodTexture.needsUpdate = true;
    mat.map = woodTexture;
    mat.color = new THREE.Color(0xffffff);
    mat.needsUpdate = true;
  }

  const mesh = new THREE.Mesh(geom, mat);
  // Rotate to lie flat in the XZ plane (Y up).
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0;
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  mesh.name = 'table';
  return mesh;
}
