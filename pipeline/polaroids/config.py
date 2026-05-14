"""Path and constant configuration for the polaroids build pipeline.

All paths are derived from this file's location so the pipeline is
portable across machines (no hardcoded absolute paths).
"""
from __future__ import annotations

from pathlib import Path

# __file__ is .../mothersday/pipeline/polaroids/config.py
# parents[0] = .../polaroids/
# parents[1] = .../pipeline/
# parents[2] = .../mothersday/  (repo root)
PIPELINE_DIR: Path = Path(__file__).resolve().parents[1]
REPO_ROOT: Path = Path(__file__).resolve().parents[2]

# Source directories (read-only inputs)
DRIVE_DIR: Path = REPO_ROOT / "Drive"
FACEBOOK_DIR: Path = REPO_ROOT / "facebook"
APPLEPHOTOS_DIR: Path = REPO_ROOT / "applephotos"

# Output directories / files (written by the pipeline)
STATE_SQLITE: Path = PIPELINE_DIR / "state.sqlite"
POOL_DIR: Path = PIPELINE_DIR / "pool"

# Image format constants
JPEG_EXTS: frozenset[str] = frozenset({".jpg", ".jpeg"})
HEIC_EXTS: frozenset[str] = frozenset({".heic", ".heif"})
PNG_EXTS: frozenset[str] = frozenset({".png"})
SUPPORTED_EXTS: frozenset[str] = JPEG_EXTS | HEIC_EXTS | PNG_EXTS

# SHA-256 truncation length (per INGEST-01: "12-char hash prefix")
HASH_PREFIX_LEN: int = 12
