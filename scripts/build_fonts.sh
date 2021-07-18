#!/usr/bin/env bash

# Run build
vue-cli-service build --target lib --name fonts --dest ./dist/fonts --entry ./src/fonts.js

echo -n "Copying meta files..."
cp README.md dist/fonts
cp LICENSE dist/fonts
cp packages/fonts.json dist/fonts/package.json
echo "done!"

echo -n "Removing superfluous files..."
rm -rf dist/fonts/*.js dist/fonts/*.map dist/fonts/*.html
echo "done!"
