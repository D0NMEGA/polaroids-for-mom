"""Read EXIF DateTimeOriginal via piexif as a fallback for stripped timestamps.

For Drive/ source photos (and Facebook photos that lack a sidecar), this
module extracts the EXIF DateTimeOriginal tag and returns it as a Unix
epoch second.

INGEST-02: per the date trust hierarchy, EXIF is the second-best signal
(sidecar wins for Facebook). For Drive/ JPEGs taken in 2006-2019, EXIF
DateTimeOriginal is usually intact.

Threat T-02-09 (DoS via malformed EXIF): piexif had historical CVEs and may
raise a heterogeneous set of errors on bad input (InvalidImageDataError for
non-JPEGs/empty files, FileNotFoundError for missing paths, struct.error for
truncated EXIF blocks, ValueError on malformed date strings). We catch these
specific known exception types — NOT a bare `except Exception` — and return
None. Caller treats None as "no timestamp available."
"""
from __future__ import annotations

import logging
import struct
import time
from datetime import datetime
from pathlib import Path
from typing import Optional

import piexif

_logger = logging.getLogger(__name__)

# Specific exception types piexif.load is documented or empirically known
# to raise on malformed input. We avoid a bare `except Exception:` per the
# plan's plan-checker note: a narrow tuple is more honest about what we
# expect, and a truly novel exception type should propagate to be debugged.
_PIEXIF_LOAD_ERRORS: tuple = (
    piexif.InvalidImageDataError,  # non-JPEG/TIFF, empty file, garbage bytes
    OSError,                       # FileNotFoundError, PermissionError
    ValueError,                    # documented for some malformed tag values
    struct.error,                  # truncated EXIF segments
)


def read_creation_timestamp(path: Path) -> Optional[int]:
    """Read EXIF DateTimeOriginal from a JPEG; return Unix epoch seconds (int).

    Returns None for any of: missing file, non-JPEG, no EXIF, malformed EXIF date.
    Never raises (caller can treat None as "no timestamp available").

    EXIF dates are 'YYYY:MM:DD HH:MM:SS' (note: COLONS in date separator).
    EXIF spec does not include a timezone — interpreted as local time
    (piexif/Pillow conventions match this).

    Args:
        path: Path to a candidate JPEG file. May be missing/empty/garbage.

    Returns:
        Unix epoch seconds (int) if a valid DateTimeOriginal is found,
        otherwise None.
    """
    if not path.exists() or not path.is_file():
        return None
    try:
        exif_dict = piexif.load(str(path))
    except _PIEXIF_LOAD_ERRORS as exc:
        _logger.debug("exif: piexif.load failed for %s (%s)", path, exc)
        return None

    exif_ifd = exif_dict.get("Exif") or {}
    dto = exif_ifd.get(piexif.ExifIFD.DateTimeOriginal)
    if not dto:
        return None

    # piexif returns DateTimeOriginal as bytes like b'2019:07:15 14:30:00'
    if isinstance(dto, bytes):
        dto_str = dto.decode("ascii", errors="replace")
    else:
        dto_str = str(dto)

    try:
        dt = datetime.strptime(dto_str, "%Y:%m:%d %H:%M:%S")
    except ValueError:
        _logger.debug("exif: malformed DateTimeOriginal %r in %s", dto_str, path)
        return None

    # EXIF has no TZ; treat as local time (Pillow/piexif do the same)
    return int(time.mktime(dt.timetuple()))
