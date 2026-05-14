<div align="center">

# Polaroids for Mom

**A handmade Mother's Day screensaver for macOS.**
A warm, slow camera drift across a wooden table scattered with the family's polaroids — every few seconds, the camera dives in on one.

<a href="assets/screensaver.mp4">
  <img src="assets/screensaver.gif" alt="15-second clip of the screensaver: camera drifting across a floral tabletop scattered with polaroid photos, then zooming in on one" width="720" />
</a>

<sub><em>15s @ 30fps, captured 1:1 from the running screensaver. Click the GIF for the 1440×900 MP4.</em></sub>

<br/>

[![macOS](https://img.shields.io/badge/macOS-Sequoia%2015-black?logo=apple&logoColor=white)](#)
[![three.js](https://img.shields.io/badge/three.js-r184-000000?logo=three.js)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88ce02)](https://gsap.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

</div>

---

## What this is

A native macOS `.saver` bundle that wraps a [three.js](https://threejs.org/) scene inside a WKWebView. It renders ~60 polaroid photos scattered across a wooden table with a tablecloth pattern (floral, arched windows, leather straps, or wallpaper). A perspective camera traces a slow figure-8 Lissajous path across the table; every 15 seconds it leaves the path, dives to a bird's-eye view of a random polaroid, holds for 3 seconds, then drifts back.

It was built as a belated Mother's Day gift — a screensaver that feels like a handmade scrapbook coming alive, not a generic photo slideshow. Photos live inside the bundle and never leave the machine. No network, no telemetry, no App Store.

## Why it exists

Mom's running macOS Sequoia. The brief was simple:

> Mom turns on her MacBook one morning and feels seen.

Everything in this repo serves that line. Warm color, tactile shadows, real polaroid proportions, a tabletop with grain, captions in Caveat (a handwritten font), one-command install with no Gatekeeper dance, no admin password, no internet required after install.

## How it works

```
        ┌──────────────────────────┐
        │  legacyScreenSaver (OS)  │
        └────────────┬─────────────┘
                     │ hosts
        ┌────────────▼─────────────┐
        │  PolaroidsForMom.saver   │
        │  (Cocoa, WebViewSaverView│
        │   from liquidx/webview…) │
        └────────────┬─────────────┘
                     │ embeds
        ┌────────────▼─────────────┐
        │   WKWebView (file://)    │
        │   • three.js r184        │
        │   • GSAP 3.15            │
        │   • photos as data URIs  │
        └──────────────────────────┘
```

The hard parts:

| Problem | Fix |
| --- | --- |
| `legacyScreenSaver` marks the WKWebView as occluded → kills `requestAnimationFrame` after 2–3 seconds ([FB13094564](https://developer.apple.com/forums/thread/736716)) | Inherit the `_setWindowOcclusionDetectionEnabled:NO` private-API call from the [liquidx/webviewscreensaver](https://github.com/liquidx/webviewscreensaver) fork. |
| WKWebView under `file://` blocks ES module imports | Bundle the scene into a single IIFE with esbuild. |
| Gatekeeper on Sequoia 15.1+ removed the right-click → Open bypass | Installer runs `xattr -dr com.apple.quarantine` *before* moving the bundle into `~/Library/Screen Savers/`, so Gatekeeper never sees it as downloaded. |
| Image loaders default to `crossOrigin = 'anonymous'`, which fails under `file://` | Custom `THREE.ImageLoader` that drops the crossOrigin attribute for `file://` and `data:` sources. |
| Bundle size ceiling inside the screensaver sandbox | Photos resized to max-edge 1600px @ JPEG q=85, inlined as data URIs, tabletop textures as 45 KB WebP. |

## Stack

| Layer | Tool | Notes |
| --- | --- | --- |
| Scene | [three.js](https://threejs.org/) r184 | `WebGLRenderer`, hemispheric + key light, contact shadows. |
| Animation | [GSAP](https://gsap.com/) 3.15 | Timelines for the camera-zoom interrupt; Lissajous drift hand-written. |
| Host | [liquidx/webviewscreensaver](https://github.com/liquidx/webviewscreensaver) v2.5 (Apache 2.0) | Cocoa `.saver` bundle with the Sonoma WKWebView occlusion fix baked in. |
| Bundler | esbuild | Single IIFE so `file://` doesn't trip on `import`. |
| Build pipeline | Python 3.13 + Pillow / pillow-heif / piexif | Ingests JPEG/PNG/HEIC, resizes, reads EXIF dates, emits the data-URI manifest. |
| AI captioning *(optional)* | OpenRouter → Kimi K2.5 | Build-time only. Tags photos with a "Month YYYY / Place" caption derived from EXIF + vision. |
| Typography | [Caveat](https://fonts.google.com/specimen/Caveat) (Google Fonts) | woff2 inlined as base64 so the saver is fully offline. |

## Repository layout

```
polaroids-for-mom/
├── assets/                          # Demo media for this README
│   ├── screensaver.gif              # 15s clip (720px)
│   └── screensaver.mp4              # Same clip, full quality
│
├── runtime/
│   ├── web/                         # The three.js scene
│   │   ├── index.html
│   │   ├── css/                     # main.css + fonts.css (Caveat inlined)
│   │   ├── js/                      # Scene source (camera, scatter, polaroid, zoom)
│   │   │   ├── bundle.js            # esbuild IIFE of the ES modules
│   │   │   ├── config.js            # Single source of truth for all constants
│   │   │   ├── photos-data.js       # window.POLAROIDS_PHOTOS = [...]  (empty in source)
│   │   │   └── photos-data.example.js
│   │   ├── tabletops/               # 4 stock patterns: arch / floral / straps / wallpaper
│   │   └── vendor/                  # three.module.min.js, gsap.min.js (vendored, no CDN)
│   │
│   └── PolaroidsSaver/              # Fork of liquidx/webviewscreensaver (Apache 2.0)
│
├── pipeline/                        # Python build pipeline
│   ├── polaroids/                   # Ingest → filter → caption → bundle
│   ├── tests/
│   └── pyproject.toml
│
├── scripts/
│   ├── build.sh                     # xcodebuild + codesign + bundle web/ into .saver
│   ├── install.sh                   # xattr -dr quarantine, copy to ~/Library/Screen Savers
│   └── verify-gate-02.sh            # Smoke-test that the saver process exits cleanly
│
└── ship/                            # Files mom actually receives
    ├── README.md                    # End-user instructions
    ├── Install (Terminal fallback).command
    ├── Refresh Photos.command
    ├── Change Tabletop.command
    └── install-polaroids.applescript
```

## Try it

### Just look at the scene (no Xcode needed)

```bash
git clone https://github.com/D0NMEGA/polaroids-for-mom.git
cd polaroids-for-mom/runtime/web

# Optional: see the scene with a placeholder polaroid
cp js/photos-data.example.js js/photos-data.js

python3 -m http.server 8765
open http://127.0.0.1:8765/
```

You'll get the floral tabletop with whatever photos `photos-data.js` provides. Out of the box that's empty (so the table renders bare); copy the example file, or run the pipeline, to populate it.

### Build the actual `.saver` bundle

Prerequisites: macOS 15 + Xcode 16 + a folder of photos.

```bash
# 1. Drop your photos here (jpg/jpeg/png; HEIC works via pillow-heif)
mkdir -p ~/Pictures/Polaroids\ for\ Mom
cp ~/path/to/family-photos/*.jpg ~/Pictures/Polaroids\ for\ Mom/

# 2. Bake them into the web bundle as data URIs
bash scripts/refresh-photos.sh   # writes runtime/web/js/photos-data.js

# 3. Build the .saver bundle (xcodebuild + codesign --sign -)
bash scripts/build.sh

# 4. Install on the target Mac
bash scripts/install.sh
```

Open **System Settings → Screen Saver → Show All → Polaroids for Mom**. Done.

### Change the tabletop

Tabletop choice lives in `runtime/web/js/config-overrides.js`:

```js
// 'arch' | 'floral' | 'straps' | 'wallpaper' | null  (null = procedural wood)
window.POLAROIDS_TABLETOP = 'floral';
```

The installer (`ship/install-polaroids.applescript`) asks for this at install time, so mom never has to touch a config file.

## Scene constants worth knowing

All scene tunables live in [`runtime/web/js/config.js`](runtime/web/js/config.js):

```js
ZOOM_INTERVAL_S: 15,   // seconds between camera-zoom events
ZOOM_HOLD_S: 3,        // how long the camera lingers on a polaroid
ZOOM_TRANSITION_S: 2.5,// dive + return duration
LISSAJOUS_PERIOD_S: 90,// full figure-8 lap of the table
SCATTER_COUNT_TARGET: 60,
FPS_CAP: 30,
COLOR_BACKGROUND: 0x3d0a14, // dark maroon behind the tabletop
TABLETOP_IMAGE: 'floral',
```

## Privacy

Family photos go to the OpenRouter vision filter at *build time only*. The shipped `.saver` bundle is fully offline — no network access, no telemetry, no analytics. Photos live inside the bundle on the recipient's Mac and nowhere else.

This repo deliberately commits an **empty** `photos-data.js`. Personal photos are never pushed. The `.gitignore` excludes the pool directory, the SQLite state, and the build output.

## Credits

- [liquidx/webviewscreensaver](https://github.com/liquidx/webviewscreensaver) — Cocoa `.saver` host with the Sonoma WKWebView fix (Apache 2.0).
- [three.js](https://threejs.org/) — the scene.
- [GSAP](https://gsap.com/) — the camera timelines (free since April 2025, thank you Webflow).
- [Caveat](https://fonts.google.com/specimen/Caveat) by Pablo Impallari — the handwritten caption font.
- [Pillow](https://pillow.readthedocs.io/) + [pillow-heif](https://github.com/bigcat88/pillow-heif) — image pipeline.
- Built with [Claude Code](https://claude.com/claude-code) on the side.

## License

MIT — see [LICENSE](LICENSE). The bundled `runtime/PolaroidsSaver/` retains its Apache 2.0 license from upstream.

---

<div align="center">
<sub>Made with love. Happy belated Mother's Day. 💌</sub>
</div>
