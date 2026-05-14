"""HEIC → JPEG companion conversion for iPhone/iPad source photos.

Registers pillow-heif's opener at import time so Pillow's Image.open()
transparently handles HEIC/HEIF files everywhere in the pipeline.

INGEST-03: HEIC files in any source directory get a sibling JPEG written
to POOL_DIR/heic-companions/{hash}.jpg. The original .heic is read-only
here (never modified, never deleted) — Phase 5 bundle will choose
canonical_jpg_path when shipping, so we preserve both representations.

Threat T-02-08 (DoS via libheif memory bug): pillow-heif==1.3.0 is the
pinned version in CLAUDE.md / pyproject.toml; it bundles libheif with
current CVE fixes. Pillow's `with Image.open(...)` ensures the decoder
closes promptly. The HEIC source set is Donovan's local files only.
"""
from __future__ import annotations

import logging
from pathlib import Path

from PIL import Image
from pillow_heif import register_heif_opener

from polaroids.config import HEIC_EXTS, POOL_DIR

_logger = logging.getLogger(__name__)

# Register at module import time. The pillow-heif docs and CLAUDE.md both
# call for this exact pattern. Idempotent — calling register_heif_opener()
# multiple times is harmless (pillow-heif checks if it's already installed).
register_heif_opener()

# Subdirectory name (relative to POOL_DIR) where companion JPEGs live.
_COMPANION_SUBDIR_NAME = "heic-companions"

# Phase 5 will recompress to q=85 for bundle delivery; preserve detail here.
_JPEG_QUALITY = 90


def is_heic(path: Path) -> bool:
    """True iff the file's extension (case-insensitive) is .heic or .heif."""
    return path.suffix.lower() in HEIC_EXTS


def convert_heic_to_jpeg(heic_path: Path, hash_prefix: str) -> Path:
    """Decode a HEIC file via Pillow and write a JPEG companion.

    Companion lives at: POOL_DIR / 'heic-companions' / f'{hash_prefix}.jpg'

    Args:
        heic_path: Source HEIC file to decode. Read-only — never modified.
        hash_prefix: 12-char SHA-256 prefix from hashing.sha256_prefix.
            Used as the companion's basename so the JPEG is content-addressed
            in lockstep with the photos.hash primary key.

    Returns:
        Absolute Path to the written JPEG companion.

    Raises:
        PIL.UnidentifiedImageError: if pillow-heif cannot decode the file.
        OSError: if the output directory cannot be created (very rare;
            e.g., disk full or read-only filesystem).

    The original HEIC file is read-only here — never modified, never deleted.
    Idempotent: calling twice with the same hash_prefix overwrites the JPG.
    """
    companion_dir = POOL_DIR / _COMPANION_SUBDIR_NAME
    companion_dir.mkdir(parents=True, exist_ok=True)
    out_path = companion_dir / f"{hash_prefix}.jpg"

    with Image.open(heic_path) as img:
        # Convert to RGB to drop alpha (JPEG doesn't support alpha)
        rgb = img.convert("RGB")
        rgb.save(out_path, format="JPEG", quality=_JPEG_QUALITY, optimize=True)

    _logger.info("heic: wrote companion %s -> %s", heic_path.name, out_path)
    return out_path
