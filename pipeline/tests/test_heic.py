"""Tests for HEIC → JPEG companion conversion via pillow-heif.

Covers INGEST-03: HEIC files in either source directory are decoded into a
sibling JPEG inside POOL_DIR/heic-companions/, and the original .heic is
retained (never modified or deleted).

Threat T-02-08 (DoS via libheif memory bug): pillow-heif==1.3.0 is pinned
(CLAUDE.md). Pillow's `Image.open` context manager closes the decoder
promptly. HEIC files come from Donovan's local sources only.

Critical invariant: importing this module triggers register_heif_opener()
at the top level of polaroids.core.heic — making Pillow's Image.open
transparently handle HEIC/HEIF files everywhere in the pipeline.
"""
from __future__ import annotations

import io
from pathlib import Path

from PIL import Image

# Importing this module MUST register the HEIF opener (top-level side effect)
from polaroids.core.heic import convert_heic_to_jpeg, is_heic


def _make_heic_bytes() -> bytes:
    """Encode a 4x4 white image as HEIC via pillow-heif (which we just registered)."""
    img = Image.new("RGB", (4, 4), color=(255, 255, 255))
    buf = io.BytesIO()
    img.save(buf, format="HEIF")  # pillow-heif registers HEIF as a Pillow plugin
    return buf.getvalue()


def test_is_heic_true_for_lowercase(tmp_path: Path) -> None:
    assert is_heic(tmp_path / "photo.heic") is True


def test_is_heic_true_for_uppercase(tmp_path: Path) -> None:
    assert is_heic(tmp_path / "PHOTO.HEIC") is True


def test_is_heic_true_for_heif_extension(tmp_path: Path) -> None:
    assert is_heic(tmp_path / "photo.heif") is True


def test_is_heic_false_for_jpg(tmp_path: Path) -> None:
    assert is_heic(tmp_path / "photo.jpg") is False


def test_is_heic_false_for_png(tmp_path: Path) -> None:
    assert is_heic(tmp_path / "photo.png") is False


def test_pillow_can_open_heic_after_module_import(tmp_path: Path) -> None:
    """The mere act of importing polaroids.core.heic registers the HEIF opener."""
    heic_path = tmp_path / "sample.heic"
    heic_path.write_bytes(_make_heic_bytes())
    # If register_heif_opener was NOT called, this raises UnidentifiedImageError
    img = Image.open(heic_path)
    img.load()
    assert img.size == (4, 4)


def test_convert_heic_to_jpeg_writes_companion(tmp_path: Path, monkeypatch) -> None:
    # Redirect POOL_DIR to tmp_path so we don't pollute the repo
    monkeypatch.setattr("polaroids.core.heic.POOL_DIR", tmp_path)

    heic_path = tmp_path / "input.heic"
    heic_path.write_bytes(_make_heic_bytes())

    jpg_path = convert_heic_to_jpeg(heic_path, hash_prefix="abc123def456")

    assert jpg_path.exists()
    assert jpg_path.suffix == ".jpg"
    assert "abc123def456" in jpg_path.name
    # And the JPEG is decodable
    with Image.open(jpg_path) as jpg:
        assert jpg.format == "JPEG"


def test_convert_heic_creates_pool_subdir(tmp_path: Path, monkeypatch) -> None:
    """If POOL_DIR/heic-companions doesn't exist, it's created."""
    monkeypatch.setattr("polaroids.core.heic.POOL_DIR", tmp_path / "fresh-pool")

    heic_path = tmp_path / "input.heic"
    heic_path.write_bytes(_make_heic_bytes())

    jpg_path = convert_heic_to_jpeg(heic_path, hash_prefix="0011223344aa")
    assert jpg_path.exists()
    assert (tmp_path / "fresh-pool" / "heic-companions").is_dir()


def test_convert_heic_does_not_touch_original(tmp_path: Path, monkeypatch) -> None:
    monkeypatch.setattr("polaroids.core.heic.POOL_DIR", tmp_path)

    heic_path = tmp_path / "input.heic"
    original_bytes = _make_heic_bytes()
    heic_path.write_bytes(original_bytes)

    convert_heic_to_jpeg(heic_path, hash_prefix="aaaabbbbcccc")
    # Original untouched
    assert heic_path.read_bytes() == original_bytes


def test_convert_heic_idempotent_overwrite(tmp_path: Path, monkeypatch) -> None:
    """Calling twice with the same hash overwrites the JPG, doesn't raise."""
    monkeypatch.setattr("polaroids.core.heic.POOL_DIR", tmp_path)

    heic_path = tmp_path / "input.heic"
    heic_path.write_bytes(_make_heic_bytes())

    jpg_1 = convert_heic_to_jpeg(heic_path, hash_prefix="ffffeeeeddd0")
    jpg_2 = convert_heic_to_jpeg(heic_path, hash_prefix="ffffeeeeddd0")

    assert jpg_1 == jpg_2
    assert jpg_2.exists()
