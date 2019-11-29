import { storiesOf } from '@storybook/vue'

import Welcome from '@/stories/Welcome.vue'

const stories = storiesOf('Vocabulary', module)

stories
  .add('Welcome', () => ({
    components: { Welcome },
    template: '<Welcome/>'
  }))
