import { addDecorator, addParameters, configure } from '@storybook/vue'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import i18n from '@/i18n'

import theme from './theme'
import viewports from './viewport'

// Customise storybook

addParameters({
  options: {
    theme
  },
  viewport: {
    viewports
  }
})

// Customise stories

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

// Register stories

configure([
  require.context(`../src/stories`, true, /.stories.js$/),
  require.context(`../src/tokens`, true, /.stories.js$/),
  require.context(`../src/utils`, true, /.stories.js$/),
  require.context(`../src/elements`, true, /.stories.js$/),
  require.context(`../src/layouts`, true, /.stories.js$/),
  require.context(`../src/patterns`, true, /.stories.js$/),
  require.context(`../src/templates`, true, /.stories.js$/)
], module)
