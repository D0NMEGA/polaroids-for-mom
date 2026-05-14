#!/bin/bash
# scripts/build.sh
# Phase 0 — Build the WKWebView smoke-test .saver from the modified liquidx fork.
# Produces dist/PolaroidsSaver.saver (adhoc-signed, ready for install).
#
# Idempotent: safe to rerun. Removes prior build/ and dist/PolaroidsSaver.saver
# before rebuilding.

set -euo pipefail

# Resolve paths relative to the repo root, not the script's CWD
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

PRJ_DIR="$REPO_ROOT/runtime/PolaroidsSaver"
XCODE_PROJ_DIR="$PRJ_DIR/WebViewScreenSaver"
BUILD_DIR="$PRJ_DIR/build"
DIST_DIR="$REPO_ROOT/dist"
OUTPUT_NAME="PolaroidsSaver.saver"

# --- Resolve Xcode toolchain ---
# If xcode-select still points at CommandLineTools (e.g. on a fresh Mac that
# installed Xcode after CLT), fall back to /Applications/Xcode.app via
# DEVELOPER_DIR. xcodebuild respects this env var without requiring sudo.
if ! xcodebuild -version >/dev/null 2>&1; then
  if [ -d /Applications/Xcode.app/Contents/Developer ]; then
    export DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer
    echo "[build] xcode-select pointed at CommandLineTools; using DEVELOPER_DIR=$DEVELOPER_DIR"
  else
    echo "[build] FATAL: xcodebuild not found. Did Plan 01 (Xcode install) complete?"
    echo "[build] Run: sudo xcode-select -s /Applications/Xcode.app/Contents/Developer"
    exit 1
  fi
fi

# --- Sanity checks ---
echo "[build] Checking Xcode toolchain..."
XCODE_VERSION="$(xcodebuild -version | head -1)"
echo "[build] $XCODE_VERSION"

echo "[build] Verifying source tree..."
if [ ! -d "$XCODE_PROJ_DIR/WebViewScreenSaver.xcodeproj" ]; then
  echo "[build] FATAL: $XCODE_PROJ_DIR/WebViewScreenSaver.xcodeproj not found."
  echo "[build] Plan 02 (clone + modify) must have run first."
  exit 1
fi
if [ ! -f "$XCODE_PROJ_DIR/Resources/web/index.html" ]; then
  echo "[build] FATAL: Resources/web/index.html missing — Plan 02 incomplete."
  exit 1
fi
if ! grep -q 'exit(0);' "$XCODE_PROJ_DIR/WebViewScreenSaverView.m"; then
  echo "[build] FATAL: exit(0) modification missing in WebViewScreenSaverView.m."
  exit 1
fi
if ! grep -q 'URLForResource:@"index"' "$XCODE_PROJ_DIR/WebViewScreenSaverView.m"; then
  echo "[build] FATAL: bundle-URL load missing in WebViewScreenSaverView.m."
  exit 1
fi

# --- Clean prior build and dist artifact ---
echo "[build] Cleaning prior build artifacts..."
rm -rf "$BUILD_DIR"
rm -rf "$DIST_DIR/$OUTPUT_NAME"
mkdir -p "$DIST_DIR"

# --- Build via xcodebuild archive ---
echo "[build] Running xcodebuild archive (Release configuration)..."
cd "$XCODE_PROJ_DIR"

# Pattern verbatim from liquidx's archive.sh, adapted:
#   - We force CODE_SIGN_IDENTITY="-" on the command line as belt-and-suspenders
#     in case Plan 02's .pbxproj edit was incomplete
#   - CODE_SIGNING_REQUIRED=YES so the build fails if signing fails (catches misconfig)
xcodebuild \
  -project WebViewScreenSaver.xcodeproj \
  -scheme WebViewScreenSaver \
  -configuration Release \
  clean archive \
  -archivePath "$BUILD_DIR/build.xcarchive" \
  CODE_SIGN_IDENTITY="-" \
  CODE_SIGN_STYLE=Manual \
  CODE_SIGNING_REQUIRED=YES \
  DEVELOPMENT_TEAM="" \
  PROVISIONING_PROFILE_SPECIFIER="" \
  PRODUCT_NAME=PolaroidsSaver \
  PRODUCT_BUNDLE_IDENTIFIER=com.donovan.polaroidssaver

# --- Locate the .saver in the archive ---
cd "$REPO_ROOT"
echo "[build] Locating built .saver in archive..."
BUILT_SAVER="$(find "$BUILD_DIR/build.xcarchive" -iname '*.saver' -type d | head -1)"
if [ -z "${BUILT_SAVER:-}" ] || [ ! -d "$BUILT_SAVER" ]; then
  echo "[build] FATAL: no .saver found under $BUILD_DIR/build.xcarchive"
  echo "[build] Contents of archive:"
  find "$BUILD_DIR/build.xcarchive" -maxdepth 4 -type d | head -30
  exit 1
fi
echo "[build] Found: $BUILT_SAVER"

# --- Copy to dist with our gift-bundle name and adhoc-resign ---
echo "[build] Staging at $DIST_DIR/$OUTPUT_NAME..."
cp -R "$BUILT_SAVER" "$DIST_DIR/$OUTPUT_NAME"

# Strip Finder/iCloud xattrs that cause --strict codesign verification to fail
# ("resource fork, Finder information, or similar detritus not allowed").
# Common on iCloud-synced repos; harmless to run when no xattrs are present.
echo "[build] Stripping inherited xattrs..."
xattr -cr "$DIST_DIR/$OUTPUT_NAME"

echo "[build] Adhoc-signing..."
codesign --force --deep --sign - "$DIST_DIR/$OUTPUT_NAME"

# --- Verify ---
echo "[build] Verifying signature..."
codesign --verify --deep --strict --verbose=2 "$DIST_DIR/$OUTPUT_NAME"
codesign -dvv "$DIST_DIR/$OUTPUT_NAME" 2>&1 | grep -F 'Signature=adhoc' || {
  echo "[build] FATAL: signature is not adhoc"
  codesign -dvv "$DIST_DIR/$OUTPUT_NAME" 2>&1 | head -20
  exit 1
}

echo "[build] Verifying bundle contents..."
if [ ! -f "$DIST_DIR/$OUTPUT_NAME/Contents/Resources/web/index.html" ]; then
  echo "[build] FATAL: Resources/web/index.html missing in built bundle."
  echo "[build] Bundle contents:"
  find "$DIST_DIR/$OUTPUT_NAME" -maxdepth 4 -type f | head -30
  exit 1
fi

echo ""
echo "[build] Built: $DIST_DIR/$OUTPUT_NAME"
echo "[build]   Bundle ID: $(defaults read "$DIST_DIR/$OUTPUT_NAME/Contents/Info" CFBundleIdentifier 2>/dev/null || echo '(could not read)')"
echo "[build]   Size: $(du -sh "$DIST_DIR/$OUTPUT_NAME" | cut -f1)"
echo ""
echo "[build] Next: scripts/install.sh (Plan 04) installs this to ~/Library/Screen Savers/"
