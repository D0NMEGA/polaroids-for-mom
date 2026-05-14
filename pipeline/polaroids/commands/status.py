"""`polaroids status` -- report counts per stage of the pipeline.

Reads state.sqlite and emits per-stage counts (total ingested, filter
bucket breakdown, captioned, compressed, bundled). This satisfies INGEST-05.

Schema dependencies (created by core/db.py in this same plan):
    photos(hash, source_path, source, original_ext, canonical_jpg_path,
           creation_timestamp, bytes, ingested_at,
           filter_confidence, filter_bucket, caption_text,
           compressed_path, bundle_status)
"""
from __future__ import annotations

import sqlite3

import typer

from polaroids import config
from polaroids.core import db


def run() -> None:
    """Entry point invoked by `polaroids status`."""
    if not config.STATE_SQLITE.exists():
        typer.echo("polaroids status: no state.sqlite yet — run `polaroids ingest` first.")
        return

    conn = db.connect(config.STATE_SQLITE)
    try:
        total = _count(conn, "SELECT COUNT(*) FROM photos")
        drive_count = _count(conn, "SELECT COUNT(*) FROM photos WHERE source = 'drive'")
        fb_count = _count(conn, "SELECT COUNT(*) FROM photos WHERE source = 'facebook'")
        apple_count = _count(conn, "SELECT COUNT(*) FROM photos WHERE source = 'applephotos'")
        included = _count(conn, "SELECT COUNT(*) FROM photos WHERE filter_bucket = 'included'")
        borderline = _count(conn, "SELECT COUNT(*) FROM photos WHERE filter_bucket = 'borderline'")
        excluded = _count(conn, "SELECT COUNT(*) FROM photos WHERE filter_bucket = 'excluded'")
        unfiltered = _count(conn, "SELECT COUNT(*) FROM photos WHERE filter_bucket IS NULL")
        captioned = _count(conn, "SELECT COUNT(*) FROM photos WHERE caption_text IS NOT NULL AND caption_text != ''")
        compressed = _count(conn, "SELECT COUNT(*) FROM photos WHERE compressed_path IS NOT NULL")
        bundled = _count(conn, "SELECT COUNT(*) FROM photos WHERE bundle_status = 'bundled'")
    finally:
        conn.close()

    typer.echo(f"Ingested:    {total}  (drive: {drive_count}, facebook: {fb_count}, applephotos: {apple_count})")
    typer.echo(f"Filtered:    included {included} | borderline {borderline} | excluded {excluded} | unfiltered {unfiltered}")
    typer.echo(f"Captioned:   {captioned}")
    typer.echo(f"Compressed:  {compressed}")
    typer.echo(f"Bundled:     {bundled}")


def _count(conn: sqlite3.Connection, sql: str) -> int:
    row = conn.execute(sql).fetchone()
    return int(row[0]) if row else 0
