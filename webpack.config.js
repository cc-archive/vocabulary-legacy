const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    fonts: './src/index.js',
    accidenz_commons: './src/scripts/accidenz_commons.js',
    roboto_condensed: './src/scripts/roboto_condensed.js',
    source_sans_pro: './src/scripts/source_sans_pro.js',
    vocabulary_icons: './src/scripts/vocabulary_icons.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(otf|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../fonts',
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new CopyPlugin([
      { from: 'src/styles', to: 'scss' },
      { from: 'src/fonts', to: 'fonts' },
      { from: 'src/assets', to: 'assets' }
    ])
  ]
}
