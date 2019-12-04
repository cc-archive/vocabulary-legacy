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
    // Embed SVGs using data URLs
    config.module
      .rule('svg')
      .uses
      .clear()

    config.module
      .rule('svg')
      .use('url-loader')
      .loader('url-loader')

    config.module
      .rule('story')
      .test(/\.stories\.jsx?$/)
      .use('source-loader')
      .loader('@storybook/source-loader')
  }
}
