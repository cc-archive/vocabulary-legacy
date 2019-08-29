import { storiesOf } from '@storybook/vue'

import Fonts from './Fonts'

const stories = storiesOf('Tokens/Fonts', module)

stories
  .add('Sizes', () => ({
    components: { Fonts },
    template: '<Fonts property="size"/>'
  }))
  .add('Weights', () => ({
    components: { Fonts },
    template: '<Fonts property="weight"/>'
  }))
