"""Typer CLI entry point.

Subcommands are registered via Typer.command. Each lives in its own
module under polaroids.commands so cli.py stays a thin wiring layer.
"""
from __future__ import annotations

import typer

from polaroids.commands import ingest as ingest_cmd
from polaroids.commands import status as status_cmd

app = typer.Typer(
    name="polaroids",
    help="Polaroids for Mom -- build pipeline (ingest, filter, caption, bundle).",
    no_args_is_help=True,
    add_completion=False,
)

app.command(name="ingest", help="Walk Drive/ and facebook/, hash bytes, populate state.sqlite.")(
    ingest_cmd.run
)
app.command(name="status", help="Report counts: ingested, filtered, captioned, compressed, bundled.")(
    status_cmd.run
)
