import { storiesOf } from '@storybook/vue'

import Shadows from './Shadows'

const stories = storiesOf('Tokens/Shadows', module)

stories
  .add('Default', () => ({
    components: { Shadows },
    template: '<Shadows/>'
  }))
