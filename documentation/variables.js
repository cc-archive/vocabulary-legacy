const path = require('path')

const packageConfig = require('../package.json')

const verboseName = packageConfig.verboseName

const rootDir = path.resolve(__dirname, '..')

let srcDir = path.resolve(rootDir, 'src')
let docsDir = path.resolve(rootDir, 'docs')
let storybookDir = path.resolve(docsDir, 'storybook')

const sanitizePath = (path) => {
  if(process.platform != 'win32'){
    let tokens = path.split("/")
    tokens = tokens.map(token => token.replace(/(\s+)/g, '\\$1'))
    return tokens.join("/")
  }
  else{
    return path
  }
}

srcDir = sanitizePath(srcDir)
docsDir = sanitizePath(docsDir)
storybookDir = sanitizePath(storybookDir)

module.exports = {
  verboseName,
  srcDir,
  docsDir,
  storybookDir
}
