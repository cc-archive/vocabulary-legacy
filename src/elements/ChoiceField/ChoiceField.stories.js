import ChoiceField from '@/elements/ChoiceField/ChoiceField'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Simplified from '@/knobs/simplified'
import Scaled from '@/knobs/scaled'

import Invertible from '@/knobs/invertible'
import Unactionable from '@/knobs/unactionable'

export default { title: 'Elements|ChoiceField' }

export const branded = () => ({
  mixins: [Branded],
  components: { ChoiceField },
  template: `
    <ChoiceField :brand="brand"/>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { ChoiceField },
  template: `
    <ChoiceField :color="color" :shade="shade"/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { ChoiceField },
  template: `
    <ChoiceField :indication="indication"/>
  `
})

export const scaled = () => ({
  mixins: [Scaled],
  components: { ChoiceField },
  template: `
    <ChoiceField :size="size"/>
  `
})

export const simplified = () => ({
  mixins: [Simplified],
  components: { ChoiceField },
  template: `
    <ChoiceField :simplicity="simplicity"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { ChoiceField },
  template: `
    <ChoiceField :is-inverted="isInverted"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const unactionable = () => ({
  mixins: [Unactionable],
  components: { ChoiceField },
  template: `
    <ChoiceField :is-disabled="isDisabled" :is-read-only="isReadOnly"/>
  `
})
