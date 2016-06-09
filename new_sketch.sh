#!/usr/bin/env bash
shopt -s expand_aliases
. ~/.bash_profile

vir westbeth

echo "sketch name: "
read -p "sketch name:" sname
python new_sketch.py $sname