import Heading from '@/elements/Heading/Heading'

import { number } from '@storybook/addon-knobs'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'

export default { title: 'Elements|Heading' }

export const colored = () => ({
  mixins: [ Colored ],
  components: { Heading },
  template: `
    <Heading :color="color" :shade="shade">{{ color }} {{ shade}}</Heading>
  `
})

export const branded = () => ({
  mixins: [ Branded ],
  components: { Heading },
  template: `
    <Heading :brand="brand">{{ brand }}</Heading>
  `
})

export const indicating = () => ({
  mixins: [ Indicating ],
  components: { Heading },
  template: `
    <Heading :indication="indication">{{ indication }}</Heading>
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
    <Heading :level="level">Heading {{ level }}</Heading>
  `
})
