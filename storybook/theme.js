import { create } from '@storybook/theming'

export default create({
  // Inherit
  base: 'light',

  // Color scheme
  colorPrimary: '#000000', // No known usage
  colorSecondary: '#121513',

  // UI colors
  appBg: '#f6f6f7',

  barTextColor: '#393839',
  barSelectedColor: '#000000',
  barBg: '#ffffff',

  // Typography
  fontBase: '"Source Sans Pro"',
  fontCode: '"Fira Code"',

  // Text colors
  textColor: 'black',
  textInverseColor: 'white',

  // Branding
  brandTitle: 'Vocabulary',
  brandUrl: 'https://creativecommons.github.io/cc-vocabulary',
  brandImage: 'https://raw.githubusercontent.com/creativecommons/cc-vocabulary/master/readme_assets/vocabulary_logo.svg?sanitize=true'
})
