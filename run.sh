#!/usr/bin/env bash
python build_index.py
open "http://127.0.0.1:8000/" -a "Google Chrome"
python -m SimpleHTTPServer


