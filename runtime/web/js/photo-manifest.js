// Auto-loaded from window.POLAROIDS_PHOTOS (set by photos-data.js — a plain
// script tag in index.html, NOT bundled). Empty fallback if missing.
// To add/remove photos: drop files into ~/Pictures/Polaroids for Mom/ and
// double-click refresh-photos.sh — it regenerates photos-data.js.

export const PHOTO_MANIFEST =
  (typeof window !== 'undefined' && Array.isArray(window.POLAROIDS_PHOTOS) && window.POLAROIDS_PHOTOS.length > 0)
    ? window.POLAROIDS_PHOTOS
    : [];
