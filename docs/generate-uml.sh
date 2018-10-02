#!/usr/bin/env bash
set -e
for dead_png_file in *.png; do
  echo "Removed $(rm -v "${dead_png_file}")"
done
plantuml *.txt
ls *.png
