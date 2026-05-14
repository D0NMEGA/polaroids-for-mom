"""End-to-end test: ingest the real Drive/ folder and verify all 12 photos land in DB.

This test is the proof of INGEST-01 against the actual source data Donovan has
today (12 files in /Users/donmega/Desktop/mothersday/Drive/). If the Drive/
folder is missing (other dev machine, CI sandbox), the tests skip gracefully.

The 12 real files are all byte-distinct (verified via `shasum -a 256 Drive/*`),
so the inserted count is exactly 12 -- not "1 to 12".
"""
from __future__ import annotations

from pathlib import Path

import pytest
from typer.testing import CliRunner

from polaroids.cli import app
from polaroids.config import DRIVE_DIR
from polaroids.core.db import count_photos, get_connection, init_db
from polaroids.core.ingest_core import ingest_directory

runner = CliRunner()


# The Drive/ folder is committed to the repo root. On any checkout where it's
# absent (CI sandbox without the photos), skip these tests rather than fail.
drive_present = pytest.mark.skipif(
    not DRIVE_DIR.exists(),
    reason=f"Real Drive/ folder absent at {DRIVE_DIR}; e2e test skipped.",
)


@drive_present
def test_ingest_real_drive_folder_inserts_all_12_unique(tmp_path: Path) -> None:
    """Ingest the real Drive/ folder into a fresh DB.

    Drive/ has EXACTLY 12 byte-distinct image files. Expected result:
      total_walked == 12, inserted == 12, skipped == 0, failed == 0.
    """
    db = tmp_path / "state.sqlite"
    init_db(db)
    result = ingest_directory(DRIVE_DIR, source="drive", db_path=db)

    # The walker sees all 12 image files (no dotfiles, all jpg/JPG)
    assert result.total_walked == 12, f"walker saw {result.total_walked} files (expected 12)"
    # No file should fail to read
    assert result.failed == 0, f"failed={result.failed} (expected 0)"
    # All 12 are byte-distinct, so all 12 should insert as new rows
    assert result.inserted == 12, f"inserted={result.inserted} (expected 12)"
    assert result.skipped == 0, f"skipped={result.skipped} (expected 0)"
    # And inserted + skipped == total_walked (invariant)
    assert result.inserted + result.skipped == result.total_walked


@drive_present
def test_ingest_real_drive_folder_is_idempotent(tmp_path: Path) -> None:
    """Re-running ingest against the real Drive/ folder is a no-op (INGEST-04)."""
    db = tmp_path / "state.sqlite"
    init_db(db)

    first = ingest_directory(DRIVE_DIR, source="drive", db_path=db)
    n_after_first = count_photos(db)

    second = ingest_directory(DRIVE_DIR, source="drive", db_path=db)
    n_after_second = count_photos(db)

    # Second run inserts nothing, skips everything
    assert second.inserted == 0
    assert second.skipped == 12
    # Row count is unchanged across the two runs
    assert n_after_first == n_after_second == 12


@drive_present
def test_ingest_real_drive_folder_rows_have_drive_source(tmp_path: Path) -> None:
    """Every row from a drive ingest has source='drive'."""
    db = tmp_path / "state.sqlite"
    init_db(db)
    ingest_directory(DRIVE_DIR, source="drive", db_path=db)

    with get_connection(db) as conn:
        sources = {row["source"] for row in conn.execute("SELECT source FROM photos")}
    assert sources == {"drive"}


@drive_present
def test_ingest_real_drive_folder_handles_problem_filenames(tmp_path: Path) -> None:
    """Real Drive/ has '058 - Copy - Copy - Copy.JPG' and 'l_*.jpg.jpg'.

    Both must ingest without raising; both must end up as rows.
    """
    db = tmp_path / "state.sqlite"
    init_db(db)
    ingest_directory(DRIVE_DIR, source="drive", db_path=db)

    with get_connection(db) as conn:
        paths = [
            row["source_path"]
            for row in conn.execute("SELECT source_path FROM photos")
        ]
    path_str = " ".join(paths)
    assert "058 - Copy - Copy - Copy.JPG" in path_str
    assert "l_0cea8969b90b24dd50038a663dd99835.jpg.jpg" in path_str


@drive_present
def test_polaroids_ingest_cli_against_real_drive(
    tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    """End-to-end: `polaroids ingest --no-facebook` runs cleanly on real Drive/.

    Monkey-patches both `init_db` and `ingest_directory` inside the command
    module so the CLI hits a tmp DB rather than the real state.sqlite.
    """
    tmp_db = tmp_path / "state.sqlite"

    import polaroids.commands.ingest as cmd_mod
    from polaroids.core import db as db_mod

    # Patch init_db -> direct to tmp_db
    monkeypatch.setattr(cmd_mod, "init_db", lambda: db_mod.init_db(tmp_db))

    # Patch ingest_directory -> always pass db_path=tmp_db
    orig_ingest = cmd_mod.ingest_directory

    def patched(root, source, db_path=None):
        return orig_ingest(root, source, db_path=tmp_db)

    monkeypatch.setattr(cmd_mod, "ingest_directory", patched)

    result = runner.invoke(app, ["ingest", "--no-facebook", "--no-applephotos"])
    assert result.exit_code == 0, f"CLI failed: {result.stdout}\n{result.exception}"
    assert "drive:" in result.stdout
    assert "inserted=" in result.stdout
    assert "walked=12" in result.stdout
    # Drive/ has exactly 12 byte-distinct files -- count must be 12, not "≥1".
    assert count_photos(tmp_db) == 12
