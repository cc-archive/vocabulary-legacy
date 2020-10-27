import { create } from '@storybook/theming'

export default create({
  // Inherit
  base: 'dark',

  // Color scheme
  colorPrimary: 'rgb(255, 255, 255)', // No known usage
  colorSecondary: 'rgb(251, 119, 41)', // Accent color

  // UI colors
  appBg: 'rgb(47, 47, 47)',

  // Rows of controls
  barTextColor: 'rgb(193, 193, 193)',
  barSelectedColor: 'rgb(251, 119, 41)',
  barBg: 'rgb(47, 47, 47)',

  // Typography
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: '"JetBrains Mono", monospace',

  // Text colors
  textColor: 'rgb(255, 255, 255)',
  textInverseColor: 'rgb(0, 0, 0)',

  // Branding
  brandTitle: 'Vocabulary',
  brandUrl: 'https://opensource.creativecommons.org/cc-vocabulary',
  brandImage: 'https://svgshare.com/i/Qq2.svg'

})
