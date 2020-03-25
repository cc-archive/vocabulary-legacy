import { addDecorator, addParameters, } from '@storybook/html'

import { withKnobs } from '@storybook/addon-knobs'
import { withDesign } from 'storybook-addon-designs'

import '../dist/css/vocabulary.css'

const families = [
  'Vocabulary',
  'Tokens',
  'Assets',
  'Elements',
  'Form',
  'Layouts',
  'Patterns'
]

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
        return componentOne.localeCompare(componentTwo) // Sort components in a family in alphabetical order
      } else {
        return families.indexOf(famOne) - families.indexOf(famTwo) // Sort families according to defined order
      }
    }
  },
  backgrounds: [
    { name: 'canvas', value: '#f5f5f5', default: true },
    { name: 'white', value: '#ffffff' },
    { name: 'black', value: '#000000' }
  ]
})

addDecorator(withKnobs)
addDecorator(withDesign)
