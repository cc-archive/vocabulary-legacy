import { create } from '@storybook/theming'

export default create({
  // Inherit
  base: 'light',

  // Color scheme
  colorPrimary: 'rgb(0, 0, 0)', // No known usage
  colorSecondary: 'rgb(251, 119, 41)', // Accent color

  // UI colors
  appBg: 'rgb(248, 249, 250)',

  // Rows of controls
  barTextColor: 'rgb(73, 80, 87)',
  barSelectedColor: 'rgb(251, 119, 41)',
  barBg: 'rgb(255, 255, 255)',

  // Typography
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: '"Fira Code", monospace',

  // Text colors
  textColor: 'rgb(0, 0, 0)',
  textInverseColor: 'rgb(255, 255, 255)',

  // Branding
  brandTitle: 'Vue Vocabulary',
  brandUrl: 'https://opensource.creativecommons.org/cc-vue-vocabulary',
  brandImage: 'https://raw.githubusercontent.com/creativecommons/vue-vocabulary/master/readme_assets/vocabulary_logo.svg?sanitize=true'
})
