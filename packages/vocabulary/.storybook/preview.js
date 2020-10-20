import { addDecorator, addParameters, } from '@storybook/html'

import { withDesign } from 'storybook-addon-designs'
import { withKnobs } from '@storybook/addon-knobs'

import viewports from './viewport'
import order from './order'

import lighttheme from './themes/light-theme'
import darktheme from './themes/dark-theme'

import '../dist/css/vocabulary.css'

addParameters({
  options: {
    showRoots: true,
    storySort: order
  },
  backgrounds: [
    { name: 'canvas', value: '#f5f5f5', default: true },
    { name: 'white', value: '#ffffff' },
    { name: 'black', value: '#000000' }
  ],
  viewport: {
    viewports,
  },
  darkMode: {
    dark: { ...darktheme },
    light: { ...lighttheme },
  },
})

addDecorator(withDesign)
addDecorator(withKnobs)
