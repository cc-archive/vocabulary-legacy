#!/usr/bin/env bash

# Run build
./node_modules/.bin/vue-cli-service build --target lib --name vue-vocabulary --dest ./dist/vue-vocabulary --entry ./src/vue_vocabulary.js

echo -n "Copying meta files..."
cp README.md dist/vue-vocabulary
cp LICENSE dist/vue-vocabulary
cp packages/vue-vocabulary/package.json dist/vue-vocabulary/package.json
echo "done!"

echo -n "Removing superfluous files..."
rm -rf dist/vue-vocabulary/*.html
echo "done!"
