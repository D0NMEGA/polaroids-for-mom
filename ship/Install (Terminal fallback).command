#!/bin/bash
# install.sh — Install Polaroids for Mom screensaver on macOS Sequoia 15+
#
# Run this in Terminal: bash install.sh
#
# What it does (no admin password needed):
#   1. Strips the "downloaded from internet" quarantine flag from the bundle
#   2. Copies the .saver into your Screen Savers folder
#   3. Restarts the screensaver agent so it picks up the new entry
#   4. Opens System Settings -> Screen Saver
#
# After install, in System Settings:
#   - Lock Screen -> Screen Saver
#   - Click "Show All" (third-party savers are under "Other")
#   - Pick "Polaroids for Mom"

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SAVER_NAME="PolaroidsForMom.saver"
SAVER_SRC="$SCRIPT_DIR/$SAVER_NAME"
DEST_DIR="$HOME/Library/Screen Savers"

if [ ! -d "$SAVER_SRC" ]; then
  echo "ERROR: $SAVER_NAME not found in $SCRIPT_DIR" >&2
  echo "       Make sure $SAVER_NAME is in the same folder as install.sh." >&2
  exit 1
fi

echo "[install] Stripping quarantine flag from the bundle..."
xattr -dr com.apple.quarantine "$SAVER_SRC" 2>/dev/null || true

echo "[install] Removing any old version of the screensaver..."
rm -rf "$DEST_DIR/$SAVER_NAME"
rm -rf "$DEST_DIR/PolaroidsSaver.saver"   # in case a dev build was there

mkdir -p "$DEST_DIR"

echo "[install] Copying screensaver to $DEST_DIR..."
cp -R "$SAVER_SRC" "$DEST_DIR/$SAVER_NAME"

# Belt-and-suspenders: scrub any xattrs the copy picked up
xattr -cr "$DEST_DIR/$SAVER_NAME" 2>/dev/null || true

echo "[install] Refreshing screensaver list..."
killall legacyScreenSaver 2>/dev/null || true
killall WallpaperAgent 2>/dev/null || true
killall ScreenSaverEngine 2>/dev/null || true

echo ""
echo "Installed: $DEST_DIR/$SAVER_NAME"
echo ""
echo "Next: in System Settings, pick Lock Screen -> Screen Saver -> Show All"
echo "      -> 'Polaroids for Mom'."
echo ""

# Open the right pane (Sequoia 15)
open "x-apple.systempreferences:com.apple.ScreenSaver-Settings.extension" 2>/dev/null || true
