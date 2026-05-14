"""Tests for streaming SHA-256 hashing.

Covers INGEST-01 (content-addressed identity) and T-02-02 (DoS resistance
via chunked streaming -- no full-file load into RAM).
"""
from __future__ import annotations

import re
import tempfile
from pathlib import Path

from polaroids.config import HASH_PREFIX_LEN
from polaroids.core.hashing import sha256_prefix


def test_sha256_prefix_deterministic(tmp_path: Path, fixture_jpeg_bytes: bytes) -> None:
    """Identical bytes at different paths produce identical hashes."""
    a = tmp_path / "a.jpg"
    b = tmp_path / "b.jpg"
    a.write_bytes(fixture_jpeg_bytes)
    b.write_bytes(fixture_jpeg_bytes)
    assert sha256_prefix(a) == sha256_prefix(b)


def test_sha256_prefix_different_bytes_differ(tmp_path: Path) -> None:
    """Different byte contents yield different hashes."""
    a = tmp_path / "a.jpg"
    b = tmp_path / "b.jpg"
    a.write_bytes(b"hello world")
    b.write_bytes(b"goodbye world")
    assert sha256_prefix(a) != sha256_prefix(b)


def test_sha256_prefix_length(tmp_path: Path, fixture_jpeg_bytes: bytes) -> None:
    """Hash is exactly HASH_PREFIX_LEN characters."""
    f = tmp_path / "x.jpg"
    f.write_bytes(fixture_jpeg_bytes)
    h = sha256_prefix(f)
    assert len(h) == HASH_PREFIX_LEN
    assert HASH_PREFIX_LEN == 12  # defensive: catches future config drift


def test_sha256_prefix_lowercase_hex(tmp_path: Path, fixture_jpeg_bytes: bytes) -> None:
    """Hash contains only lowercase hex characters [0-9a-f]."""
    f = tmp_path / "x.jpg"
    f.write_bytes(fixture_jpeg_bytes)
    h = sha256_prefix(f)
    assert re.fullmatch(r"[0-9a-f]+", h), f"Hash {h!r} contains non-lowercase-hex chars"


def test_sha256_prefix_known_value() -> None:
    """SHA-256 of empty file is e3b0c44298fc..., truncated to 12 = 'e3b0c44298fc'."""
    with tempfile.NamedTemporaryFile() as tf:
        # Empty file already; verify the well-known SHA-256 of empty input
        assert sha256_prefix(Path(tf.name)) == "e3b0c44298fc"


def test_sha256_prefix_handles_large_streaming(tmp_path: Path) -> None:
    """A 256 KB file hashes without raising; proves streaming works."""
    f = tmp_path / "big.bin"
    # 256 KB = 4 chunks of 64 KB; ensures the while-loop iterates multiple times
    f.write_bytes(b"\x00" * (256 * 1024))
    h = sha256_prefix(f)
    assert len(h) == HASH_PREFIX_LEN


def test_sha256_prefix_streams_in_chunks(tmp_path: Path, monkeypatch) -> None:
    """Verify the implementation calls f.read(chunk_size), NOT f.read() with no arg.

    A bare f.read() loads the entire file into memory -- exactly what T-02-02
    says we MUST NOT do. We monkey-patch open() to spy on read() invocations.
    """
    f = tmp_path / "streamed.bin"
    f.write_bytes(b"\x42" * (128 * 1024))  # 128 KB, two chunks at 64 KB

    import builtins

    real_open = builtins.open
    read_calls: list[int | None] = []

    class SpyFile:
        def __init__(self, inner):
            self._inner = inner

        def read(self, size=-1):
            # Record the chunk size requested
            read_calls.append(size if size != -1 else None)
            return self._inner.read(size)

        def __enter__(self):
            return self

        def __exit__(self, *args):
            return self._inner.__exit__(*args)

        def __getattr__(self, name):
            return getattr(self._inner, name)

    def spy_open(*args, **kwargs):
        inner = real_open(*args, **kwargs)
        if "b" in (args[1] if len(args) > 1 else kwargs.get("mode", "r")):
            return SpyFile(inner)
        return inner

    monkeypatch.setattr(builtins, "open", spy_open)

    sha256_prefix(f)

    # All read calls MUST have a positive size argument (chunked read).
    # `None` here means f.read() was called with no argument, which would
    # load the whole file -- a T-02-02 violation.
    assert read_calls, "sha256_prefix never called .read() on the file"
    assert all(
        isinstance(size, int) and size > 0 for size in read_calls
    ), f"sha256_prefix called .read() without a chunk size: {read_calls!r}"
