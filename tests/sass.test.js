const path = require('path')
const sassTrue = require('sass-true')

const sassFile = path.join(__dirname, 'tests.scss')
sassTrue.runSass({ file: sassFile }, { describe, it });
