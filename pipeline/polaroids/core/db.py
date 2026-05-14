"""SQLite state store for the polaroids build pipeline.

The schema is content-addressed by SHA-256 prefix (HASH_PREFIX_LEN chars).
Forward-compat columns for Phase 3 (filter/caption) and Phase 5 (bundle)
are defined nullable on day one, so later phases never need an ALTER TABLE.
"""
from __future__ import annotations

import sqlite3
from contextlib import contextmanager
from pathlib import Path
from typing import Iterator

from polaroids.config import STATE_SQLITE

SCHEMA_SQL: str = """
CREATE TABLE IF NOT EXISTS photos (
    hash TEXT PRIMARY KEY,
    source_path TEXT NOT NULL,
    source TEXT NOT NULL,
    original_ext TEXT NOT NULL,
    canonical_jpg_path TEXT,
    creation_timestamp INTEGER,
    bytes INTEGER NOT NULL,
    ingested_at INTEGER NOT NULL,
    filter_confidence INTEGER,
    filter_bucket TEXT,
    caption_text TEXT,
    compressed_path TEXT,
    bundle_status TEXT,
    CHECK (source IN ('drive', 'facebook', 'applephotos', 'instagram'))
);

CREATE INDEX IF NOT EXISTS idx_photos_source ON photos(source);
CREATE INDEX IF NOT EXISTS idx_photos_filter_bucket ON photos(filter_bucket);
"""


def init_db(db_path: Path | str | None = None) -> None:
    """Initialize the SQLite database, creating tables and indexes if absent.

    Idempotent: re-running on an existing DB is a no-op (CREATE TABLE IF NOT EXISTS).
    """
    path = Path(db_path) if db_path is not None else STATE_SQLITE
    path.parent.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(path) as conn:
        conn.executescript(SCHEMA_SQL)
        conn.commit()


def connect(db_path: Path | str | None = None) -> sqlite3.Connection:
    """Open a raw sqlite3.Connection with Row factory and FK pragma enabled.

    The caller is responsible for `conn.close()`. For a context-managed
    connection, use `get_connection()` instead.
    """
    path = Path(db_path) if db_path is not None else STATE_SQLITE
    path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(path)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def migrate(conn: sqlite3.Connection) -> None:
    """Apply the schema migration on an already-open connection.

    Idempotent: re-running on a DB with the schema already applied is a
    no-op (CREATE TABLE IF NOT EXISTS / CREATE INDEX IF NOT EXISTS).
    """
    conn.executescript(SCHEMA_SQL)
    conn.commit()


@contextmanager
def get_connection(db_path: Path | str | None = None) -> Iterator[sqlite3.Connection]:
    """Yield a SQLite connection with foreign keys ON and Row factory enabled.

    Use as: `with get_connection() as conn: conn.execute(...)`.
    """
    path = Path(db_path) if db_path is not None else STATE_SQLITE
    conn = sqlite3.connect(path)
    try:
        conn.row_factory = sqlite3.Row
        conn.execute("PRAGMA foreign_keys = ON")
        yield conn
        conn.commit()
    finally:
        conn.close()


def count_photos(db_path: Path | str | None = None) -> int:
    """Return the total count of rows in the `photos` table.

    Used by tests and by `polaroids status` (Plan 04).
    """
    with get_connection(db_path) as conn:
        row = conn.execute("SELECT COUNT(*) AS n FROM photos").fetchone()
        return int(row["n"])
