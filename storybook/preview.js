import { addDecorator, addParameters } from '@storybook/vue'

import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import i18n from '@/i18n'

import viewports from './viewport'

import '@/root.styl'
import '@/index.styl'

// Customise storybook

addParameters({
  viewport: {
    viewports
  }
})

addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(
  () => ({
    i18n,
    template: '<story/>',
    // https://github.com/storybookjs/storybook/issues/6548#issuecomment-504336665
    beforeCreate: function () {
      this.$root._i18n = this.$i18n
    }
  })
)
