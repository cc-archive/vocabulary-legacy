import { addDecorator, addParameters, } from '@storybook/html'

import { withKnobs } from '@storybook/addon-knobs'
import { withDesign } from 'storybook-addon-designs'

import '../dist/css/vocabulary.css'

addParameters({
  backgrounds: [
    { name: 'canvas', value: '#f5f5f5', default: true },
    { name: 'white', value: '#ffffff' },
    { name: 'black', value: '#000000' }
  ]
})

addDecorator(withKnobs)
addDecorator(withDesign)
