// Example shape of the photo pool. Copy this file over `photos-data.js` to
// see the screensaver render a single placeholder polaroid against the
// floral tabletop. The placeholder below is a 1×1 transparent PNG so the
// example commits cleanly — replace with real photo data URIs (JPEG/PNG)
// once you point the build pipeline at your own images.
//
// Each entry must be a `data:` URI; the runtime never fetches over the
// network (the bundle has to work offline inside a `.saver`).
window.POLAROIDS_PHOTOS = [
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
];
