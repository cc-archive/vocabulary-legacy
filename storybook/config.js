import { addDecorator, addParameters, configure } from '@storybook/vue'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import vocabularyTheme from './theme'

// Customise storybook

addParameters({
  options: {
    theme: vocabularyTheme
  }
})

// Customise stories

addDecorator(withA11y)
addDecorator(withKnobs)

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
