// runtime/web/js/scene.js — Scene composition root.
//
// Per UI-SPEC §"Scene Primitives" + §"Color":
//   - scene.background = warm brown #1a140e (NEVER pure black per PITFALLS UX
//     §"first impression is a black screen").
//   - Add the HemisphereLight + DirectionalLight from createLights().
//   - Add the wooden table plane from createTable().
//
// Intentionally NOT here (separate-of-concerns boundaries):
//   - Polaroid scatter — added by Plan 03 (polaroid.js + scatter.js + deck.js).
//   - Camera controls — none exist (no user-input controller; screensaver is
//     non-interactive per SCENE-10 / PROJECT.md out-of-scope).
//   - Post-processing — forbidden (SCENE-10, MOTION-09).
//   - HUD / overlay text — forbidden (no chrome; only baked polaroid captions
//     count as text, and those are baked into textures in Plan 03+).
//
// This file is intentionally tiny (~15-20 lines of substance). It is the
// integration point Plan 03 extends to add the polaroid scatter.

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG } from './config.js';
import { createLights } from './lights.js';
import { createTable } from './table.js';

export function createScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(CONFIG.COLOR_BACKGROUND);
  // userData.polaroids is populated by createScatterLayout (Plan 04) at runtime.
  // Pre-declared as an empty array so Plan 05/06/07 can rely on the property
  // existing immediately after createScene() — no `?.` chains needed downstream.
  scene.userData = { polaroids: [] };

  const { hemi, key } = createLights();
  scene.add(hemi);
  scene.add(key);
  // DirectionalLight.target is a separate Object3D and MUST be added to the
  // scene for the light's direction-to-target to be computed correctly.
  scene.add(key.target);

  scene.add(createTable());

  return scene;
}
