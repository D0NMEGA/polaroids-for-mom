"""Tests for polaroids.core.db -- schema migration + connection helpers."""
from __future__ import annotations

from pathlib import Path

from polaroids.core.db import count_photos, get_connection, init_db


def test_init_db_creates_photos_table(tmp_path: Path) -> None:
    """init_db creates the `photos` table with the expected columns."""
    db = tmp_path / "state.sqlite"
    init_db(db)

    with get_connection(db) as conn:
        cols = {row["name"] for row in conn.execute("PRAGMA table_info(photos)")}

    # Every documented column must exist
    expected = {
        "hash", "source_path", "source", "original_ext",
        "canonical_jpg_path", "creation_timestamp", "bytes", "ingested_at",
        "filter_confidence", "filter_bucket", "caption_text",
        "compressed_path", "bundle_status",
    }
    assert expected.issubset(cols), f"Missing columns: {expected - cols}"


def test_init_db_is_idempotent(tmp_path: Path) -> None:
    """Re-running init_db on the same path does not raise or duplicate."""
    db = tmp_path / "state.sqlite"
    init_db(db)
    init_db(db)  # second call: must be no-op, not OperationalError

    with get_connection(db) as conn:
        n = conn.execute(
            "SELECT COUNT(*) AS n FROM sqlite_master WHERE type='table' AND name='photos'"
        ).fetchone()["n"]
    assert n == 1


def test_source_check_constraint_rejects_unknown(tmp_path: Path) -> None:
    """Inserting an unknown `source` value fails the CHECK constraint."""
    import sqlite3

    db = tmp_path / "state.sqlite"
    init_db(db)

    with get_connection(db) as conn:
        try:
            conn.execute(
                "INSERT INTO photos (hash, source_path, source, original_ext, bytes, ingested_at) "
                "VALUES (?, ?, ?, ?, ?, ?)",
                ("abc123abc123", "/tmp/x.jpg", "twitter", "jpg", 100, 0),
            )
            raised = False
        except sqlite3.IntegrityError:
            raised = True
    assert raised, "Expected IntegrityError for source='twitter'"


def test_count_photos_empty(tmp_db_path: Path) -> None:
    """count_photos returns 0 for an empty DB."""
    assert count_photos(tmp_db_path) == 0
