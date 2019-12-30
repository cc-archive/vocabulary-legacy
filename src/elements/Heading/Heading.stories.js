import Heading from '@/elements/Heading/Heading'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'

import Text from '@/knobs/text'

import { number } from '@storybook/addon-knobs'

export default { title: 'Elements|Heading' }

export const branded = () => ({
  mixins: [ Branded ],
  components: { Heading },
  template: `
    <Heading :brand="brand">Vocabulary</Heading>
  `
})

export const colored = () => ({
  mixins: [ Colored ],
  components: { Heading },
  template: `
    <Heading :color="color" :shade="shade">Vocabulary</Heading>
  `
})

export const indicating = () => ({
  mixins: [ Indicating ],
  components: { Heading },
  template: `
    <Heading :indication="indication">Vocabulary</Heading>
  `
})

export const withText = () => ({
  mixins: [Text],
  components: { Heading },
  template: `
    <Heading>{{ text }}</Heading>
  `
})

export const levels = () => ({
  components: { Heading },
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
    <Heading :level="level">Vocabulary</Heading>
  `
})
