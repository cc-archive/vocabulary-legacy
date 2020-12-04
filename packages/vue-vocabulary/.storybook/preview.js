import { addDecorator, addParameters } from '@storybook/vue'
import { withDesign } from "storybook-addon-designs";
import { create } from '@storybook/theming'

import vocabularySvg from '@creativecommons/vocabulary/assets/logos/products/vocabulary.svg';
import vocabularySvgInverted from '../../vocabulary/src/assets/logos/products/vocabulary_inverted.svg';

import i18n from '@/i18n'

import viewports from './viewport'
import order from './order'

import '@creativecommons/vocabulary/css/vocabulary.css'

import { light, dark } from '@creativecommons/shared/theme'
import { backgrounds } from '@creativecommons/shared/backgrounds'

const meta = {
  brandTitle: 'Vue Vocabulary',
  brandUrl: 'https://opensource.creativecommons.org/cc-vue-vocabulary'
}

addParameters({
  backgrounds,
  options: {
    storySort: order,
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
