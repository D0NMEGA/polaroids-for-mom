#!/bin/bash
# scripts/verify-gate-02.sh
# Phase 0 GATE-02 verifier — proves the legacyScreenSaver host process
# exits within 2 seconds of dismissing the screensaver.
#
# Usage: run this in a SEPARATE terminal while the screensaver is about
# to activate. The script:
#   1. Waits for the legacyScreenSaver process to appear
#   2. Reports its PID
#   3. Prompts you to dismiss the screensaver
#   4. Polls for up to 5 seconds; PASS if PID gone within 2

set -u

echo "[verify-gate-02] Waiting for legacyScreenSaver process to appear..."
echo "[verify-gate-02] (Let the Mac idle into the screensaver - do NOT click Preview.)"

# Wait up to 5 minutes for the screensaver to activate
WAIT_DEADLINE=$(($(date +%s) + 300))
while [ "$(date +%s)" -lt "$WAIT_DEADLINE" ]; do
  if pgrep -fl legacyScreenSaver >/dev/null 2>&1; then
    break
  fi
  sleep 0.5
done

if ! pgrep -fl legacyScreenSaver >/dev/null 2>&1; then
  echo "[verify-gate-02] FAIL: legacyScreenSaver never started (waited 5 min)." >&2
  echo "[verify-gate-02] Check: is the screensaver enabled in System Settings?" >&2
  echo "[verify-gate-02] Check: is 'Start Screen Saver when inactive' set to a short idle?" >&2
  exit 2
fi

# Process name on Apple Silicon is legacyScreenSaver-arm64; on Intel
# legacyScreenSaver-x86_64. -f matches full command line, so substring match works.
ACTIVE_PID="$(pgrep -fl legacyScreenSaver | awk '{print $1}' | head -1)"
echo "[verify-gate-02] legacyScreenSaver started, PID=$ACTIVE_PID"
echo ""
echo "============================================================"
echo "  WHILE THE SCREENSAVER IS RUNNING:"
echo "    1. Watch the rAF counter for at least 60 seconds"
echo "    2. Then dismiss (move mouse / hit a key)"
echo "    3. IMMEDIATELY after dismissal, press ENTER in THIS terminal"
echo "============================================================"
echo ""
echo "[verify-gate-02] Waiting for you to press ENTER after dismissing..."

# Wait for user to signal "I just dismissed". This decouples our 2-second
# budget from human reaction time — we only measure the PID-exit window
# starting from when dismiss actually happened.
read -r _

DISMISS_TIME=$(date +%s)
DEADLINE=$((DISMISS_TIME + 5))
EXIT_AT=""
while [ "$(date +%s)" -lt "$DEADLINE" ]; do
  if ! kill -0 "$ACTIVE_PID" 2>/dev/null; then
    EXIT_AT="$(date +%s)"
    break
  fi
  sleep 0.2
done

if [ -z "$EXIT_AT" ]; then
  echo "[verify-gate-02] FAIL: PID $ACTIVE_PID still running 5 seconds after you pressed ENTER." >&2
  ps -p "$ACTIVE_PID" -o pid,etime,%cpu,%mem,comm 2>&1 || true
  exit 1
fi

ELAPSED_SINCE_DISMISS=$((EXIT_AT - DISMISS_TIME))

if [ "$ELAPSED_SINCE_DISMISS" -le 2 ]; then
  echo "[verify-gate-02] PASS: PID $ACTIVE_PID exited ${ELAPSED_SINCE_DISMISS}s after dismiss (budget: 2s)."
  exit 0
else
  echo "[verify-gate-02] FAIL: PID exited ${ELAPSED_SINCE_DISMISS}s after dismiss (budget: 2s)." >&2
  exit 1
fi
