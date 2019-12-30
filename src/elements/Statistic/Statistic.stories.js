import Statistic from '@/elements/Statistic/Statistic'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'

import Invertible from '@/knobs/invertible'

import Iconified from '@/knobs/iconified'
import Text from '@/knobs/text'

export default { title: 'Elements|Statistic' }

export const branded = () => ({
  mixins: [Branded],
  components: { Statistic },
  template: `
    <Statistic :brand="brand" label="Property" is-textual-value>
      Value
    </Statistic>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Statistic },
  template: `
    <Statistic :color="color" :shade="shade" label="Property" is-textual-value>
      Value
    </Statistic>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Statistic },
  template: `
    <Statistic :indication="indication" label="Property" is-textual-value>
      Value
    </Statistic>
  `
})

export const invertible = () => ({
  mixins: [Invertible, Colored],
  components: { Statistic },
  template: `
    <Statistic :is-inverted="isInverted" label="Property" is-textual-value>
      Value
    </Statistic>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const withIcon = () => ({
  mixins: [Iconified],
  components: { Statistic },
  template: `
    <Statistic :icon-set="[icon, icon]" label="Property" is-textual-value>
      Value
    </Statistic>
  `
})

export const withText = () => ({
  mixins: [Text],
  components: { Statistic },
  template: `
    <Statistic label="Property" is-textual-value>
      {{ text }}
    </Statistic>
  `
})
