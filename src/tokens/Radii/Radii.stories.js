import { storiesOf } from '@storybook/vue'

import Radii from './Radii'

const stories = storiesOf('Tokens/Radii', module)

stories
  .add('rem-based', () => ({
    components: { Radii },
    template: '<Radii category="rem"/>'
  }))
  .add('em-based', () => ({
    components: { Radii },
    template: '<Radii category="em"/>'
  }))
  .add('Special', () => ({
    components: { Radii },
    template: '<Radii category="special"/>'
  }))
