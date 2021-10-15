#!/usr/bin/env bash

# Run build
./node_modules/.bin/vue-cli-service build --target lib --name vocabulary --dest ./dist/vocabulary --entry ./src/vocabulary.js

echo -n "Copying meta files..."
cp README.md dist/vocabulary
cp LICENSE dist/vocabulary
cp packages/vocabulary/package.json dist/vocabulary/package.json
echo "done!"

echo -n "Removing superfluous files..."
rm -rf dist/vocabulary/*.js dist/vocabulary/*.map dist/vocabulary/*.html
echo "done!"
