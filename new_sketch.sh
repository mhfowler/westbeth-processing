#!/usr/bin/env bash
PROJECT_PATH=$( cd $(dirname $0) ; pwd -P )

if [ "$#" -ne 1 ]; then
   read -p "sketch name:" SNAME
else
   SNAME=$1
fi


mkdir $PROJECT_PATH/sketches/$SNAME
SKETCH_PATH=$PROJECT_PATH/sketches/$SNAME
cp $PROJECT_PATH/sketches/template/template.html $SKETCH_PATH/$SNAME.html
cp $PROJECT_PATH/sketches/template/sketch.js $SKETCH_PATH/sketch.js

echo "created new sketch in $SKETCH_PATH"