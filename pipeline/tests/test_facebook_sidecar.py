"""Tests for Facebook export sidecar JSON parsing.

Covers INGEST-02: when `facebook/your_facebook_activity/posts/*.json` exists,
each photo's `creation_timestamp` is parsed from JSON. When the subdir is
absent (the current real folder state), the parser returns {} and logs a
notice — ingest proceeds without crashing.

Threat T-02-07 (Tampering/DoS via malformed JSON): malformed JSON in one
file does not crash the whole load. Tested by test_tolerates_malformed_json.
"""
from __future__ import annotations

import json
import shutil
from pathlib import Path

from polaroids.core.facebook_sidecar import load_sidecar_index

FIXTURES_DIR = Path(__file__).parent / "fixtures"


def test_returns_empty_when_no_your_facebook_activity_dir(tmp_facebook_dir: Path) -> None:
    """Current real state: facebook/ is flat, no your_facebook_activity/ subdir."""
    idx = load_sidecar_index(tmp_facebook_dir)
    assert idx == {}


def test_returns_empty_when_no_posts_dir(tmp_facebook_dir: Path) -> None:
    (tmp_facebook_dir / "your_facebook_activity").mkdir()
    idx = load_sidecar_index(tmp_facebook_dir)
    assert idx == {}


def test_returns_empty_when_posts_dir_has_no_json(tmp_facebook_dir: Path) -> None:
    (tmp_facebook_dir / "your_facebook_activity" / "posts").mkdir(parents=True)
    idx = load_sidecar_index(tmp_facebook_dir)
    assert idx == {}


def test_parses_single_minimal_sidecar(tmp_facebook_dir: Path) -> None:
    posts = tmp_facebook_dir / "your_facebook_activity" / "posts"
    posts.mkdir(parents=True)
    shutil.copy(FIXTURES_DIR / "sidecar_minimal.json", posts / "your_posts_1.json")

    idx = load_sidecar_index(tmp_facebook_dir)
    assert idx == {"IMG_1234.jpg": 1521839641}


def test_parses_multi_photo_sidecar(tmp_facebook_dir: Path) -> None:
    posts = tmp_facebook_dir / "your_facebook_activity" / "posts"
    posts.mkdir(parents=True)
    shutil.copy(FIXTURES_DIR / "sidecar_multi_photo.json", posts / "your_posts_1.json")

    idx = load_sidecar_index(tmp_facebook_dir)
    assert idx == {
        "photo_a.jpg": 1600000000,
        "photo_b.jpg": 1600000100,
        "photo_c.jpg": 1800000000,
    }


def test_parses_multiple_json_files(tmp_facebook_dir: Path) -> None:
    posts = tmp_facebook_dir / "your_facebook_activity" / "posts"
    posts.mkdir(parents=True)
    shutil.copy(FIXTURES_DIR / "sidecar_minimal.json", posts / "your_posts_1.json")
    shutil.copy(FIXTURES_DIR / "sidecar_multi_photo.json", posts / "your_posts_2.json")

    idx = load_sidecar_index(tmp_facebook_dir)
    assert "IMG_1234.jpg" in idx
    assert "photo_a.jpg" in idx
    assert "photo_b.jpg" in idx
    assert "photo_c.jpg" in idx
    assert len(idx) == 4


def test_tolerates_post_without_attachments(tmp_facebook_dir: Path) -> None:
    """Posts can have just a title, no attachments. Must not crash."""
    posts = tmp_facebook_dir / "your_facebook_activity" / "posts"
    posts.mkdir(parents=True)
    (posts / "your_posts_1.json").write_text(
        json.dumps([{"timestamp": 1000, "title": "text only"}])
    )
    # Should not raise
    idx = load_sidecar_index(tmp_facebook_dir)
    assert idx == {}


def test_tolerates_malformed_json(tmp_facebook_dir: Path) -> None:
    """A bad JSON file should be skipped, not crash the whole load."""
    posts = tmp_facebook_dir / "your_facebook_activity" / "posts"
    posts.mkdir(parents=True)
    (posts / "broken.json").write_text("{ this is not valid json ")
    shutil.copy(FIXTURES_DIR / "sidecar_minimal.json", posts / "good.json")

    idx = load_sidecar_index(tmp_facebook_dir)
    # The good file's entry must still load
    assert "IMG_1234.jpg" in idx


def test_uses_basename_not_relative_path_as_key(tmp_facebook_dir: Path) -> None:
    posts = tmp_facebook_dir / "your_facebook_activity" / "posts"
    posts.mkdir(parents=True)
    shutil.copy(FIXTURES_DIR / "sidecar_minimal.json", posts / "your_posts_1.json")

    idx = load_sidecar_index(tmp_facebook_dir)
    # Must be 'IMG_1234.jpg', NOT 'your_facebook_activity/posts/media/IMG_1234.jpg'
    assert "IMG_1234.jpg" in idx
    assert "your_facebook_activity/posts/media/IMG_1234.jpg" not in idx


def test_tolerates_media_entry_without_creation_timestamp(tmp_facebook_dir: Path) -> None:
    posts = tmp_facebook_dir / "your_facebook_activity" / "posts"
    posts.mkdir(parents=True)
    (posts / "your_posts_1.json").write_text(
        json.dumps([{
            "timestamp": 1000,
            "attachments": [{
                "data": [{
                    "media": {"uri": "your_facebook_activity/posts/media/notime.jpg"}
                }]
            }]
        }])
    )
    idx = load_sidecar_index(tmp_facebook_dir)
    assert idx == {}
