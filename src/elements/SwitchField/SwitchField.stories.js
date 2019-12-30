import SwitchField from '@/elements/SwitchField/SwitchField'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Rounded from '@/knobs/rounded'
import Scaled from '@/knobs/scaled'
import Simplified from '@/knobs/simplified'

import Invertible from '@/knobs/invertible'
import Unactionable from '@/knobs/unactionable'

import Iconified from '@/knobs/iconified'

import { boolean } from '@storybook/addon-knobs'

export default { title: 'Elements|SwitchField' }

export const branded = () => ({
  mixins: [Branded],
  components: { SwitchField },
  template: `
    <SwitchField :value="true" :brand="brand"/>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { SwitchField },
  template: `
    <SwitchField :value="true" :color="color" :shade="shade"/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { SwitchField },
  template: `
    <SwitchField :value="true" :indication="indication"/>
  `
})

export const inactive = () => ({
  mixins: [Unactionable],
  components: { SwitchField },
  template: `
    <SwitchField :value="true" :is-disabled="isDisabled" :is-read-only="isReadOnly"/>
  `
})

export const simplified = () => ({
  mixins: [Simplified],
  components: { SwitchField },
  template: `
    <SwitchField :value="true" :simplicity="simplicity"/>
  `
})

export const rounded = () => ({
  mixins: [Rounded],
  components: { SwitchField },
  template: `
    <SwitchField :value="true" :roundness="roundness"/>
  `
})

export const scaled = () => ({
  mixins: [Scaled],
  components: { SwitchField },
  template: `
    <SwitchField :value="true" :size="size"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { SwitchField },
  template: `
    <SwitchField :value="true" :is-inverted="isInverted"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const labellable = () => ({
  components: { SwitchField },
  props: {
    isLabelled: {
      default: () => boolean('Is labelled?', true)
    }
  },
  template: `
    <SwitchField :value="true" :is-labelled="isLabelled"/>
  `
})

export const withIcon = () => ({
  mixins: [Iconified],
  components: { SwitchField },
  template: `
    <SwitchField :value="true" :iconSet="[icon, icon]"/>
  `
})
