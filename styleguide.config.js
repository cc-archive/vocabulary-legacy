const packageConfig = require('./package.json')

module.exports = {
  title: packageConfig.verboseName,
  version: packageConfig.version,

  components: 'src/**/[A-Z]*.vue'
}
