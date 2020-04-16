import { addDecorator, addParameters, } from '@storybook/html'

import order from './order'

import '../dist/css/fonts.css'
import '../dist/css/accidenz_commons.css'

addParameters({
  options: {
    showRoots: true,
    storySort: order
  }
})

