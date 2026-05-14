"""Recursive image-file walker with case-insensitive extension filter.

INGEST-01: walk Drive/ and facebook/ recursively, yielding image files.
INGEST-02: tolerate missing source directories (skip rather than raise),
since not every machine has both folders populated at every build.

Edge cases handled (from the real Drive/ folder):
  - Case-mixed extensions: '021.JPG', 'foo.jpg', 'BaZ.JpEg' all match
  - Spaces in filenames: '058 - Copy - Copy - Copy.JPG'
  - Double-extension: 'l_0cea8969b90b24dd50038a663dd99835.jpg.jpg'
    (suffix is still '.jpg' so this is yielded; SHA-256 hashes bytes
     not filename, so identity is unaffected)
  - macOS metadata files: .DS_Store, .AppleDouble (dotfiles excluded)
"""
from __future__ import annotations

from pathlib import Path
from typing import Iterator

from polaroids.config import SUPPORTED_EXTS


def iter_image_files(root: Path) -> Iterator[Path]:
    """Recursively yield files in `root` whose suffix (lowercased) is in SUPPORTED_EXTS.

    Args:
        root: Directory to walk. May be missing; yields nothing if so.

    Yields:
        Path objects in stable sorted order (case-insensitive lexicographic on
        the full path string) so test assertions and CLI output are deterministic.

    Skips:
        - non-existent root (yields nothing, does not raise)
        - root that is a file (yields nothing, does not raise)
        - directories themselves (only files are yielded)
        - dotfiles (names starting with '.') -- handles macOS .DS_Store
        - non-image extensions (anything outside SUPPORTED_EXTS)
    """
    if not root.exists() or not root.is_dir():
        return

    # rglob yields files + directories; filter to files, sort by lowercased
    # path string for deterministic order. We sort the FULL list once rather
    # than walking incrementally because Drive/ is tiny (~12 files) and the
    # max for the project's lifetime is ~250 photos.
    paths = sorted(
        (p for p in root.rglob("*") if p.is_file()),
        key=lambda p: str(p).lower(),
    )
    for p in paths:
        if p.name.startswith("."):
            continue
        if p.suffix.lower() not in SUPPORTED_EXTS:
            continue
        yield p
