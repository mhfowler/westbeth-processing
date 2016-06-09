#!/usr/bin/env bash
shopt -s expand_aliases
. ~/.bash_profile

vir westbeth

python build_index.py
git add -A
git commit -m "index commit"
git push origin master:gh-pages
