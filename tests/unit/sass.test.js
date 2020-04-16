import path from 'path'
import sassTrue from 'sass-true'

const sassFile = path.join(__dirname, 'setup_tests.scss')
sassTrue.runSass({ file: sassFile }, { describe, it })
