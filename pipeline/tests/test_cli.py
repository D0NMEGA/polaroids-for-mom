"""Tests for the Typer CLI surface -- subcommands registered, stubs raise."""
from __future__ import annotations

from pathlib import Path

import pytest
from typer.testing import CliRunner

from polaroids.cli import app


runner = CliRunner()


def test_app_help_lists_ingest_and_status() -> None:
    """`polaroids --help` lists both subcommands."""
    result = runner.invoke(app, ["--help"])
    assert result.exit_code == 0
    assert "ingest" in result.stdout
    assert "status" in result.stdout


def test_ingest_help_exits_zero() -> None:
    """`polaroids ingest --help` exits 0."""
    result = runner.invoke(app, ["ingest", "--help"])
    assert result.exit_code == 0


def test_status_help_exits_zero() -> None:
    """`polaroids status --help` exits 0."""
    result = runner.invoke(app, ["status", "--help"])
    assert result.exit_code == 0


def test_ingest_runs_successfully(tmp_path: Path, monkeypatch) -> None:
    """The Plan 02 ingest implementation exits 0 and prints per-source summary.

    Replaces the Plan 01 stub test (which asserted NotImplementedError).
    Monkeypatches init_db + ingest_directory inside the command module so the
    CLI hits a tmp DB instead of the real state.sqlite.
    """
    tmp_db = tmp_path / "state.sqlite"

    import polaroids.commands.ingest as cmd_mod
    from polaroids.core import db as db_mod

    monkeypatch.setattr(cmd_mod, "init_db", lambda: db_mod.init_db(tmp_db))

    orig_ingest = cmd_mod.ingest_directory

    def patched(root, source, db_path=None):
        return orig_ingest(root, source, db_path=tmp_db)

    monkeypatch.setattr(cmd_mod, "ingest_directory", patched)

    # Disable both sources so the test doesn't depend on Drive/ or facebook/ being present
    result = runner.invoke(app, ["ingest", "--no-drive", "--no-facebook"])
    assert result.exit_code == 0, f"CLI failed: {result.stdout}\n{result.exception}"


def test_status_runs_on_empty_state(tmp_path: Path, monkeypatch) -> None:
    """`polaroids status` exits 0 with a hint when state.sqlite does not exist."""
    monkeypatch.setattr("polaroids.config.STATE_SQLITE", tmp_path / "missing.sqlite")
    result = runner.invoke(app, ["status"])
    assert result.exit_code == 0
    assert "no state.sqlite yet" in result.stdout


def test_status_reports_counts_on_seeded_db(tmp_path: Path, monkeypatch) -> None:
    """`polaroids status` reports zero counts on a freshly-migrated empty DB."""
    sqlite_path = tmp_path / "state.sqlite"
    monkeypatch.setattr("polaroids.config.STATE_SQLITE", sqlite_path)
    # Migrate schema (creates the photos table with all forward-compat columns)
    from polaroids.core import db
    conn = db.connect(sqlite_path)
    db.migrate(conn)
    conn.close()

    result = runner.invoke(app, ["status"])
    assert result.exit_code == 0
    assert "Ingested:    0" in result.stdout
    assert "Filtered:" in result.stdout
    assert "Captioned:   0" in result.stdout
    assert "Compressed:  0" in result.stdout
    assert "Bundled:     0" in result.stdout
