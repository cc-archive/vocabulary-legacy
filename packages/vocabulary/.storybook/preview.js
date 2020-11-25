import { addDecorator, addParameters, } from '@storybook/html'
import { create } from '@storybook/theming'

import vocabularySvg from '../src/assets/logos/products/vocabulary.svg'
import vocabularySvgInverted from '../src/assets/logos/products/vocabulary_inverted.svg'

import { withDesign } from 'storybook-addon-designs'
import { withKnobs } from '@storybook/addon-knobs'

import viewports from './viewport'
import order from './order'

import { light, dark } from '../../shared/theme'

import '../dist/css/vocabulary.css'

const meta = {
  brandTitle: 'Vocabulary',
  brandUrl: 'https://opensource.creativecommons.org/cc-vocabulary'
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
    viewport: {
      viewports
    },
    darkMode: {
      light: {
        meta,
        ...create(light),
        brandImage: vocabularySvg
      },
      dark: {
        meta,
        ...create(dark),
        brandImage: vocabularySvgInverted
      }
    }
})

addDecorator(withDesign)
addDecorator(withKnobs)
