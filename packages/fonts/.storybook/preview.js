import { addParameters } from '@storybook/html'

import order from './order'

import lighttheme from './themes/light-theme'
import darktheme from './themes/dark-theme'

import '../dist/css/fonts.css'
import '../dist/css/accidenz_commons.css'

addParameters({
  options: {
    showRoots: true,
    storySort: order,
    backgrounds: [
      { name: 'canvas', value: '#f5f5f5', default: true },
      { name: 'white', value: '#ffffff' },
      { name: 'black', value: '#000000' }
    ]},
    darkMode: {
      light: { ...lighttheme },
      dark: { ...darktheme },
    },
})
