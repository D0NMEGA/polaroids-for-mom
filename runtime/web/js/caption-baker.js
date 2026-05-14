// Caption baker — Caveat → OffscreenCanvas → THREE.CanvasTexture.
//
// Source: 01-07-PLAN.md <interfaces> (verbatim) +
//         01-UI-SPEC.md §"Caption typography" +
//         01-UI-SPEC.md §"Phase 1 implementation note for typography" +
//         PITFALLS.md §11 (file:// CORS), §12 (color management).
//
// This file implements the Phase 1 contract for CAPTION-01..06:
//   - CAPTION-01: caption on white bottom border (drawn in bottom 18% strip)
//   - CAPTION-02: baked into texture, NEVER a DOM overlay
//   - CAPTION-03: single line, ≤28 chars (truncation drops place segment first)
//   - CAPTION-04: three-tier degradation — empty text leaves a blank border
//   - CAPTION-05: Caveat via inline base64 woff2 (loaded by fonts.css),
//                 document.fonts.ready guard against fallback flash
//   - CAPTION-06: ink-dark color (#2a2419) via CONFIG.COLOR_CAPTION
//
// Phase 5's `polaroids compress` will replace this runtime canvas-bake with a
// build-time PNG composite into the photo texture itself (per CAPS-06). For
// Phase 1, we satisfy the visual contract with a runtime bake at scene load.

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG } from './config.js';

/**
 * Waits for the Caveat font to be loaded and ready.
 *
 * The inline base64 woff2 from fonts.css is loaded async on first use;
 * document.fonts.ready resolves when all declared @font-face rules have
 * completed loading. We additionally call document.fonts.load(...) to
 * force-trigger the woff2 decode if a downstream caller hasn't otherwise
 * referenced the family yet.
 *
 * Defense against the "first lift shows Times Roman" failure mode (PITFALLS
 * UX §"flash of unstyled text"). MUST be awaited BEFORE any caption is baked.
 *
 * Idempotent and safe to call multiple times.
 *
 * @returns {Promise<void>}
 */
export async function waitForCaveatFont() {
  // Force-load the Caveat declaration if not already triggered.
  try {
    await document.fonts.load(`${CONFIG.CAPTION_PX_SIZE}px Caveat`);
  } catch (_) {
    // Some browsers throw if the @font-face hasn't been registered yet; fall through.
  }
  await document.fonts.ready;
  // Sanity check — if Caveat is still not available, we proceed but with a console
  // warning; captions render in a fallback font (visible regression but not fatal).
  if (!document.fonts.check(`${CONFIG.CAPTION_PX_SIZE}px Caveat`)) {
    console.warn('[polaroids] Caveat font not detected after document.fonts.ready — captions may use fallback');
  }
}

/**
 * Bakes a caption onto a polaroid-border-shaped canvas and returns a
 * THREE.CanvasTexture suitable for use as the border material's `map`.
 *
 * The canvas is sized CAPTION_TEXTURE_W × CAPTION_TEXTURE_H (1024 × 1280 per
 * UI-SPEC §"Caption typography"). The whole canvas is filled with the polaroid
 * border color (#f5efe2 warm off-white) — this REPLACES the border material's
 * flat color with a textured version that includes the caption. The aperture
 * mesh sits on top of this border (Plan 03 layout) so the photo still shows
 * through; only the visible white borders gain the caption text.
 *
 * The caption is drawn in the bottom border strip (the 18% region at the
 * bottom of the card), center-aligned horizontally, vertically centered within
 * the strip, with a per-polaroid ±1.5° rotation jitter for handmade feel.
 *
 * If text is empty (''), the canvas is just the flat warm-white background —
 * no text drawn (CAPTION-04 empty branch).
 *
 * The texture's colorSpace is set to THREE.SRGBColorSpace per SCENE-08 /
 * PITFALLS §12 so it composes correctly with the SRGB-tagged photo textures.
 *
 * @param {string} text - caption string (may be empty)
 * @param {object} [options] - reserved for future per-call overrides; unused in Phase 1
 * @returns {THREE.CanvasTexture}
 */
export function bakeCaptionTexture(text, options = {}) {
  const W = CONFIG.CAPTION_TEXTURE_W;
  const H = CONFIG.CAPTION_TEXTURE_H;

  // Use OffscreenCanvas if available (faster + no DOM attachment); fall back
  // to <canvas>. Safari 16.4+ supports OffscreenCanvas which covers Sequoia.
  let canvas;
  if (typeof OffscreenCanvas !== 'undefined') {
    canvas = new OffscreenCanvas(W, H);
  } else {
    canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
  }
  const ctx = canvas.getContext('2d');

  // 1) Fill background with the polaroid border color (#f5efe2 warm off-white).
  //    This makes the canvas serve as the full border material map.
  ctx.fillStyle = '#f5efe2';
  ctx.fillRect(0, 0, W, H);

  // 2) Draw caption in the bottom 18% strip if text is non-empty.
  if (text && text.trim().length > 0) {
    // Bottom strip extent: from y = H * (1 - BORDER_BOTTOM_FRAC) to y = H.
    const stripTop = H * (1 - CONFIG.BORDER_BOTTOM_FRAC);
    const stripBottom = H;
    const stripCenterY = (stripTop + stripBottom) / 2;
    const stripCenterX = W / 2;

    // Caption truncation safety (CAPTION-03 / CAPS-04 truncation order):
    // If "Month YYYY / Place" exceeds CAPTION_MAX_CHARS, drop the place segment.
    let displayText = text;
    if (displayText.length > CONFIG.CAPTION_MAX_CHARS) {
      const slashIdx = displayText.indexOf(' / ');
      if (slashIdx > 0) displayText = displayText.substring(0, slashIdx);
      // If date-only is somehow still too long (impossible in English month-year,
      // but defensive), hard-truncate to the limit.
      if (displayText.length > CONFIG.CAPTION_MAX_CHARS) {
        displayText = displayText.substring(0, CONFIG.CAPTION_MAX_CHARS);
      }
    }

    // 3) Set up text style. Caveat first, with 'cursive' as a generic fallback
    //    (only kicks in if Caveat fails — waitForCaveatFont already warns in
    //    that case).
    ctx.font = `${CONFIG.CAPTION_PX_SIZE}px Caveat, cursive`;
    ctx.fillStyle = CONFIG.COLOR_CAPTION; // '#2a2419' ink-dark (CAPTION-06)
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // 4) Apply per-polaroid rotation jitter (±CAPTION_ROTATION_JITTER_DEG).
    //    (Math.random() - 0.5) is uniformly in [-0.5, +0.5]; ×2 yields [-1, +1];
    //    × jitter-deg yields [-1.5°, +1.5°]; deg-to-rad scales for ctx.rotate.
    const jitterRad =
      ((Math.random() - 0.5) * 2 * CONFIG.CAPTION_ROTATION_JITTER_DEG) *
      Math.PI / 180;
    ctx.save();
    ctx.translate(stripCenterX, stripCenterY);
    ctx.rotate(jitterRad);
    ctx.fillText(displayText, 0, 0);
    ctx.restore();
  }

  // 5) Build the CanvasTexture. SRGBColorSpace matches photo + wood textures
  //    so the border composes correctly under the warm hemisphere/key lights.
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  // One-shot bake — once uploaded to the GPU, no further updates needed.
  return texture;
}
