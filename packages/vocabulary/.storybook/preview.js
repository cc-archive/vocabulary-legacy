import { addDecorator, addParameters, } from '@storybook/html'

import { withDesign } from 'storybook-addon-designs'

import viewports from './viewport'
import order from './order'

import '../dist/css/vocabulary.css'

addParameters({
  options: {
    storySort: order
  },
  backgrounds: {
    default: 'canvas',
    values: [
    { name: 'canvas', value: '#f5f5f5', default: true },
    { name: 'white', value: '#ffffff' },
    { name: 'black', value: '#000000' }
    ]
  },
  viewport: {
    viewports
  }
})

addDecorator(withDesign)
