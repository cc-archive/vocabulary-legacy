const util = require('util')

const sass = require('node-sass')

const sassRender = util.promisify(sass.render)

module.exports.render = (options) => {
  return sassRender({
    includePaths: ['./src/styles/fonts/'],
    outputStyle: 'compact',
    ...options
  })
}
