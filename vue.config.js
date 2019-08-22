module.exports = {
  publicPath: '/cc-vocabulary/',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  chainWebpack: config => {
    // Embed SVGs using data URLs
    config.module
      .rule('svg').uses.clear()

    config.module
      .rule('svg')
      .use('url-loader')
      .loader('url-loader')
  }
}
