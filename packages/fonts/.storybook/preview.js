import { addParameters } from '@storybook/html'
import { create } from '@storybook/theming'

import order from './order'

import fontsSvg from '../src/assets/logos/fonts.svg'
import fontsSvgInverted from '../src/assets/logos/fonts_inverted.svg'

import '../dist/css/fonts.css'
import '../dist/css/accidenz_commons.css'

import { light, dark } from '@creativecommons/shared/theme'
import { backgrounds } from '@creativecommons/shared/backgrounds'

const meta = {
  brandTitle: 'Fonts',
  brandUrl: 'https://opensource.creativecommons.org/cc-fonts'
}

addParameters({
  storySort: order,
  showRoots: true,
  backgrounds,
  darkMode: {
    light: {
      ...meta,
      ...create(light),
      brandImage: fontsSvg
    },
    dark: {
      ...meta,
      ...create(dark),
      brandImage: fontsSvgInverted
    }
  }
})
