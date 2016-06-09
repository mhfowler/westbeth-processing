#!/usr/bin/env bash
python build_index.py
git add -A
git commit -m "index commit"
git push origin master:gh-pages
