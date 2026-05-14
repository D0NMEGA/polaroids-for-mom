"""Streaming SHA-256 hashing for content-addressed photo identity.

INGEST-01: every photo is keyed by a 12-character lowercase-hex SHA-256 prefix.
T-02-02: hashing MUST stream the file in chunks; a full-file load would
let a single large HEIC export exhaust RAM on the build machine.
"""
from __future__ import annotations

import hashlib
from pathlib import Path

from polaroids.config import HASH_PREFIX_LEN

# 64 KB chunk: balances syscall overhead against memory pressure.
# A 4 MB HEIC streams in ~64 reads; RAM peak stays at ~64 KB regardless
# of file size.
_CHUNK_BYTES: int = 64 * 1024


def sha256_prefix(path: Path, prefix_len: int = HASH_PREFIX_LEN) -> str:
    """Stream-compute SHA-256 of `path`'s bytes; return first `prefix_len` lowercase hex chars.

    Args:
        path: File to hash. Must be readable.
        prefix_len: Number of leading hex characters to return.
            Defaults to HASH_PREFIX_LEN (12) per INGEST-01.

    Returns:
        Lowercase hex string of length `prefix_len`.

    Raises:
        FileNotFoundError: if `path` does not exist.
        PermissionError: if the file is not readable.

    Implementation note:
        Reads in 64 KB chunks (via `f.read(_CHUNK_BYTES)`) rather than
        `f.read()` so RAM stays bounded regardless of file size.
    """
    h = hashlib.sha256()
    with open(path, "rb") as f:
        while chunk := f.read(_CHUNK_BYTES):
            h.update(chunk)
    return h.hexdigest()[:prefix_len]
