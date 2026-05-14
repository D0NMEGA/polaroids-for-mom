"""`polaroids ingest` -- walk Drive/ + facebook/ + applephotos/, hash, insert into state.sqlite.

Plan 02-01 shipped this as a NotImplementedError stub.
Plan 02-02 wired the real walker + hasher + DB writer for Drive/ + facebook/.
Post-Phase-2 patch: applephotos/ added as a third source (curated Apple Photos exports).
"""
from __future__ import annotations

import typer

from polaroids.config import APPLEPHOTOS_DIR, DRIVE_DIR, FACEBOOK_DIR
from polaroids.core.db import init_db
from polaroids.core.ingest_core import ingest_directory


def run(
    drive: bool = typer.Option(
        True,
        "--drive/--no-drive",
        help="Ingest the Drive/ folder (default: yes).",
    ),
    facebook: bool = typer.Option(
        True,
        "--facebook/--no-facebook",
        help="Ingest the facebook/ folder (default: yes).",
    ),
    applephotos: bool = typer.Option(
        True,
        "--applephotos/--no-applephotos",
        help="Ingest the applephotos/ folder (default: yes).",
    ),
) -> None:
    """Walk source directories, hash each photo, insert into state.sqlite.

    Each source is optional -- the command runs whichever of
    Drive/ + facebook/ + applephotos/ are present. A missing source
    is reported as SKIPPED, not an error.
    """
    # Schema is idempotent; call every run so a fresh checkout works.
    init_db()

    if drive:
        if not DRIVE_DIR.exists():
            typer.echo(f"drive:       SKIPPED (directory not found: {DRIVE_DIR})")
        else:
            result = ingest_directory(DRIVE_DIR, source="drive")
            typer.echo(
                f"drive:       inserted={result.inserted} skipped={result.skipped} "
                f"failed={result.failed} walked={result.total_walked}"
            )

    if facebook:
        if not FACEBOOK_DIR.exists():
            typer.echo(f"facebook:    SKIPPED (directory not found: {FACEBOOK_DIR})")
        else:
            result = ingest_directory(FACEBOOK_DIR, source="facebook")
            typer.echo(
                f"facebook:    inserted={result.inserted} skipped={result.skipped} "
                f"failed={result.failed} walked={result.total_walked}"
            )

    if applephotos:
        if not APPLEPHOTOS_DIR.exists():
            typer.echo(f"applephotos: SKIPPED (directory not found: {APPLEPHOTOS_DIR})")
        else:
            result = ingest_directory(APPLEPHOTOS_DIR, source="applephotos")
            typer.echo(
                f"applephotos: inserted={result.inserted} skipped={result.skipped} "
                f"failed={result.failed} walked={result.total_walked}"
            )
