const path = require('path')

const verboseName = 'Vue Vocabulary'

const rootDir = path.resolve(__dirname, '..')

const srcDir = path.resolve(rootDir, 'src')
const libraryDir = path.resolve(rootDir, 'library')

const libraryStencilPath = path.join(libraryDir, 'index-stencil.txt')
const srcIndexPath = path.join(srcDir, 'index.js')

module.exports = {
  verboseName,
  libraryStencilPath,
  srcDir,
  srcIndexPath
}
