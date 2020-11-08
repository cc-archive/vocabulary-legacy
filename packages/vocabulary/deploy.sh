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
sed -i -e 's/say, fonts/here, vocabulary/' -e 's/cd packages\/fonts/cd packages\/vocabulary/' dist/README.md
cp LICENSE dist/

cd dist
npm publish --access public
