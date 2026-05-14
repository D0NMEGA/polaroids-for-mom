// runtime/web/js/lights.js — Phase 1 lighting recipe.
//
// Per UI-SPEC §"Lighting recipe" + §"Shadow contract":
//   - ONE HemisphereLight  (warm cream sky, warm brown ground bounce, intensity 0.4)
//   - ONE DirectionalLight (warm white key, intensity 0.7, casts shadows, 2048×2048)
//   - NO additional ambient ("No ambient beyond the hemisphere — keeps shadows readable")
//
// Color temperature lock (SCENE-06): warm 3000-3500K only. Cool tints forbidden.
// Shadow camera frustum is sized to cover SCATTER_BOUNDS + 1 unit margin so the
// 25-40 polaroid scatter fits inside the shadow map at full resolution.

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG } from './config.js';

export function createLights() {
  // HemisphereLight — sky/ground tinting + soft bounce light.
  const hemi = new THREE.HemisphereLight(
    CONFIG.COLOR_HEMI_SKY,
    CONFIG.COLOR_HEMI_GROUND,
    CONFIG.HEMI_INTENSITY
  );
  hemi.position.set(0, 5, 0);

  // DirectionalLight (key) — primary shadow source, warm white.
  const key = new THREE.DirectionalLight(
    CONFIG.COLOR_KEY,
    CONFIG.KEY_INTENSITY
  );
  key.position.set(...CONFIG.KEY_POSITION);
  key.target.position.set(0, 0, 0);
  key.castShadow = true;
  key.shadow.mapSize.width = CONFIG.SHADOW_MAP_SIZE;
  key.shadow.mapSize.height = CONFIG.SHADOW_MAP_SIZE;
  key.shadow.bias = CONFIG.SHADOW_BIAS;
  key.shadow.radius = CONFIG.SHADOW_RADIUS;

  // Shadow camera frustum sized to cover SCATTER_BOUNDS plus 1 unit margin.
  // This keeps shadow resolution tight to the scene rather than wasting
  // shadow map pixels on empty space outside the table.
  const half = Math.max(CONFIG.SCATTER_BOUNDS_W, CONFIG.SCATTER_BOUNDS_D) / 2 + 1;
  key.shadow.camera.left = -half;
  key.shadow.camera.right = half;
  key.shadow.camera.top = half;
  key.shadow.camera.bottom = -half;
  key.shadow.camera.near = 0.1;
  key.shadow.camera.far = 20;

  // EXPLICITLY no additional ambient light source — per UI-SPEC §"Lighting
  // recipe": "No ambient beyond the hemisphere — keeps shadows readable."
  return { hemi, key };
}
