"""Parse Facebook export sidecar JSON to recover stripped creation_timestamp.

Facebook exports under your_facebook_activity/posts/*.json contain timestamps
that the JPEG export loses (EXIF stripped on upload). This module walks all
such JSON files and yields a {basename -> creation_timestamp} mapping for
ingest_core to consult.

INGEST-02: when the subdir is absent (the current real state — facebook/ is
flat with no your_facebook_activity/), this module returns {} and logs an
INFO notice. The ingest proceeds with creation_timestamp = NULL for those
rows; EXIF fallback (when present) still fires.

Threat T-02-07 (Tampering/DoS via malformed JSON): we use stdlib json.load
(no eval). Per-file JSONDecodeError + OSError are caught, logged, and
skipped — one bad file does not crash the whole load. isinstance() checks
at every nested level prevent type-confusion attacks like
`media.uri = 12345` (int) or `attachments = "not a list"` (string).
"""
from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import Dict, Mapping

_logger = logging.getLogger(__name__)

# Path components for the Facebook export layout.
_SIDECAR_SUBDIR = Path("your_facebook_activity") / "posts"


def load_sidecar_index(facebook_root: Path) -> Mapping[str, int]:
    """Parse every JSON under facebook_root/your_facebook_activity/posts/.

    Returns a dict mapping photo basename -> creation_timestamp (Unix epoch int).

    Returns {} (empty dict) when:
      - facebook_root doesn't exist
      - your_facebook_activity/ doesn't exist (the current real state)
      - posts/ doesn't exist
      - no JSON files in posts/
      - no media entries with creation_timestamp in any JSON file

    Per-file tolerance: malformed JSON or unreadable files are logged at
    WARNING and skipped; the rest of the index still loads.

    Args:
        facebook_root: Path to the facebook/ source directory.

    Returns:
        Immutable-by-convention Mapping[str, int]. (Caller treats as read-only;
        we return a built-up dict but type-hint as Mapping to discourage mutation.)
    """
    index: Dict[str, int] = {}

    posts_dir = facebook_root / _SIDECAR_SUBDIR
    if not posts_dir.exists():
        _logger.info(
            "facebook sidecar: %s not found; proceeding without creation_timestamp recovery",
            posts_dir,
        )
        return index

    for json_file in sorted(posts_dir.glob("*.json")):
        try:
            with open(json_file, "r", encoding="utf-8") as f:
                data = json.load(f)
        except (json.JSONDecodeError, OSError) as exc:
            # T-02-07: bad file skipped, not fatal
            _logger.warning("facebook sidecar: skipping %s (%s)", json_file, exc)
            continue

        if not isinstance(data, list):
            continue

        for post in data:
            if not isinstance(post, dict):
                continue
            attachments = post.get("attachments")
            if not isinstance(attachments, list):
                continue
            for att in attachments:
                if not isinstance(att, dict):
                    continue
                items = att.get("data")
                if not isinstance(items, list):
                    continue
                for item in items:
                    if not isinstance(item, dict):
                        continue
                    media = item.get("media")
                    if not isinstance(media, dict):
                        continue
                    uri = media.get("uri")
                    ts = media.get("creation_timestamp")
                    if isinstance(uri, str) and isinstance(ts, int):
                        basename = Path(uri).name
                        index[basename] = ts

    _logger.info(
        "facebook sidecar: loaded %d photo timestamps from %s",
        len(index),
        posts_dir,
    )
    return index
