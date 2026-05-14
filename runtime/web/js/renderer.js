// runtime/web/js/renderer.js — WebGLRenderer + PerspectiveCamera factories.
//
// Color-management invariants (SCENE-08, PITFALLS §12):
//   - THREE.ColorManagement.enabled = true (default in r152+; explicit for clarity)
//   - renderer.outputColorSpace = THREE.SRGBColorSpace
//   - renderer.toneMapping = THREE.NoToneMapping  (we want flat photo reproduction)
//
// Shadow contract (SCENE-07, UI-SPEC §"Shadow contract"):
//   - shadowMap.enabled = true
//   - shadowMap.type = THREE.PCFSoftShadowMap  (soft penumbra contact shadows)
//
// Renderer choice locked (SCENE-09, CLAUDE.md "What NOT to Use"):
//   - THREE.WebGLRenderer is the only renderer used; the WebGPU alternative
//     is unverified inside legacyScreenSaver WKWebView and is explicitly out
//     of scope per the project stack lock.
//
// No post-processing surface (SCENE-10, MOTION-09):
//   - No effect-composition / bloom / DOF / motion-blur pipeline anywhere.

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG } from './config.js';

export function createRenderer(canvas) {
  THREE.ColorManagement.enabled = true;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(CONFIG.COLOR_BACKGROUND);
  return renderer;
}

export function createCamera() {
  // FOV 38°, near 0.1, far 100 per UI-SPEC §"Camera path geometry"
  const cam = new THREE.PerspectiveCamera(
    CONFIG.CAMERA_FOV,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  // Initial pose: above table center, looking down at origin.
  // Plan 05 will animate this along the lissajous path; Plan 02 just sets
  // a sane static pose so opening index.html shows the table from the
  // intended downward angle.
  cam.position.set(0, CONFIG.CAMERA_HEIGHT_MULT * CONFIG.POLAROID_H + 3, 4);
  cam.lookAt(0, 0, 0);
  return cam;
}
