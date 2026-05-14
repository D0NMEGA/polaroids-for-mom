// runtime/web/js/config-overrides.js
// Runtime overrides for the bundled config. Loaded BEFORE bundle.js as a
// plain (non-module) script so the installer can rewrite this file
// without re-bundling. Currently used for the tabletop selection.
//
// Allowed values for POLAROIDS_TABLETOP: 'arch' | 'floral' | 'straps' |
// 'wallpaper' | null (null = procedural wood grain).
window.POLAROIDS_TABLETOP = 'floral';
