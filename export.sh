#!/bin/bash -e

ADDR=${ADDR:-'http://localhost:3000'}
DEST=${DEST:-'docs'}
PAGES_DIR=${PAGES_DIR:-'pages'}

echo "starting server..."
npm run build
npm start 2>&1 > /dev/null &

echo "downloading static assets..."
wget --html-extension \
     --recursive \
     --convert-links \
     --page-requisites \
     --no-parent \
     --directory-prefix "$DEST" \
     --no-host-directories \
     --restrict-file-names=unix \
     --quiet \
     --retry-connrefused \
     --waitretry 2 \
     --tries 5 \
     -i <(find "$PAGES_DIR" -type f | \
                 sed "s:^$PAGES_DIR\(.*\)\.js\$:\1:g" | \
                 sed 's:/index$:/:g' | \
                 sed "s,\(.*\),$ADDR\1,g")

echo "closing server..."
pkill -INT -g $$ node
wait

echo "done"