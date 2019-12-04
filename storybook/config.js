import { addDecorator, addParameters, configure } from '@storybook/vue'
import { withA11y } from '@storybook/addon-a11y'

import vocabularyTheme from './theme'

// Customise storybook

addParameters({
  options: {
    theme: vocabularyTheme
  }
})

// Customise stories

addDecorator(withA11y)

// Register stories

const req = require.context('../src', true, /.stories.js$/)

configure(req, module)
