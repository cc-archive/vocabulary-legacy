import path from 'path'
import sassTrue from 'sass-true'

function importer (url, prev, done) {
  if (url.indexOf('bulma') >= 0) {
    url = path.resolve('node_modules', url)
  }

  return { file: url }
}

const sassFile = path.join(__dirname, 'setup_tests.scss')
sassTrue.runSass({ importer, file: sassFile }, { describe, it })
