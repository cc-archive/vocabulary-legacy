import Shield from '@/elements/Shield/Shield'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Roundness from '@/knobs/rounded'
import Scaled from '@/knobs/scaled'
import Simplified from '@/knobs/simplified'

import Invertible from '@/knobs/invertible'

export default { title: 'Elements|Shield' }

export const branded = () => ({
  mixins: [Branded],
  components: { Shield },
  template: `
    <Shield :brand="brand" label="key" message="value"/>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Shield },
  template: `
    <Shield :color="color" :shade="shade" label="key" message="value"/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Shield },
  template: `
    <Shield :indication="indication" label="key" message="value"/>
  `
})

export const rounded = () => ({
  mixins: [Roundness],
  components: { Shield },
  template: `
    <Shield :roundness="roundness" label="key" message="value"/>
  `
})

export const scaled = () => ({
  mixins: [Scaled],
  components: { Shield },
  template: `
    <Shield :size="size" label="key" message="value"/>
  `
})

export const simplified = () => ({
  mixins: [Simplified],
  components: { Shield },
  template: `
    <Shield :simplicity="simplicity" label="key" message="value"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Shield },
  template: `
    <Shield :is-inverted="isInverted" label="key" message="value"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}
