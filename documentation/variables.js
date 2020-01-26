const path = require('path')

const packageConfig = require('../package.json')

const verboseName = packageConfig.verboseName

const rootDir = path.resolve(__dirname, '..')

const srcDir = path.resolve(rootDir, 'src')
const docsDir = path.resolve(rootDir, 'docs')
const storybookDir = path.resolve(docsDir, 'storybook')

module.exports = {
  verboseName,
  srcDir,
  docsDir,
  storybookDir
}
