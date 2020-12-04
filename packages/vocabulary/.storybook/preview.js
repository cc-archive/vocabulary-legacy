import { addDecorator, addParameters, } from '@storybook/html'
import { create } from '@storybook/theming'

import vocabularySvg from '../src/assets/logos/products/vocabulary.svg'
import vocabularySvgInverted from '../src/assets/logos/products/vocabulary_inverted.svg'

import { withDesign } from 'storybook-addon-designs'
import { withKnobs } from '@storybook/addon-knobs'

import viewports from './viewport'
import order from './order'

import '../dist/css/vocabulary.css'

import { light, dark } from '@creativecommons/shared/theme'
import { backgrounds } from "@creativecommons/shared/backgrounds";

const meta = {
  brandTitle: 'Vocabulary',
  brandUrl: 'https://opensource.creativecommons.org/cc-vocabulary'
}

addParameters({
  options: {
    showRoots: true,
    storySort: order,
  },
  backgrounds,
  viewport: {
    viewports
  },
  darkMode: {
    light: {
      ...meta,
      ...create(light),
      brandImage: vocabularySvg
    },
    dark: {
      ...meta,
      ...create(dark),
      brandImage: vocabularySvgInverted
    }
  }
})

addDecorator(withDesign)
addDecorator(withKnobs)
