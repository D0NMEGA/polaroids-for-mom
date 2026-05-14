// runtime/web/js/main.js — Phase 1 scatter-layout entrypoint (Plan 04).
//
// Replaces the Plan 02 scene-foundation entrypoint. Wires together:
//   - the WebGLRenderer + PerspectiveCamera (renderer.js)
//   - the Scene root with lights + table (scene.js, Plan 02)
//   - the TextureCache (texture-cache.js, Plan 02)
//   - the createScatterLayout composer (scatter-layout.js, Plan 04)
//   - the 30-FPS-throttled rAF loop (frame-loop.js, Plan 02)
//
// At this point, opening runtime/web/index.html in Safari should render the
// warm-lit wooden table populated with 25-40 polaroids. Each polaroid carries
// one of the 12 Drive/ placeholder photos (cycled — each photo appears ~3x),
// rotated ±15° within its face plane, with soft contact shadows beneath every
// card. About 27.5% of polaroids carry a tape strip; about 5% carry two.
//
// At Plan 05 the camera ambient drift went live (figure-8 lissajous with two
// dwell points; 90s cycle, 180s under prefers-reduced-motion). At Plan 06 the
// lift sequence is now live: every 12-18s (jittered, Fisher-Yates deck), one
// polaroid runs idle → rising (1.2s back.out) → 6s hold facing camera →
// falling (1.5s power2.inOut) → idle, driven by a single GSAP timeline; the
// scheduler suspends entirely under prefers-reduced-motion. The lifted card
// tracks the (still-drifting) camera during the 6s hold so it stays centered
// and face-on.
//
// Forbidden surfaces here (locked from Plan 02 onward):
//   - No user-input controller (screensaver is non-interactive per SCENE-10).
//   - No debug HUD / live tweak panel (SCENE-10).
//   - No scene mutations outside `tick` / `resize` / bootstrap — keeps the
//     mutation surface tightly bounded for Plans 05/06.
//
// GSAP is loaded via the UMD <script> tag in index.html (window.gsap surface).
// Plan 06's lift-timeline.js resolves the reference via ESM-first / UMD fallback;
// main.js never imports gsap directly, so the entrypoint stays slim.

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG } from './config.js';
import { createScene } from './scene.js';
import { createRenderer, createCamera } from './renderer.js';
import { createFrameLoop } from './frame-loop.js';
import { TextureCache } from './texture-cache.js';
import { createScatterLayout } from './scatter-layout.js';
import { createCameraPath } from './camera-path.js';
import { createZoomScheduler } from './zoom-scheduler.js';
import { buildCameraZoom } from './camera-zoom.js';

async function bootstrap() {
  const canvas = document.getElementById('scene');
  const renderer = createRenderer(canvas);
  const scene = createScene();
  const camera = createCamera();
  const textureCache = new TextureCache();
  const cameraPath = createCameraPath();

  // Keep renderer + camera in sync with the window. The screensaver host can
  // resize the WKWebView on display-change events; without this handler the
  // canvas would letterbox or stretch on the second display.
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  // Build the scatter BEFORE starting the frame loop. The await pre-loads every
  // photo texture so the first rendered frame already shows all photos (no flash
  // of blank white apertures).
  await createScatterLayout(scene, textureCache);

  // Camera-zoom interrupt state. When true, the frame loop stops writing the
  // figure-8 position to the camera so the GSAP zoom timeline owns the camera
  // pose for the duration of the event. Cleared in the timeline's onComplete.
  let zoomActive = false;
  // Most recently observed loop time; the zoom scheduler reads this when it
  // needs to predict where the figure-8 will be at the end of the return tween.
  let lastT = 0;

  const zoomScheduler = createZoomScheduler(
    scene,
    camera,
    cameraPath,
    () => lastT,
    (active) => { zoomActive = active; },
  );

  const loop = createFrameLoop({
    tick: (_dt, t) => {
      lastT = t;
      // While zoomActive, GSAP owns camera.position + lookAt. Skipping the
      // path write here is what lets the zoom be visible — otherwise the
      // path would overwrite GSAP's writes each frame.
      if (!zoomActive) {
        cameraPath.update(camera, t);
      }
    },
    render: () => {
      renderer.render(scene, camera);
    },
  });

  loop.start();
  zoomScheduler.start();

  console.log('[polaroids] live', {
    revision: THREE.REVISION,
    polaroids: scene.userData.polaroids.length,
    textures: textureCache.size(),
    fps: CONFIG.FPS_CAP,
    reducedMotion: zoomScheduler.isReducedMotion,
    period: cameraPath.prefersReducedMotion ? '180s (reduced motion)' : '90s',
    zoomEvery: `${CONFIG.ZOOM_INTERVAL_S}s (hold ${CONFIG.ZOOM_HOLD_S}s)`,
  });

  // ─── Immediate first-zoom (2s after start) ────────────────────────
  // Calls the proper buildCameraZoom path so the photo-up orientation
  // fix is exercised. After this one fires, the scheduler takes over
  // with 15s intervals. If Donovan still sees no zoom after this fires,
  // the scheduler path is broken downstream.
  setTimeout(() => {
    if (!scene.userData.polaroids || scene.userData.polaroids.length === 0) {
      console.warn('[zoom-test] polaroids array empty — skipping immediate test');
      return;
    }
    const target = scene.userData.polaroids[
      Math.floor(Math.random() * scene.userData.polaroids.length)
    ];
    console.log('[zoom-test] firing immediate zoom on', target.name);
    zoomActive = true;
    const tl = buildCameraZoom(
      camera,
      target,
      cameraPath,
      () => lastT,
      {
        onComplete: () => {
          zoomActive = false;
          console.log('[zoom-test] immediate zoom complete — scheduler owns subsequent events');
        },
      },
    );
    if (!tl) {
      // buildCameraZoom returned null (gsap unavailable). onComplete already fired.
      console.error('[zoom-test] buildCameraZoom returned null');
    }
  }, 2000);
  // ──────────────────────────────────────────────────────────────────
}

bootstrap();
