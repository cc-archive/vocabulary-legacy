import { create } from '@storybook/theming'

import tokens from '@creativecommons/vocabulary/tokens/tokens.raw'

export default create({
  // Inherit
  base: 'light',

  // Color scheme
  colorPrimary: tokens.props.color_pure_black.value, // No known usage
  colorSecondary: tokens.props.color_orange.value, // Accent color

  // UI colors
  appBg: tokens.props.color_grey_0.value,

  // Rows of controls
  barTextColor: tokens.props.color_grey_7.value,
  barSelectedColor: tokens.props.color_pure_black.value,
  barBg: tokens.props.color_pure_white.value,

  // Typography
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: '"Fira Code", monospace',

  // Text colors
  textColor: tokens.props.color_pure_black.value,
  textInverseColor: tokens.props.color_pure_white.value,

  // Branding
  brandTitle: 'Vocabulary',
  brandUrl: 'https://opensource.creativecommons.org/cc-vocabulary',
  brandImage: 'https://raw.githubusercontent.com/creativecommons/vue-vocabulary/master/readme_assets/vocabulary_logo.svg?sanitize=true'
})
