import { addParameters, configure } from '@storybook/vue'

import vocabularyTheme from './theme'

// Customise storybook

addParameters({
  options: {
    theme: vocabularyTheme
  }
})

// Register stories

const req = require.context('../src', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
