#!/bin/bash
# scripts/install.sh
# Phase 0 — Install the PolaroidsSaver.saver to ~/Library/Screen Savers/
# on a Mac that may never have seen this project before.
#
# Strips com.apple.quarantine BEFORE moving so Gatekeeper never sees the
# bundle as a "downloaded unsigned app" — no Privacy & Security prompt,
# no sudo, no admin password. Per macOS Sequoia 15.1+ behavior, this is
# the ONLY path that installs invisibly for a non-technical recipient.
#
# Usage: from the directory containing PolaroidsSaver.saver and this script:
#   bash install.sh

set -euo pipefail

# Resolve our own location so the script works whether invoked as
# `./install.sh`, `bash install.sh`, or from a different cwd.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

SAVER_NAME="PolaroidsSaver.saver"
SAVER_SRC="$SCRIPT_DIR/$SAVER_NAME"
DEST_DIR="$HOME/Library/Screen Savers"

# --- Sanity check: the .saver must be next to this script ---
if [ ! -d "$SAVER_SRC" ]; then
  echo "ERROR: $SAVER_NAME not found next to install.sh." >&2
  echo "       Looked in: $SCRIPT_DIR" >&2
  echo "       Make sure the .saver bundle is in the same directory as this script." >&2
  exit 1
fi

# --- Strip quarantine BEFORE the file enters the install dir ---
# If we did this AFTER, Gatekeeper would have already created a Privacy
# & Security entry that requires manual approval. Pre-move stripping is
# invisible to the user. xattr -dr does not require sudo if the user
# owns the file.
echo "[install] Stripping quarantine attribute..."
xattr -dr com.apple.quarantine "$SAVER_SRC" 2>/dev/null || true

# --- Remove any prior install so cp -R is a clean replacement, not a merge ---
echo "[install] Removing any prior install..."
rm -rf "$DEST_DIR/$SAVER_NAME"

# --- Ensure the user-level Screen Savers dir exists ---
mkdir -p "$DEST_DIR"

# --- Copy the bundle in ---
echo "[install] Installing to $DEST_DIR/$SAVER_NAME..."
cp -R "$SAVER_SRC" "$DEST_DIR/$SAVER_NAME"

# --- Strip ALL xattrs on the destination as belt-and-suspenders ---
# Quarantine is the critical one for Gatekeeper, but FinderInfo and
# fileprovider xattrs (common on iCloud-synced source dirs) trip
# `codesign --verify --strict`. Clearing everything is safe — bundles
# don't depend on user-level Finder metadata.
xattr -cr "$DEST_DIR/$SAVER_NAME" 2>/dev/null || true

# --- Force System Settings to re-scan the screensaver list ---
# Order matters: kill the running screensaver host first (so it releases
# the old plugin), then the wallpaper agent (which builds the picker),
# then the engine.
echo "[install] Refreshing screensaver agents..."
killall legacyScreenSaver 2>/dev/null || true
killall WallpaperAgent 2>/dev/null || true
killall ScreenSaverEngine 2>/dev/null || true

echo ""
echo "Installed: $DEST_DIR/$SAVER_NAME"
echo ""
echo "  Next steps:"
echo "    1. Open System Settings -> Lock Screen -> Screen Saver"
echo "    2. Click 'Show All' (Sequoia demotes third-party savers under 'Other')"
echo "    3. Pick 'PolaroidsSaver'"
echo "    4. Set 'Start Screen Saver when inactive' to 1 minute"
echo "    5. Let the Mac sit idle - do NOT click the 'Preview' button (Phase 0 requires real activation)"
echo ""

# --- Optional: open System Settings directly to the Screen Saver pane ---
# Works on Sequoia 15; breaks on Tahoe 26 where the pane moved.
open "x-apple.systempreferences:com.apple.ScreenSaver-Settings.extension" 2>/dev/null || true
