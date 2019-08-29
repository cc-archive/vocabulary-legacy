import { storiesOf } from '@storybook/vue'

import Colors from './Colors'

const stories = storiesOf('Tokens/Colors', module)

stories
  .add('Hues', () => ({
    components: { Colors },
    template: '<Colors category="hue"/>'
  }))
  .add('Tones', () => ({
    components: { Colors },
    template: '<Colors category="tone"/>'
  }))
  .add('Contexts', () => ({
    components: { Colors },
    template: '<Colors category="context"/>'
  }))
  .add('Overlays', () => ({
    components: { Colors },
    template: '<Colors category="overlay"/>'
  }))
