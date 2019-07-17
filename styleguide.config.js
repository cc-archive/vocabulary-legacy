const path = require('path')
const packageConfig = require('./package.json')

module.exports = {
  title: packageConfig.verboseName,
  version: 'latest',

  components: 'src/**/[A-Z]*.vue',
  skipComponentsWithoutExample: true,

  defaultExample: false,
  pagePerSection: true,
  usageMode: 'expand',
  getComponentPathLine: function (componentPath) {
    const name = path.basename(componentPath, '.vue')
    return `import { ${name} } from '@creativecommons/vocabulary'`
  },

  assetsDir: 'src/assets/',
  styleguideDir: 'docs', // For easy push to GitHub Pages

  theme: {
    color: {
      linkHover: '#fb7928',
      name: '#01a635',
      type: '#7b1b53'
    },
    fontFamily: {
      base: ['"Source Sans Pro"', '"Noto Sans"', 'Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
      monospace: ['"Fira Code"', 'Consolas', '"Liberation Mono"', 'Menlo', 'monospace']
    },
    borderRadius: 0,
    sidebarWidth: 256,
    maxWidth: '100%'
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
  editorConfig: {
    theme: 'material',
    lineNumbers: true
  },

  require: [
    path.join(__dirname, 'src/icons.js'),
    path.join(__dirname, 'styleguidist/i18n.js'),
    path.join(__dirname, 'styleguidist/script.js'),
    path.join(__dirname, 'styleguidist/style.styl')
  ],
  template: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover'
        }
      ],
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
      name: 'Layouts',
      content: 'src/layouts/SECTION.md',
      sectionDepth: 1,
      components: 'src/layouts/[A-Z]*/[A-Z]*.vue'
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
  ]
}
