import { addDecorator, addParameters } from '@storybook/vue'
import { withDesign } from "storybook-addon-designs";

import i18n from '@/i18n'

import viewports from './viewport'
import order from './order'

import lighttheme from './themes/light-theme'
import darktheme from './themes/dark-theme'

import '@creativecommons/vocabulary/css/vocabulary.css'

addParameters({
  options: { storySort: order },
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
  },
  darkMode: {
    light: { ...lighttheme },
    dark: { ...darktheme },
  },
})

addDecorator(withDesign)
addDecorator(
  () => ({
    i18n,
    template: '<story/>',
    // https://github.com/storybookjs/storybook/issues/6548#issuecomment-504336665
    beforeCreate() {
      this.$root._i18n = this.$i18n
    }
  })
)
