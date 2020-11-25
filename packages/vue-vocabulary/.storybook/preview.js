import { addDecorator, addParameters } from '@storybook/vue'
import { withDesign } from "storybook-addon-designs";
import { create } from '@storybook/theming'

import vocabularySvg from '@creativecommons/vocabulary/assets/logos/products/vocabulary.svg';
import vocabularySvgInverted from '../../vocabulary/src/assets/logos/products/vocabulary_inverted.svg';

import i18n from '@/i18n'

import viewports from './viewport'
import order from './order'

import '@creativecommons/vocabulary/css/vocabulary.css'

const { light, dark } =  require('../../shared/theme') 

const meta = {
  brandTitle: 'Vue Vocabulary',
  brandUrl: 'https://opensource.creativecommons.org/cc-vue-vocabulary'
}

addParameters({
  options: { 
  storySort: order,
  backgrounds: {
    default: 'canvas',
    values: [
        { name: 'canvas', value: '#f5f5f5', default: true },
        { name: 'white', value: '#ffffff' },
        { name: 'black', value: '#000000' }
      ]
    }
  },
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
