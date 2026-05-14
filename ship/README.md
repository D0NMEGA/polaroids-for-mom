# Polaroids for Mom 💌

A handmade screensaver — photos scattered on a table that you can sit and watch.

---

## To install: just double-click

**Double-click `Install Polaroids for Mom.app`** (in this folder).

It will:
1. Copy the screensaver to where macOS expects it
2. Ask you which **tabletop pattern** you'd like (5 choices)
3. Open System Settings to the Screen Saver page

Then in System Settings:
- Click **Show All** (third-party savers live under "Other")
- Pick **Polaroids for Mom**

Done. The screensaver runs offline forever.

### If macOS says "Apple cannot verify..."

On macOS Sequoia, double-clicking an app you got via AirDrop or email shows a one-time security warning. To fix it:

1. Click **Done** in the warning.
2. Open **System Settings → Privacy & Security**.
3. Scroll to the bottom — you'll see a line: *"Install Polaroids for Mom" was blocked from use because it is not from an identified developer.*
4. Click **Open Anyway**, then confirm with your password.
5. macOS will run the installer normally. You only have to do this once.

---

## To change the tabletop later

Double-click the installer **again** — it asks you to pick a pattern every time. Pick a different one, click **Set**, you're done. The screensaver picks up the change next time it activates.

(Power users: there's also `change-tabletop.sh` in this folder for a CLI shortcut.)

---

## To add or remove photos

The screensaver ships with photos pre-loaded. To swap them out:

1. Open Finder → **Pictures** → look for a folder called **"Polaroids for Mom"**.
   (If it isn't there, double-click `refresh-photos.sh` — it'll create it for you.)
2. Drop new photos in. Remove ones you don't want.
3. Double-click `refresh-photos.sh`. It loads your photos into the screensaver.

Supported types: `.jpg`, `.jpeg`, `.png`. Photos around 1-3 MB each work best.

---

## If something's not right

Text Donovan. He built this and he'll fix it. 💜

---

## What's in this folder

| File | What it does |
|---|---|
| `Install Polaroids for Mom.app` | **The main installer.** Double-click to install + pick tabletop. |
| `PolaroidsForMom.saver` | The screensaver bundle the installer copies for you. |
| `install.sh` | Backup installer for Terminal (same as the .app, no UI). |
| `change-tabletop.sh` | CLI shortcut for changing tabletop. |
| `refresh-photos.sh` | Replaces the photos. |
| `README.md` | This file. |

---

Made with love. Happy Mother's Day. ✨
