let publicPath

if (process.env.NODE_ENV === 'production') {
  publicPath = process.env.PUBLIC_PATH || '/vue-vocabulary'
} else {
  publicPath = '/'
}

module.exports = {
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
    config.module
      .rule('eslint')
      .exclude
      .add(/storybook\/generated-entry\.js/)
  }
}
