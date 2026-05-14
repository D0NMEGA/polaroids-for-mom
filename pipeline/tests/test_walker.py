"""Tests for the recursive image-file walker.

Covers INGEST-01 (walks Drive/ + facebook/) and the real Drive/ edge cases:
case-mixed extensions, spaces in filenames, double-extension file
(l_0cea8969b90b24dd50038a663dd99835.jpg.jpg), nested directories.
"""
from __future__ import annotations

from pathlib import Path

from polaroids.core.walker import iter_image_files


def test_iter_image_files_finds_jpg_lowercase(tmp_drive_dir: Path) -> None:
    """A lowercase .jpg is yielded."""
    (tmp_drive_dir / "foo.jpg").write_bytes(b"x")
    out = list(iter_image_files(tmp_drive_dir))
    assert len(out) == 1
    assert out[0].name == "foo.jpg"


def test_iter_image_files_finds_jpg_uppercase(tmp_drive_dir: Path) -> None:
    """An uppercase .JPG is yielded (case-insensitive extension filter)."""
    (tmp_drive_dir / "BAR.JPG").write_bytes(b"x")
    out = list(iter_image_files(tmp_drive_dir))
    assert len(out) == 1
    assert out[0].name == "BAR.JPG"


def test_iter_image_files_finds_jpeg_mixed_case(tmp_drive_dir: Path) -> None:
    """A mixed-case .JpEg is yielded."""
    (tmp_drive_dir / "BaZ.JpEg").write_bytes(b"x")
    out = list(iter_image_files(tmp_drive_dir))
    assert len(out) == 1


def test_iter_image_files_finds_heic(tmp_drive_dir: Path) -> None:
    """A .HEIC (uppercase) is yielded -- needed for Plan 03 HEIC ingest."""
    (tmp_drive_dir / "iPhone.HEIC").write_bytes(b"x")
    out = list(iter_image_files(tmp_drive_dir))
    assert len(out) == 1


def test_iter_image_files_finds_png(tmp_drive_dir: Path) -> None:
    """A .png is yielded (PNG_EXTS in SUPPORTED_EXTS)."""
    (tmp_drive_dir / "screenshot.png").write_bytes(b"x")
    out = list(iter_image_files(tmp_drive_dir))
    assert len(out) == 1


def test_iter_image_files_skips_non_image(tmp_drive_dir: Path) -> None:
    """Non-image files (.txt, .json) are NOT yielded."""
    (tmp_drive_dir / "notes.txt").write_bytes(b"hi")
    (tmp_drive_dir / "data.json").write_bytes(b"{}")
    out = list(iter_image_files(tmp_drive_dir))
    assert out == []


def test_iter_image_files_handles_spaces_in_filename(tmp_drive_dir: Path) -> None:
    """A filename with spaces (real Drive/058 - Copy - Copy - Copy.JPG) is yielded."""
    (tmp_drive_dir / "058 - Copy - Copy - Copy.JPG").write_bytes(b"x")
    out = list(iter_image_files(tmp_drive_dir))
    assert len(out) == 1
    assert "Copy" in out[0].name


def test_iter_image_files_handles_double_extension(tmp_drive_dir: Path) -> None:
    """A file named foo.jpg.jpg is yielded (suffix is still .jpg).

    Real Drive/ contains: l_0cea8969b90b24dd50038a663dd99835.jpg.jpg
    """
    (tmp_drive_dir / "l_0cea8969b90b24dd50038a663dd99835.jpg.jpg").write_bytes(b"x")
    out = list(iter_image_files(tmp_drive_dir))
    assert len(out) == 1


def test_iter_image_files_recursive(tmp_drive_dir: Path) -> None:
    """A file inside a nested subdir is yielded."""
    nested = tmp_drive_dir / "subdir" / "deep"
    nested.mkdir(parents=True)
    (nested / "deep.jpg").write_bytes(b"x")
    out = list(iter_image_files(tmp_drive_dir))
    assert len(out) == 1


def test_iter_image_files_skips_dotfiles(tmp_drive_dir: Path) -> None:
    """macOS .DS_Store should not appear in results."""
    (tmp_drive_dir / ".DS_Store").write_bytes(b"x")
    (tmp_drive_dir / "real.jpg").write_bytes(b"x")
    out = list(iter_image_files(tmp_drive_dir))
    assert [p.name for p in out] == ["real.jpg"]


def test_iter_image_files_empty_dir_yields_nothing(tmp_drive_dir: Path) -> None:
    """An empty dir yields zero items."""
    assert list(iter_image_files(tmp_drive_dir)) == []


def test_iter_image_files_stable_order(tmp_drive_dir: Path) -> None:
    """Output is sorted so test assertions are deterministic."""
    (tmp_drive_dir / "b.jpg").write_bytes(b"x")
    (tmp_drive_dir / "a.jpg").write_bytes(b"x")
    (tmp_drive_dir / "c.jpg").write_bytes(b"x")
    names = [p.name for p in iter_image_files(tmp_drive_dir)]
    assert names == sorted(names)


def test_iter_image_files_returns_pathlib_paths(tmp_drive_dir: Path) -> None:
    """Yielded items are Path instances (not strings)."""
    (tmp_drive_dir / "x.jpg").write_bytes(b"x")
    out = list(iter_image_files(tmp_drive_dir))
    assert all(isinstance(p, Path) for p in out)


def test_iter_image_files_nonexistent_root_returns_empty(tmp_path: Path) -> None:
    """A missing root yields zero items (does not raise).

    INGEST-02 specifies sources are ingested 'when present', so the walker
    MUST tolerate missing source dirs without crashing the pipeline.
    """
    out = list(iter_image_files(tmp_path / "does-not-exist"))
    assert out == []


def test_iter_image_files_root_is_file_returns_empty(tmp_path: Path) -> None:
    """Passing a file (not a directory) yields zero items without raising."""
    f = tmp_path / "not-a-dir.jpg"
    f.write_bytes(b"x")
    out = list(iter_image_files(f))
    assert out == []
