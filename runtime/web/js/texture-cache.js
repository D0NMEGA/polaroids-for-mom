// runtime/web/js/texture-cache.js — LRU texture cache for Plan 03+ polaroid factory.
//
// Per UI-SPEC §"Performance contract" + ARCHITECTURE.md §"Memory Discipline":
//   - Bounded resident texture count (default 60 from CONFIG.TEXTURE_CACHE_MAX).
//   - LRU eviction: oldest unused texture is disposed when a new one would push
//     the cache past capacity.
//   - On eviction we MUST call both:
//       texture.dispose()                  // frees GPU memory
//       texture.source.data.close?.()      // closes ImageBitmap (three.js #23953)
//     Without the second call ImageBitmap-backed textures leak memory in
//     long-running renderers — exactly what we're building for the screensaver.
//
// Per SCENE-08 + PITFALLS §12: every loaded texture MUST have
// colorSpace = SRGBColorSpace set BEFORE returning. The default colorSpace
// (NoColorSpace, equivalent to LinearSRGB on the GPU) renders photos green/dim.
//
// This cache is constructed in Plan 02 but is not exercised until Plan 03's
// polaroid factory starts loading photo textures. Building it now means Plan 03
// can import-and-use from its first commit (PERF-03 carries through to Phase 6
// but the implementation lives here so the API is locked from day one).

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG } from './config.js';

/**
 * Load an image at `url` and return a THREE.Texture. Bypasses
 * THREE.TextureLoader so we can avoid setting img.crossOrigin entirely.
 * Required for file:// loading in WKWebView — any crossOrigin value
 * (including empty string) triggers CORS-mode which always fails over
 * file://, producing tainted/blank textures.
 *
 * @param {string} url
 * @returns {Promise<THREE.Texture>}
 */
export function loadImageAsTexture(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    // DO NOT set img.crossOrigin — leaving the attribute absent is the
    // only way to get "no CORS" mode in the HTML spec.
    img.onload = () => {
      const tex = new THREE.Texture(img);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 4;
      tex.needsUpdate = true;
      resolve(tex);
    };
    img.onerror = (err) => {
      reject(new Error(`[texture-cache] image load failed for ${url}`));
    };
    img.src = url;
  });
}

export class TextureCache {
  constructor(maxResident = CONFIG.TEXTURE_CACHE_MAX) {
    this.map = new Map();
    this.max = maxResident;
    // No three.js TextureLoader — its default crossOrigin="anonymous" cannot
    // be unset by setCrossOrigin('') (the empty string maps to "anonymous"
    // per HTML spec). Setting it to null also tripped edge cases. We instead
    // use a custom Image()-based loader that NEVER assigns img.crossOrigin —
    // the only reliable way to do same-document file:// loads in WKWebView.
  }

  async get(url) {
    if (this.map.has(url)) {
      const t = this.map.get(url);
      this.map.delete(url);
      this.map.set(url, t);
      return t;
    }

    const texture = await loadImageAsTexture(url);
    this.map.set(url, texture);

    if (this.map.size > this.max) {
      // Map.entries() iteration order = insertion order, so .next() yields
      // the oldest (least recently used) entry first.
      const oldest = this.map.entries().next().value;
      if (oldest) {
        const [oldUrl, oldTex] = oldest;
        oldTex.dispose();
        // ImageBitmap leak prevention — three.js issue #23953.
        if (oldTex.source?.data?.close) oldTex.source.data.close();
        this.map.delete(oldUrl);
      }
    }
    return texture;
  }

  size() { return this.map.size; }
  has(url) { return this.map.has(url); }
}
