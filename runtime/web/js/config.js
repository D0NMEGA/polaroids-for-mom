// Phase 1 scene constants — source: 01-UI-SPEC.md
//
// Single source of truth for every numeric / string constant downstream Plans
// 02-07 import. Values copied verbatim from .planning/phases/
// 01-three-js-scene-prototype/01-UI-SPEC.md; no aesthetic decisions live here.
// Future plans MUST import from this module rather than invent new values.

export const CONFIG = {
  // Polaroid card geometry (UI-SPEC §"Scene composition spacing")
  POLAROID_W: 1.0,
  POLAROID_H: 1.236,
  POISSON_MIN_DIST: 0.70,                  // × POLAROID_W
  ROTATION_RANGE: Math.PI / 2,             // radians (= 90 deg) — natural-scatter override
  STACK_Z_OFFSET: 0.003,
  POLAROID_Y_LIFT: 0.012,                  // base Y above the table to prevent z-fighting
  // Card internal proportions (UI-SPEC §"Polaroid card internal proportions")
  BORDER_TOP_FRAC: 0.05,
  BORDER_SIDE_FRAC: 0.05,
  BORDER_BOTTOM_FRAC: 0.18,
  APERTURE_FRAC: 0.80,
  // Camera / scene composition
  TABLE_PITCH_DEG: -20,
  CAMERA_FOV: 38,
  CAMERA_HEIGHT_MULT: 1.8,                 // × POLAROID_H
  SCATTER_BOUNDS_W: 20,
  SCATTER_BOUNDS_D: 14,
  TABLE_OVERSCAN: 1.5,                     // table plane = SCATTER_BOUNDS × this
  // Tape — disabled per Donovan's UAT; tape didn't read as polaroid-tape, distracting
  TAPE_RATIO: 0.0,
  TAPE_DOUBLE_RATIO: 0.0,
  TAPE_W: 0.30,
  TAPE_H: 0.10,
  // Camera path (UI-SPEC §"Camera path geometry")
  LISSAJOUS_A: 4.0,
  LISSAJOUS_B: 2.5,
  LISSAJOUS_PERIOD_S: 90,
  DWELL_TIMES: [0.25, 0.75],
  DWELL_DURATION_S: 2.5,
  // Camera-zoom interrupt (replaces the polaroid lift)
  // Every ZOOM_INTERVAL_S the camera leaves the figure-8, dives to a 90°
  // bird's-eye view of a random polaroid, holds, then returns to where the
  // figure-8 would currently be. Lift constants kept for back-compat but
  // unused at runtime.
  ZOOM_INTERVAL_S: 15,
  ZOOM_HOLD_S: 3,
  ZOOM_TRANSITION_S: 2.5,                  // dive + return duration — slower feels more deliberate
  ZOOM_HEIGHT: 2.2,                        // camera Y above the polaroid at hold — leaves ~75px top/bottom margin at 900-tall viewport
  ZOOM_TRANSITION_EASE: 'power2.inOut',
  LIFT_INTERVAL_MIN_S: 12,                 // legacy / disabled
  LIFT_INTERVAL_MAX_S: 18,
  LIFT_RISE_S: 1.2,
  LIFT_HOLD_S: 6.0,
  LIFT_FALL_S: 1.5,
  LIFT_RISE_EASE: 'back.out(1.4)',
  LIFT_FALL_EASE: 'power2.inOut',
  LIFT_DISTANCE_FROM_CAMERA: 2.5,
  // Performance (UI-SPEC §"Performance contract", MOTION-10)
  FPS_CAP: 30,
  TEXTURE_CACHE_MAX: 60,
  // Scene density
  SCATTER_COUNT_MIN: 25,
  SCATTER_COUNT_MAX: 80,
  SCATTER_COUNT_TARGET: 60,
  // Tabletop selection. null = procedural wood (table.js builds the canvas).
  // Anything else loads /tabletops/{value}.webp as the table material.
  // Available files (in runtime/web/tabletops/): arch, floral, straps, wallpaper.
  // Future Phase 6 hooks this into the screensaver options panel.
  TABLETOP_IMAGE: 'floral',
  // Colors (UI-SPEC §"Color")
  COLOR_TABLE: 0x3d2817,                   // darker walnut — Donovan UAT override
  COLOR_POLAROID_BORDER: 0xf5efe2,
  COLOR_PHOTO_BASE: 0xffffff,
  COLOR_BACKGROUND: 0x3d0a14,              // dark maroon — Donovan UAT override (applies to all tabletop patterns)
  COLOR_CAPTION: '#2a2419',
  COLOR_HEMI_SKY: 0xfff2d8,
  COLOR_HEMI_GROUND: 0x3a2a1a,
  COLOR_KEY: 0xfff0d6,
  HEMI_INTENSITY: 0.4,
  KEY_INTENSITY: 0.7,
  KEY_POSITION: [-3, 4, 2],
  // Roughness
  TABLE_ROUGHNESS: 0.85,
  BORDER_ROUGHNESS_MIN: 0.75,
  BORDER_ROUGHNESS_MAX: 0.95,
  APERTURE_ROUGHNESS: 0.4,
  // Shadow
  SHADOW_MAP_SIZE: 2048,
  SHADOW_BIAS: -0.0005,
  SHADOW_RADIUS: 4,
  // Tape palette (UI-SPEC §"Tape strip palette")
  TAPE_PALETTE: [
    { name: 'cream',     color: 0xf0e6cc, opacity: 0.75 },
    { name: 'dustyPink', color: 0xd4a89f, opacity: 0.75 },
    { name: 'kraft',     color: 0xa78060, opacity: 0.80 },
    { name: 'fadedBlue', color: 0x9ab0b8, opacity: 0.70 },
  ],
  // Caption (UI-SPEC §"Caption typography")
  CAPTION_TEXTURE_W: 1024,
  CAPTION_TEXTURE_H: 1280,
  CAPTION_PX_SIZE: 36,
  CAPTION_MAX_CHARS: 28,
  CAPTION_ROTATION_JITTER_DEG: 1.5,
  // Phase 1 placeholder photo source
  PLACEHOLDER_PHOTO_DIR: '../../Drive',     // 12 photos relative to runtime/web/
};
