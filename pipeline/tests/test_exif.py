"""Tests for piexif-based EXIF DateTimeOriginal reading.

Covers INGEST-02 fallback: when no sidecar is present (e.g., Drive/ source),
the EXIF DateTimeOriginal is parsed as the creation_timestamp fallback.

Threat T-02-09 (DoS via malformed EXIF): read_creation_timestamp returns
None on ANY parse failure — never raises. Tested by the "returns None for ..."
suite below.
"""
from __future__ import annotations

from datetime import datetime
from pathlib import Path

import piexif
from PIL import Image

from polaroids.core.exif import read_creation_timestamp


def _make_jpeg_with_exif(path: Path, dt: datetime) -> None:
    """Write a real 1x1 JPEG with the given DateTimeOriginal embedded."""
    img = Image.new("RGB", (1, 1), color=(255, 255, 255))
    exif_dict = {
        "0th": {},
        "Exif": {
            piexif.ExifIFD.DateTimeOriginal: dt.strftime("%Y:%m:%d %H:%M:%S").encode("ascii"),
        },
        "GPS": {},
        "1st": {},
        "thumbnail": None,
    }
    exif_bytes = piexif.dump(exif_dict)
    img.save(path, format="JPEG", exif=exif_bytes)


def test_returns_none_for_jpeg_without_exif(tmp_path: Path) -> None:
    # PIL image saved without EXIF
    img = Image.new("RGB", (1, 1), color=(0, 0, 0))
    f = tmp_path / "noexif.jpg"
    img.save(f, format="JPEG")
    assert read_creation_timestamp(f) is None


def test_returns_none_for_non_jpeg(tmp_path: Path) -> None:
    f = tmp_path / "not_an_image.txt"
    f.write_bytes(b"this is not an image")
    assert read_creation_timestamp(f) is None


def test_returns_none_for_missing_file(tmp_path: Path) -> None:
    # Must not raise FileNotFoundError
    assert read_creation_timestamp(tmp_path / "absent.jpg") is None


def test_returns_none_for_empty_file(tmp_path: Path) -> None:
    f = tmp_path / "empty.jpg"
    f.write_bytes(b"")
    assert read_creation_timestamp(f) is None


def test_parses_real_exif_datetimeoriginal(tmp_path: Path) -> None:
    """Round-trip: write a JPEG with EXIF DateTimeOriginal, then read it."""
    dt = datetime(2019, 7, 15, 14, 30, 0)
    f = tmp_path / "with_exif.jpg"
    _make_jpeg_with_exif(f, dt)

    result = read_creation_timestamp(f)
    assert result is not None
    # Local-time interpretation: dt.timestamp() converts using local TZ
    expected_epoch = int(dt.timestamp())
    # Allow a 24-hour fudge for any TZ confusion in test env, but the value MUST be a real epoch
    assert isinstance(result, int)
    assert abs(result - expected_epoch) < 86400


def test_returns_int_type(tmp_path: Path) -> None:
    dt = datetime(2020, 1, 1, 12, 0, 0)
    f = tmp_path / "with_exif.jpg"
    _make_jpeg_with_exif(f, dt)
    result = read_creation_timestamp(f)
    assert isinstance(result, int)
