// runtime/web/js/wood-texture.js — Procedural warm wood-grain canvas.
//
// Source: 01-UI-SPEC.md §"60% Dominant — Table surface" + research/FEATURES.md
// §"Wood-grain table surface" — desaturated planks-with-grain, no normal map.
//
// Generates a 1024×1024 canvas with sine-modulated plank lightness + fine
// per-pixel noise. The canvas is uploaded to three.js via CanvasTexture in
// table.js. No external texture file → bundle stays slim and the look stays
// on-brief.
//
// Original Phase 1 polish-deferred per Plan 02 comments — restored after
// Donovan's UAT noted "the table is not actually textured".
//
// @param {number} baseRgbHex - base wood color (0xRRGGBB) — defaults to CONFIG.COLOR_TABLE
// @returns {HTMLCanvasElement}

export function createWoodCanvas(baseRgbHex) {
  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  // Decompose base hex to RGB
  const baseR = (baseRgbHex >> 16) & 0xff;
  const baseG = (baseRgbHex >> 8) & 0xff;
  const baseB = baseRgbHex & 0xff;
  ctx.fillStyle = `rgb(${baseR},${baseG},${baseB})`;
  ctx.fillRect(0, 0, size, size);

  // Procedural grain. The canvas is applied to a table plane that's been rotated
  // -π/2 on X to lie flat: canvas X → world X (left-right), canvas Y → world Z
  // (front-back from camera). Planks run as vertical strips in the canvas, which
  // become front-to-back lanes on the table. Real wood grain runs ALONG the
  // plank length, so the high-frequency sine has to vary across the plank
  // length axis (canvas Y) and stay roughly constant across the plank width
  // (canvas X) — i.e. depend mostly on Y, with a small per-plank phase offset.
  //
  // Wait — re-read: bands of constant brightness should be PARALLEL to the
  // plank length. For bands parallel to canvas Y, brightness must depend on X
  // (the perpendicular axis), so the SINE varies in X. That gives vertical
  // light/dark stripes inside each plank — the visible grain lines.
  //
  // Planks are 60px wide (half the prior 120). High-frequency grain (rate
  // ~2.0 = 0.04×50) gives fine streaks along the plank length.
  const plankW = 60;
  const grainRate = 0.04 * 50;        // ≈ 2.0 — fine grain streaks
  const secondaryRate = 0.013 * 50;   // low-frequency lightness drift (~ 0.65)
  const img = ctx.getImageData(0, 0, size, size);
  const data = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const plankX = x % plankW;
      const plankPhase = Math.floor(x / plankW) * 1.7;
      // Primary streaks: sine varying in X within the plank, randomized phase
      // per plank so adjacent planks don't share grain lines.
      const grain =
        Math.sin((plankX + plankPhase * 100) * grainRate) * 0.5 +
        Math.sin((plankX + plankPhase * 50) * secondaryRate) * 0.3 +
        (Math.random() - 0.5) * 0.15;
      // Plank seam: thin darkening at the edge of each plank.
      const seam = plankX < 2 ? -0.15 : 0;
      const delta = grain * 18 + seam * 40;
      const i = (y * size + x) * 4;
      data[i] = clamp255(data[i] + delta);
      data[i + 1] = clamp255(data[i + 1] + delta * 0.9);
      data[i + 2] = clamp255(data[i + 2] + delta * 0.7);
    }
  }
  ctx.putImageData(img, 0, 0);
  return canvas;
}

function clamp255(v) {
  return Math.max(0, Math.min(255, v));
}
