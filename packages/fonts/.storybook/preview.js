import { addParameters } from '@storybook/html'
import { create } from '@storybook/theming'

import order from './order'

import fontsSvg from '../src/assets/logos/fonts.svg'
import fontsSvgInverted from '../src/assets/logos/fonts_inverted.svg'

import { light, dark } from '../../shared/theme'

import '../dist/css/fonts.css'
import '../dist/css/accidenz_commons.css'

const meta = {
  brandTitle: 'Fonts',
  brandUrl: 'https://opensource.creativecommons.org/cc-fonts'
}

addParameters({
  options: {
    showRoots: true,
    storySort: order,
    backgrounds: [
        { name: 'canvas', value: '#f5f5f5', default: true },
        { name: 'white', value: '#ffffff' },
        { name: 'black', value: '#000000' }
      ]
    },
    darkMode: {
      light: {
        meta,
        brandImage: fontsSvg,
        ...create(light)
      },
      dark: {
        meta,
        brandImage: fontsSvgInverted,
        ...create(dark)
      }
    }
})
