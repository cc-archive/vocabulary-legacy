import Heading from '@/elements/Heading/Heading'

import { number } from '@storybook/addon-knobs'

export default { title: 'Elements|Heading' }

export const levels = () => ({
  components: {
    Heading
  },
  props: {
    level: {
      default: number('Level', 1, {
        range: true,
        min: 1,
        max: 6,
        step: 1
      })
    }
  },
  template: `
    <Heading :level="level">Heading {{ level }}</Heading>
  `
})
