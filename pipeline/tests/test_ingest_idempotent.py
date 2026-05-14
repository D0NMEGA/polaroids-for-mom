"""Tests for ingest_core.ingest_directory -- INSERT OR IGNORE idempotency.

Covers INGEST-01 (one row per unique photo), INGEST-04 (idempotent re-runs),
and the threat register's T-02-01 (SQL injection defense via parameterized
queries), T-02-05 (read-error tolerance), and T-02-06 (source validation).
"""
from __future__ import annotations

import os
import stat
import time
from pathlib import Path

import pytest

from polaroids.core.db import count_photos, get_connection
from polaroids.core.ingest_core import IngestResult, ingest_directory


def test_ingest_inserts_one_row_per_unique_photo(
    tmp_drive_dir: Path, tmp_db_path: Path
) -> None:
    """3 byte-distinct files -> 3 rows; inserted=3, skipped=0."""
    for i, ext in enumerate(["jpg", "JPG", "jpeg"]):
        (tmp_drive_dir / f"file_{i}.{ext}").write_bytes(f"unique-{i}".encode())
    result = ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)
    assert result.inserted == 3
    assert result.skipped == 0
    assert count_photos(tmp_db_path) == 3


def test_ingest_is_idempotent_second_run_is_noop(
    tmp_drive_dir: Path, tmp_db_path: Path
) -> None:
    """Second ingest of the same dir: 0 inserted, all rows skipped (INGEST-04)."""
    for i in range(3):
        (tmp_drive_dir / f"f{i}.jpg").write_bytes(f"u-{i}".encode())
    first = ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)
    second = ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)

    assert first.inserted == 3
    assert second.inserted == 0
    assert second.skipped == 3
    assert count_photos(tmp_db_path) == 3


def test_ingest_deduplicates_same_bytes_different_paths(
    tmp_drive_dir: Path, tmp_db_path: Path
) -> None:
    """Two paths with identical bytes -> 1 row (first wins; second skipped)."""
    identical = b"identical bytes"
    (tmp_drive_dir / "a.jpg").write_bytes(identical)
    (tmp_drive_dir / "b.jpg").write_bytes(identical)
    result = ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)
    # Walker yields both; second hash collides on PRIMARY KEY -> 1 inserted + 1 skipped
    assert result.inserted == 1
    assert result.skipped == 1
    assert count_photos(tmp_db_path) == 1


def test_ingest_records_correct_source(tmp_drive_dir: Path, tmp_db_path: Path) -> None:
    """Row source matches the source arg passed to ingest_directory."""
    (tmp_drive_dir / "x.jpg").write_bytes(b"hello")
    ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)
    with get_connection(tmp_db_path) as conn:
        row = conn.execute("SELECT source FROM photos").fetchone()
    assert row["source"] == "drive"


def test_ingest_records_correct_extension(
    tmp_drive_dir: Path, tmp_db_path: Path
) -> None:
    """original_ext is lowercased and stripped of leading dot."""
    (tmp_drive_dir / "uppercase.JPEG").write_bytes(b"hi")
    ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)
    with get_connection(tmp_db_path) as conn:
        row = conn.execute("SELECT original_ext FROM photos").fetchone()
    assert row["original_ext"] == "jpeg"  # lowercased, no leading dot


def test_ingest_records_bytes_size(tmp_drive_dir: Path, tmp_db_path: Path) -> None:
    """`bytes` column matches the on-disk file size."""
    content = b"x" * 1024
    (tmp_drive_dir / "k.jpg").write_bytes(content)
    ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)
    with get_connection(tmp_db_path) as conn:
        row = conn.execute("SELECT bytes FROM photos").fetchone()
    assert row["bytes"] == 1024


def test_ingest_records_ingested_at_unix_epoch(
    tmp_drive_dir: Path, tmp_db_path: Path
) -> None:
    """`ingested_at` is a positive Unix epoch second within the call window."""
    (tmp_drive_dir / "y.jpg").write_bytes(b"hello")
    before = int(time.time())
    ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)
    after = int(time.time())
    with get_connection(tmp_db_path) as conn:
        row = conn.execute("SELECT ingested_at FROM photos").fetchone()
    assert before <= row["ingested_at"] <= after


def test_ingest_uses_parameterized_query_against_sql_injection(
    tmp_drive_dir: Path, tmp_db_path: Path
) -> None:
    """A malicious filename does not corrupt the DB (T-02-01 mitigation).

    The filename 'evil'; DROP TABLE photos; --.jpg contains SQL metacharacters.
    Because we use parameterized `?` placeholders, the bytes are stored as
    a TEXT value, NOT executed. The photos table must survive.
    """
    evil = tmp_drive_dir / "'; DROP TABLE photos; --.jpg"
    evil.write_bytes(b"data")
    ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)
    # Table must still exist with the malicious row stored verbatim
    assert count_photos(tmp_db_path) == 1
    with get_connection(tmp_db_path) as conn:
        row = conn.execute("SELECT source_path FROM photos").fetchone()
    assert "DROP TABLE" in row["source_path"]  # stored as data, not executed


def test_ingest_unknown_source_raises_value_error(
    tmp_drive_dir: Path, tmp_db_path: Path
) -> None:
    """Invalid source rejected BEFORE any DB write (T-02-06)."""
    (tmp_drive_dir / "x.jpg").write_bytes(b"hi")
    with pytest.raises(ValueError):
        ingest_directory(tmp_drive_dir, source="twitter", db_path=tmp_db_path)
    # And nothing was inserted
    assert count_photos(tmp_db_path) == 0


def test_ingest_returns_total_walked_count(
    tmp_drive_dir: Path, tmp_db_path: Path
) -> None:
    """IngestResult.total_walked equals the number of files the walker saw."""
    for i in range(5):
        (tmp_drive_dir / f"f{i}.jpg").write_bytes(f"u-{i}".encode())
    result = ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)
    assert result.total_walked == 5


def test_ingest_handles_unreadable_file_without_raising(
    tmp_drive_dir: Path, tmp_db_path: Path
) -> None:
    """A file with 0o000 permissions increments `failed`, doesn't raise (T-02-05)."""
    good = tmp_drive_dir / "good.jpg"
    good.write_bytes(b"good")
    bad = tmp_drive_dir / "bad.jpg"
    bad.write_bytes(b"bad")
    os.chmod(bad, 0)  # remove all permissions

    try:
        result = ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)
    finally:
        os.chmod(bad, stat.S_IRUSR | stat.S_IWUSR)  # restore so pytest can clean up

    assert result.inserted == 1
    assert result.failed == 1


def test_ingest_empty_directory_returns_zero_result(
    tmp_drive_dir: Path, tmp_db_path: Path
) -> None:
    """Empty source dir yields IngestResult(0, 0, 0, 0)."""
    result = ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)
    assert result == IngestResult(inserted=0, skipped=0, failed=0, total_walked=0)


def test_ingest_missing_directory_returns_zero_result(
    tmp_path: Path, tmp_db_path: Path
) -> None:
    """Non-existent source dir yields IngestResult(0, 0, 0, 0) (INGEST-02)."""
    missing = tmp_path / "does-not-exist"
    result = ingest_directory(missing, source="drive", db_path=tmp_db_path)
    assert result == IngestResult(inserted=0, skipped=0, failed=0, total_walked=0)
