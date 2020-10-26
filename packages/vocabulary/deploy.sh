#!/bin/bash

set -o errexit
set -o errtrace
set -o nounset

trap '_es=${?};
    _lo=${LINENO};
    _co=${BASH_COMMAND};
    echo "${0}: line ${_lo}: \"${_co}\" exited with a status of ${_es}";
    exit ${_es}' ERR

npm run build
cp package.json dist/
cp ../../README.md dist/
cp LICENSE dist/

cd dist
npm publish --access public
sed  -e '/say/s/fonts/vocabulary/' Readme.md and  sed -e '/cd/s/fonts/vocabulary/' Readme.md
