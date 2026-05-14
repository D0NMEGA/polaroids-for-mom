#!/bin/bash
# change-tabletop.sh — swap the tabletop pattern in Polaroids for Mom.
#
# Run in Terminal: bash change-tabletop.sh <name>
# Names: arch | floral | straps | wallpaper | wood
#
# Default is floral. Wood is the procedural warm-walnut grain.

set -e

CHOICE="${1:-}"
case "$CHOICE" in
  arch|floral|straps|wallpaper)
    NEW_VAL="'$CHOICE'"
    ;;
  wood)
    NEW_VAL="null"
    ;;
  "")
    echo "Usage: bash change-tabletop.sh <arch|floral|straps|wallpaper|wood>"
    exit 1
    ;;
  *)
    echo "ERROR: '$CHOICE' is not a valid tabletop."
    echo "       Choices: arch, floral, straps, wallpaper, wood"
    exit 1
    ;;
esac

SAVER="$HOME/Library/Screen Savers/PolaroidsForMom.saver"
CONFIG_JS="$SAVER/Contents/Resources/web/js/config-overrides.js"

if [ ! -f "$CONFIG_JS" ]; then
  echo "ERROR: Polaroids for Mom isn't installed yet."
  echo "       Run install.sh first."
  exit 1
fi

# Find the line and replace the value. The TABLETOP_IMAGE line looks like:
#   TABLETOP_IMAGE: 'floral',
# or
#   TABLETOP_IMAGE: null,
# We rewrite it with sed, then re-sign the bundle.

# macOS sed needs the empty backup extension after -i
sed -i '' -E "s|window.POLAROIDS_TABLETOP = [^;]+;|window.POLAROIDS_TABLETOP = $NEW_VAL;|" "$CONFIG_JS"

# Re-sign adhoc since we modified contents
codesign --force --deep --sign - "$SAVER" >/dev/null 2>&1 || true

# Restart screensaver agents so the change takes effect immediately
killall legacyScreenSaver 2>/dev/null || true
killall ScreenSaverEngine 2>/dev/null || true

echo "Tabletop set to: $CHOICE"
echo "Done. Activate the screensaver to see the new look."
