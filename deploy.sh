#!/bin/bash

npm run build;
cp package.json dist/;

cd dist
npm publish --access public;


