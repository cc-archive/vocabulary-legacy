const path = require('path')

const packageConfig = require('../package.json')

const verboseName = packageConfig.verboseName

const rootDir = path.resolve(__dirname, '..')

const srcDir = path.resolve(rootDir, 'src')
const distDir = path.resolve(rootDir, 'dist')
const libraryDir = path.resolve(rootDir, 'library')

const metafilesDir = path.resolve(libraryDir, 'metafiles')
const tokensDir = path.resolve(srcDir, 'assets', 'tokens')
const stylesDir = path.resolve(srcDir, 'styles')

const libraryStencilPath = path.join(libraryDir, 'index-stencil.txt')
const srcIndexPath = path.join(srcDir, 'index.js')

module.exports = {
  verboseName,
  rootDir,
  srcDir,
  distDir,
  libraryDir,
  metafilesDir,
  stylesDir,
  tokensDir,
  libraryStencilPath,
  srcIndexPath
}
