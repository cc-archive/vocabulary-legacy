import { create } from '@storybook/theming'

import vocabularySvg from '../src/assets/logos/products/vocabulary.svg'
import vocabularySvgInverted from '../src/assets/logos/products/vocabulary_inverted.svg'

const base = {
    colorSecondary: 'rgb(251, 119, 41)',
    barSelectedColor: 'rgb(251, 119, 41)',
    fontBase: '"Source Sans Pro", sans-serif',
    fontCode: '"Fira Code", monospace',
    brandTitle: 'Vocabulary',
    brandUrl: 'https://opensource.creativecommons.org/cc-vocabulary'
  }

export const lightTheme = create({
    base: 'light',
    colorPrimary: 'rgb(0, 0, 0)',
    appBg: 'rgb(255, 255, 255)',
    barTextColor: 'rgb(73, 80, 87)',
    barBg: 'rgb(255, 255, 255)',
    textColor: 'rgb(0, 0, 0)',
    textInverseColor: 'rgb(255, 255, 255)',
    brandImage: vocabularySvg,
    ...base
  })

export const darkTheme = create({
    base: 'dark',
    colorPrimary: 'rgb(255, 255, 255)',
    appBg: 'rgb(47, 47, 47)',
    barTextColor: 'rgb(193, 193, 193)',
    barBg: 'rgb(47, 47, 47)',
    textColor: 'rgb(255, 255, 255)',
    textInverseColor: 'rgb(0, 0, 0)',
    brandImage: vocabularySvgInverted,
    ...base
  })
