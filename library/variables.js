const path = require('path')

const packageConfig = require('../package.json')

const packageScope = 'creativecommons'
const packageName = 'vocabulary'
const verboseName = packageConfig.verboseName

const rootDir = path.resolve(__dirname, '..')

const srcDir = path.resolve(rootDir, 'src')
const distDir = path.resolve(rootDir, 'dist')
const libraryDir = path.resolve(rootDir, 'library')

const destDir = path.resolve(distDir, `${packageScope}-${packageName}`)
const metafilesDir = path.resolve(libraryDir, 'metafiles')
const tokensDir = path.resolve(srcDir, 'assets', 'tokens')
const stylesDir = path.resolve(srcDir, 'styles')

const srcIndexPath = path.join(srcDir, 'index.js')

module.exports = {
  verboseName,
  distDir,
  srcDir,
  libraryDir,
  destDir,
  metafilesDir,
  stylesDir,
  tokensDir,
  srcIndexPath
}
