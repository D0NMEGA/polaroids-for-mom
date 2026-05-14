"""Tests for the extended ingest pipeline: sidecar timestamps, EXIF fallback, HEIC companions.

These tests prove the integration contract — once ingest_core.py wires
facebook_sidecar + exif + heic together, every row produced by
ingest_directory has the correct creation_timestamp and canonical_jpg_path
according to the date trust hierarchy:

  Facebook + sidecar present  -> sidecar wins
  Facebook + no sidecar       -> EXIF fallback (often None for FB exports)
  Drive/                      -> EXIF only
  Else                        -> NULL (Phase 3 AI inference fills later)

INGEST-02 + INGEST-03 + INGEST-04 are all proven end-to-end here.
"""
from __future__ import annotations

import json
import time
from datetime import datetime
from pathlib import Path

import piexif
from PIL import Image

from polaroids.core.db import get_connection
from polaroids.core.ingest_core import ingest_directory


def _make_jpeg_with_exif(path: Path, dt: datetime) -> None:
    img = Image.new("RGB", (1, 1), color=(255, 255, 255))
    exif_dict = {
        "0th": {},
        "Exif": {
            piexif.ExifIFD.DateTimeOriginal: dt.strftime("%Y:%m:%d %H:%M:%S").encode("ascii"),
        },
        "GPS": {}, "1st": {}, "thumbnail": None,
    }
    img.save(path, format="JPEG", exif=piexif.dump(exif_dict))


def _make_heic(path: Path) -> None:
    # Importing polaroids.core.heic at module load time triggers register_heif_opener
    from polaroids.core.heic import register_heif_opener  # noqa: F401
    img = Image.new("RGB", (4, 4), color=(0, 128, 255))
    img.save(path, format="HEIF")


def test_ingest_facebook_with_sidecar_populates_timestamp(
    tmp_facebook_dir: Path, tmp_db_path: Path
) -> None:
    # Place a photo at facebook/photo_a.jpg
    Image.new("RGB", (1, 1)).save(tmp_facebook_dir / "photo_a.jpg", format="JPEG")
    # And a sidecar JSON referencing it
    posts = tmp_facebook_dir / "your_facebook_activity" / "posts"
    posts.mkdir(parents=True)
    (posts / "your_posts_1.json").write_text(json.dumps([
        {
            "timestamp": 1600000000,
            "attachments": [{
                "data": [{
                    "media": {
                        "uri": "your_facebook_activity/posts/media/photo_a.jpg",
                        "creation_timestamp": 1600000000,
                    }
                }]
            }]
        }
    ]))

    ingest_directory(tmp_facebook_dir, source="facebook", db_path=tmp_db_path)
    with get_connection(tmp_db_path) as conn:
        row = conn.execute(
            "SELECT creation_timestamp FROM photos WHERE source_path LIKE '%photo_a.jpg'"
        ).fetchone()
    assert row["creation_timestamp"] == 1600000000


def test_ingest_facebook_flat_layout_proceeds_without_sidecar(
    tmp_facebook_dir: Path, tmp_db_path: Path
) -> None:
    """The CURRENT real state: facebook/ is flat with no your_facebook_activity/."""
    # Use byte-distinct colors so the two photos have different SHA-256 hashes
    # (otherwise content-addressed dedup correctly skips the second one).
    Image.new("RGB", (1, 1), color=(10, 10, 10)).save(tmp_facebook_dir / "fb_1.jpg", format="JPEG")
    Image.new("RGB", (1, 1), color=(200, 200, 200)).save(tmp_facebook_dir / "fb_2.jpg", format="JPEG")

    result = ingest_directory(tmp_facebook_dir, source="facebook", db_path=tmp_db_path)
    assert result.inserted == 2
    assert result.failed == 0

    with get_connection(tmp_db_path) as conn:
        for row in conn.execute("SELECT creation_timestamp FROM photos"):
            assert row["creation_timestamp"] is None


def test_ingest_falls_back_to_exif_when_no_sidecar(
    tmp_drive_dir: Path, tmp_db_path: Path
) -> None:
    """Drive/ source has no sidecar; an EXIF-carrying JPEG gets timestamp via EXIF."""
    dt = datetime(2019, 7, 15, 14, 30, 0)
    _make_jpeg_with_exif(tmp_drive_dir / "trip.jpg", dt)

    ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)

    with get_connection(tmp_db_path) as conn:
        row = conn.execute("SELECT creation_timestamp FROM photos").fetchone()
    assert row["creation_timestamp"] is not None
    # Within 24h of expected epoch (TZ-safe assertion)
    expected = int(time.mktime(dt.timetuple()))
    assert abs(row["creation_timestamp"] - expected) < 86400


def test_ingest_facebook_sidecar_wins_over_exif(
    tmp_facebook_dir: Path, tmp_db_path: Path
) -> None:
    """When BOTH sidecar and EXIF have a timestamp, sidecar takes precedence."""
    # JPEG with EXIF DateTimeOriginal in 2020
    _make_jpeg_with_exif(tmp_facebook_dir / "dual.jpg", datetime(2020, 1, 1, 12, 0, 0))
    # Sidecar entry says 1000 (Unix epoch ~1970)
    posts = tmp_facebook_dir / "your_facebook_activity" / "posts"
    posts.mkdir(parents=True)
    (posts / "your_posts_1.json").write_text(json.dumps([
        {
            "timestamp": 1000,
            "attachments": [{
                "data": [{
                    "media": {
                        "uri": "your_facebook_activity/posts/media/dual.jpg",
                        "creation_timestamp": 1000,
                    }
                }]
            }]
        }
    ]))

    ingest_directory(tmp_facebook_dir, source="facebook", db_path=tmp_db_path)

    with get_connection(tmp_db_path) as conn:
        row = conn.execute("SELECT creation_timestamp FROM photos").fetchone()
    # Sidecar (1000) wins, NOT the EXIF value
    assert row["creation_timestamp"] == 1000


def test_ingest_heic_writes_companion_and_records_path(
    tmp_drive_dir: Path, tmp_db_path: Path, tmp_path: Path, monkeypatch
) -> None:
    """A .heic in the source dir produces a JPEG companion in POOL_DIR."""
    monkeypatch.setattr("polaroids.core.heic.POOL_DIR", tmp_path / "pool")
    _make_heic(tmp_drive_dir / "iphone.heic")

    result = ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)
    assert result.inserted == 1
    assert result.failed == 0

    with get_connection(tmp_db_path) as conn:
        row = conn.execute("SELECT canonical_jpg_path, original_ext FROM photos").fetchone()
    assert row["original_ext"] == "heic"
    assert row["canonical_jpg_path"] is not None
    assert Path(row["canonical_jpg_path"]).exists()
    assert Path(row["canonical_jpg_path"]).suffix == ".jpg"


def test_ingest_heic_retains_original(
    tmp_drive_dir: Path, tmp_db_path: Path, tmp_path: Path, monkeypatch
) -> None:
    monkeypatch.setattr("polaroids.core.heic.POOL_DIR", tmp_path / "pool")
    heic_path = tmp_drive_dir / "iphone.heic"
    _make_heic(heic_path)
    original_bytes = heic_path.read_bytes()

    ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)

    # Original untouched
    assert heic_path.exists()
    assert heic_path.read_bytes() == original_bytes


def test_ingest_jpeg_has_null_canonical_jpg_path(
    tmp_drive_dir: Path, tmp_db_path: Path
) -> None:
    """Non-HEIC ingest does NOT populate canonical_jpg_path (set in Phase 5 compress)."""
    Image.new("RGB", (1, 1)).save(tmp_drive_dir / "x.jpg", format="JPEG")
    ingest_directory(tmp_drive_dir, source="drive", db_path=tmp_db_path)

    with get_connection(tmp_db_path) as conn:
        row = conn.execute("SELECT canonical_jpg_path FROM photos").fetchone()
    assert row["canonical_jpg_path"] is None


def test_ingest_idempotent_with_metadata(
    tmp_facebook_dir: Path, tmp_db_path: Path
) -> None:
    """Second ingest does not re-write companions or re-populate timestamps."""
    Image.new("RGB", (1, 1)).save(tmp_facebook_dir / "photo_a.jpg", format="JPEG")
    posts = tmp_facebook_dir / "your_facebook_activity" / "posts"
    posts.mkdir(parents=True)
    (posts / "your_posts_1.json").write_text(json.dumps([{
        "timestamp": 1600000000,
        "attachments": [{
            "data": [{
                "media": {
                    "uri": "your_facebook_activity/posts/media/photo_a.jpg",
                    "creation_timestamp": 1600000000,
                }
            }]
        }]
    }]))

    ingest_directory(tmp_facebook_dir, source="facebook", db_path=tmp_db_path)
    ingest_directory(tmp_facebook_dir, source="facebook", db_path=tmp_db_path)

    with get_connection(tmp_db_path) as conn:
        rows = list(conn.execute("SELECT creation_timestamp FROM photos"))
    assert len(rows) == 1
    assert rows[0]["creation_timestamp"] == 1600000000
