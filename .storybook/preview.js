import { addDecorator, addParameters } from '@storybook/vue'

import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import i18n from '@/i18n'

import viewports from './viewport'

import '@creativecommons/vocabulary/css/vocabulary.css'

const order = {
  'Vue Vocabulary': [
    'Introduction',
    'Contribution',
    'Usage'
  ]
}
const families = Object.keys(order)

addParameters({
  options: {
    showRoots: true,
    storySort: ([, one], [, two]) => {
      if (one.kind === two.kind) {
        return 0 // Sort stories in a component as defined in the MDX file
      }
      const [famOne, componentOne] = one.kind.split('/')
      const [famTwo, componentTwo] = two.kind.split('/')
      if (famOne === famTwo) {
        if (order[famOne].length) {
          return order[famOne].indexOf(componentOne) - order[famOne].indexOf(componentTwo)
        } else {
          return componentOne.localeCompare(componentTwo) // Sort components in a family in alphabetical order
        }
      } else {
        return families.indexOf(famOne) - families.indexOf(famTwo) // Sort families according to defined order
      }
    }
  },
  backgrounds: [
    { name: 'canvas', value: '#f5f5f5', default: true },
    { name: 'white', value: '#ffffff' },
    { name: 'black', value: '#000000' }
  ],
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
