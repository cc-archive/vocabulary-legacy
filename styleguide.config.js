const path = require('path')
const capitalize = require('lodash/capitalize')

let viewportMeta = [
  'width=device-width',
  'initial-scale=1.0',
  'user-scalable=no',
  'viewport-fit=cover'
].join(', ')
let titleMeta = 'vo·cab·u·lar·y'
let urlMeta = 'https://creativecommons.github.io/cc-vocabulary/'
let descriptionMeta = 'A cohesive design system to unite the web facing Creative Commons'
let imageMeta = `${urlMeta}titlecard.png`

let rootCss = 'https://unpkg.com/@creativecommons/vocabulary/css/root.css'

let families = [
  'tokens',
  'utils',
  'elements',
  'layouts',
  'patterns',
  'templates'
]
let regularFonts = [
  '"Source Sans Pro"',
  '"Noto Sans"',
  'Arial',
  '"Helvetica Neue"',
  'Helvetica',
  'sans-serif'
]
let monospaceFonts = [
  '"Fira Code"',
  'Consolas',
  '"Liberation Mono"',
  'Menlo',
  'monospace'
]

module.exports = {
  // Text
  title: 'vo·cab·u·lar·y',
  version: 'latest',

  // Directory structure
  assetsDir: 'src/assets/',
  styleguideDir: 'docs/styleguide/',

  // Customisation
  theme: {
    color: {
      linkHover: '#000000',

      // This is painful manual effort
      // Copied from CodeMirror Material theme
      // https://codemirror.net/theme/material.css
      codeBackground: '#263238',
      codeBase: 'rgb(233, 237, 237)',
      codeComment: '#546E7A',
      codePunctuation: 'rgb(233, 237, 237)',
      codeProperty: '#80CBAE',
      codeString: '#C3E88D',
      codeOperator: 'rgb(233, 237, 237)',
      codeKeyword: 'rgb(199, 146, 234)',
      codeVariable: '#82B1FF'
    },
    fontFamily: {
      base: regularFonts,
      monospace: monospaceFonts
    },
    borderRadius: 0,
    sidebarWidth: 256,
    maxWidth: '100%'
  },
  styles: {
    StyleGuide: {
      '@global html': { // Copied from root.css
        fontFamily: regularFonts,
        fontSize: 16,
        lineHeight: 1.2
      }
    }
  },
  editorConfig: {
    theme: 'material',
    lineNumbers: true
  },

  // Additional dependencies
  require: [
    path.join(__dirname, 'src/icons.js'),
    path.join(__dirname, 'styleguidist/i18n.js'),
    path.join(__dirname, 'styleguidist/script.js'),
    path.join(__dirname, 'styleguidist/style.styl')
  ],
  template: {
    head: {
      meta: [
        { name: 'viewport', content: viewportMeta },
        // Open Graph
        { property: 'og:title', content: titleMeta },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: urlMeta },
        { property: 'og:description', content: descriptionMeta },
        { property: 'og:image', content: imageMeta },
        // Twitter
        { name: 'twitter:title', content: titleMeta },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: descriptionMeta },
        { name: 'twitter:image', content: imageMeta }
      ],
      links: [
        { rel: 'stylesheet', href: rootCss },
        { rel: 'icon', href: 'icons/favicon.png' }
      ]
    }
  },

  // Replaced components
  getComponentPathLine: function (componentPath) {
    const name = path.basename(componentPath, '.vue')
    return `import { ${name} } from '@creativecommons/vocabulary'`
  },
  renderRootJsx: path.join(
    __dirname,
    'styleguidist/components/styleguide.root.js'
  ),

  // Organisation
  defaultExample: false,
  pagePerSection: true,

  // Contents
  components: 'src/**/[A-Z]*.vue',
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Vocabulary',
      content: 'README.md',
      sectionDepth: 1,
      sections: [
        {
          name: 'Code style',
          content: 'documentation/metafiles/README.md',
          sectionDepth: 1
        },
        {
          name: 'User guide',
          content: 'library/metafiles/README.md',
          sectionDepth: 1
        }
      ]
    },
    ...families.map(family => ({
      name: capitalize(family),
      content: `src/${family}/README.md`,
      sectionDepth: 1,
      components: `src/${family}/[A-Z]*/[A-Z]*.vue`
    }))
  ]
}
