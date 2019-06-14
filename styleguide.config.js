const path = require('path')
const packageConfig = require('./package.json')

module.exports = {
  title: packageConfig.verboseName,
  version: packageConfig.version,

  components: 'src/**/[A-Z]*.vue',
  skipComponentsWithoutExample: true,

  defaultExample: false,
  pagePerSection: true,

  assetsDir: 'src/assets/',
  styleguideDir: 'docs', // For easy push to GitHub Pages

  theme: {
    sidebarWidth: 256,
    maxWidth: '100%',
    fontFamily: {
      monospace: ['"Fira Code"', 'Consolas', '"Liberation Mono"', 'Menlo', 'monospace']
    }
  },
  styles: {
    StyleGuide: {
      '@global html': {
        fontFamily: ['"Source Sans Pro"', '"Noto Sans"', 'Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
        fontSize: 16,
        lineHeight: 1.2
      }
    }
  },

  require: [
    path.join(__dirname, 'src/icons.js'),
    path.join(__dirname, 'styleguidist/i18n.js'),
    path.join(__dirname, 'styleguidist/style.styl')
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Source+Sans+Pro:300,400,700&display=swap'
        },
        {
          rel: 'icon',
          href: 'icons/favicon.png'
        }
      ]
    }
  },
  renderRootJsx: path.join(__dirname, 'styleguidist/styleguide.root.js'),

  sections: [
    {
      name: 'Tokens',
      content: 'src/tokens/SECTION.md',
      sectionDepth: 1,
      components: 'src/tokens/[A-Z]*/[A-Z]*.vue'
    },
    {
      name: 'Elements',
      content: 'src/elements/SECTION.md',
      sectionDepth: 1,
      components: 'src/elements/[A-Z]*/[A-Z]*.vue'
    },
    {
      name: 'Patterns',
      content: 'src/patterns/SECTION.md',
      sectionDepth: 1,
      components: 'src/patterns/[A-Z]*/[A-Z]*.vue'
    },
    {
      name: 'Templates',
      content: 'src/templates/SECTION.md',
      sectionDepth: 1,
      components: 'src/templates/[A-Z]*/[A-Z]*.vue'
    }
  ],

  ribbon: {
    text: 'Contribute',
    url: 'https://github.com/creativecommons/cc-vocabulary'
  }
}
