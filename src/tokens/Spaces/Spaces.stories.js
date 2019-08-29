import { storiesOf } from '@storybook/vue'

import Spaces from './Spaces'

const stories = storiesOf('Tokens/Spaces', module)

stories
  .add('rem-based', () => ({
    components: { Spaces },
    template: '<Spaces category="rem"/>'
  }))
  .add('em-based', () => ({
    components: { Spaces },
    template: '<Spaces category="em"/>'
  }))
  .add('Special', () => ({
    components: { Spaces },
    template: '<Spaces category="special"/>'
  }))
