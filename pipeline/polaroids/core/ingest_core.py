"""Core ingest logic: walk + hash + insert + metadata recovery.

Decoupled from Typer so it can be exercised directly from tests and reused
by future commands (e.g., a future `polaroids reingest --source instagram`).

Stages (per row):
  1. Walker yields path; SHA-256 hash computed (12-char prefix)
  2. SELECT 1 to check existence — skip work if hash already in DB
  3. If HEIC: convert to JPEG companion in POOL_DIR; record canonical_jpg_path
  4. creation_timestamp resolution (date trust hierarchy):
       a. Facebook source: try sidecar lookup by basename
       b. Fallback: piexif EXIF DateTimeOriginal
       c. Else: NULL (left for Phase 3 AI inference)
  5. INSERT (8 columns) with parameterized `?` placeholders

INGEST-01: one row per unique photo, keyed by SHA-256 prefix.
INGEST-02: FB sidecar restores creation_timestamp when present; gracefully
           absent for the current real folder state (flat facebook/).
           EXIF fallback fires for Drive/ JPEGs that retained EXIF.
INGEST-03: HEIC decoded to JPEG sibling in POOL_DIR/heic-companions/;
           original .heic retained.
INGEST-04: idempotent — second run hits SELECT 1, skips both HEIC
           conversion and INSERT.

Security:
  T-02-01 (SQL injection): all values bound via `?` placeholders; never
          f-stringed into the SQL string. Test
          test_ingest_uses_parameterized_query_against_sql_injection verifies.
  T-02-05 (DoS via unreadable file): catches PermissionError + OSError,
          logs at WARNING, increments `failed`. Test
          test_ingest_handles_unreadable_file_without_raising verifies.
  T-02-06 (Tampering via unknown source): _VALID_SOURCES is checked BEFORE
          touching the DB. Test test_ingest_unknown_source_raises_value_error
          verifies. CHECK constraint on the photos.source column is
          defense-in-depth.
  T-02-11 (Tampering): INSERT now has 8 columns; all still bound via `?`.
  T-02-12 (DoS via huge HEIC): _resolve_canonical_jpg catches broad
          Exception, logs, and inserts the row without a companion rather
          than crashing the batch.
"""
from __future__ import annotations

import logging
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Mapping, Optional

from polaroids.core.db import get_connection, init_db
from polaroids.core.exif import read_creation_timestamp
from polaroids.core.facebook_sidecar import load_sidecar_index
from polaroids.core.hashing import sha256_prefix
from polaroids.core.heic import convert_heic_to_jpeg, is_heic
from polaroids.core.walker import iter_image_files

_VALID_SOURCES: frozenset[str] = frozenset({"drive", "facebook", "applephotos", "instagram"})
_logger = logging.getLogger(__name__)


@dataclass(frozen=True)
class IngestResult:
    """Summary of an ingest_directory invocation.

    Invariant: inserted + skipped + failed == total_walked.
    """

    inserted: int
    skipped: int
    failed: int
    total_walked: int


def _resolve_timestamp(
    path: Path, source: str, sidecar_index: Mapping[str, int]
) -> Optional[int]:
    """Apply the date trust hierarchy. Sidecar (FB only) -> EXIF -> None.

    Args:
        path: Path of the photo being ingested.
        source: Source name ('drive', 'facebook', 'instagram').
        sidecar_index: {basename -> epoch} from load_sidecar_index. Empty
            dict for non-facebook sources.

    Returns:
        Unix epoch seconds (int) or None.
    """
    if source == "facebook":
        ts = sidecar_index.get(path.name)
        if ts is not None:
            return ts
    return read_creation_timestamp(path)


def _resolve_canonical_jpg(path: Path, hash_prefix: str) -> Optional[str]:
    """For HEIC inputs, write a JPEG companion and return its absolute path.

    Returns None for non-HEIC inputs (Phase 5 compress will fill in for JPEGs).
    Returns None on conversion failure (logged), not raises — preserves the
    batch-continue invariant from T-02-05/T-02-12.

    Args:
        path: Path to the candidate file.
        hash_prefix: SHA-256[:12] of `path`'s bytes, used as companion basename.
    """
    if not is_heic(path):
        return None
    try:
        companion = convert_heic_to_jpeg(path, hash_prefix)
        return str(companion)
    except Exception as exc:  # broad: any decode/IO failure inserts row anyway
        _logger.warning(
            "heic: conversion failed for %s (%s); row inserted without companion",
            path, exc,
        )
        return None


def ingest_directory(
    root: Path,
    source: str,
    db_path: Optional[Path] = None,
) -> IngestResult:
    """Walk `root`, hash each image, insert with metadata recovery.

    Args:
        root: Directory to walk recursively. A missing directory is a no-op
              (returns zeros) so the pipeline can run with only one of the
              source folders present (INGEST-02).
        source: One of 'drive', 'facebook', 'instagram'. Validated against
                the same set used by the photos.source CHECK constraint.
        db_path: Optional override for STATE_SQLITE; used by tests.

    Returns:
        IngestResult(inserted, skipped, failed, total_walked).

    Raises:
        ValueError: if `source` is not in {'drive', 'facebook', 'instagram'}.
                    Raised BEFORE any DB connection is opened.

    Notes:
        - Idempotency: SELECT 1 against the hash; if present, skip without
          doing HEIC conversion work. The Wave-2 version used INSERT OR
          IGNORE + cur.rowcount; Wave 3 switches to an explicit existence
          check so we don't waste HEIC decode cycles on already-ingested rows.
        - The semantic outcome is identical to Wave 2: re-running on the
          same source dir yields inserted=0 and skipped == total_walked.
    """
    if source not in _VALID_SOURCES:
        raise ValueError(
            f"source must be one of {sorted(_VALID_SOURCES)!r}, got {source!r}"
        )

    # Ensure schema exists (idempotent; safe to call every run).
    init_db(db_path)

    # Sidecar index is empty for non-facebook sources (skip unnecessary glob).
    sidecar_index: Mapping[str, int] = (
        load_sidecar_index(root) if source == "facebook" else {}
    )

    inserted = 0
    skipped = 0
    failed = 0
    total_walked = 0
    now = int(time.time())

    with get_connection(db_path) as conn:
        for path in iter_image_files(root):
            total_walked += 1
            try:
                h = sha256_prefix(path)
                size = path.stat().st_size
                ext = path.suffix.lstrip(".").lower()

                # Idempotency: if hash exists, skip companion work entirely.
                # T-02-01: parameterized SELECT.
                existing = conn.execute(
                    "SELECT 1 FROM photos WHERE hash = ?", (h,)
                ).fetchone()
                if existing is not None:
                    skipped += 1
                    continue

                canonical = _resolve_canonical_jpg(path, h)
                timestamp = _resolve_timestamp(path, source, sidecar_index)

                # T-02-01: parameterized INSERT — 8 columns, all `?` bound.
                conn.execute(
                    "INSERT INTO photos "
                    "(hash, source_path, source, original_ext, bytes, ingested_at, "
                    " canonical_jpg_path, creation_timestamp) "
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                    (h, str(path), source, ext, size, now, canonical, timestamp),
                )
                inserted += 1
            except (PermissionError, OSError) as exc:
                # T-02-05: don't let a single unreadable file abort the batch.
                _logger.warning("ingest: failed to read %s: %s", path, exc)
                failed += 1

    return IngestResult(
        inserted=inserted,
        skipped=skipped,
        failed=failed,
        total_walked=total_walked,
    )
