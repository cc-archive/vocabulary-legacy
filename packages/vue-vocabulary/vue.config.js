let publicPath

if (process.env.NODE_ENV === 'production') {
  publicPath = process.env.PUBLIC_PATH || '/vue-vocabulary'
} else {
  publicPath = '/'
}

module.exports = {
  lintOnSave: false,
  publicPath: publicPath,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    config.module
      .rule('eslint')
      .exclude
      .add(/storybook\/generated-entry\.js/)
  }
}
