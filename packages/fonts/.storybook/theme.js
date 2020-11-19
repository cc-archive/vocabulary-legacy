import { create } from '@storybook/theming'

import fontsSvg from '../src/assets/logos/fonts.svg'
import fontsSvgInverted from '../src/assets/logos/fonts_inverted.svg'

const base = {
    colorSecondary: 'rgb(251, 119, 41)',
    barSelectedColor: 'rgb(251, 119, 41)',
    fontBase: '"Source Sans Pro", sans-serif',
    fontCode: '"Fira Code", monospace',
    brandTitle: 'Fonts',
    brandUrl: 'https://opensource.creativecommons.org/cc-fonts'
  }

export const light = create({
    base: 'light',
    colorPrimary: 'rgb(0, 0, 0)',
    appBg: 'rgb(255, 255, 255)',
    barTextColor: 'rgb(73, 80, 87)',
    barBg: 'rgb(255, 255, 255)',
    textColor: 'rgb(0, 0, 0)',
    textInverseColor: 'rgb(255, 255, 255)',
    brandImage: fontsSvg,
    ...base
  })

export const dark = create({
    base: 'dark',
    colorPrimary: 'rgb(255, 255, 255)',
    appBg: 'rgb(47, 47, 47)',
    barTextColor: 'rgb(193, 193, 193)',
    barBg: 'rgb(47, 47, 47)',
    textColor: 'rgb(255, 255, 255)',
    textInverseColor: 'rgb(0, 0, 0)',
    brandImage: fontsSvgInverted,
    ...base
  })
