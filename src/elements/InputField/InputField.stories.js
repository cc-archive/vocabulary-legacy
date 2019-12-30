import InputField from '@/elements/InputField/InputField'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Rounded from '@/knobs/rounded'
import Scaled from '@/knobs/scaled'
import Simplified from '@/knobs/simplified'

import Invertible from '@/knobs/invertible'
import Unactionable from '@/knobs/unactionable'

export default { title: 'Elements|InputField' }

export const branded = () => ({
  mixins: [Branded],
  components: { InputField },
  template: `
    <InputField :brand="brand" type="text" placeholder="Input..."/>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { InputField },
  template: `
    <InputField :color="color" :shade="shade" type="text" placeholder="Input..."/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { InputField },
  template: `
    <InputField :indication="indication" type="text" placeholder="Input..."/>
  `
})

export const rounded = () => ({
  mixins: [Rounded],
  components: { InputField },
  template: `
    <InputField :roundness="roundness" type="text" placeholder="Input..."/>
  `
})

export const scaled = () => ({
  mixins: [Scaled],
  components: { InputField },
  template: `
    <InputField :size="size" type="text" placeholder="Input..."/>
  `
})

export const simplified = () => ({
  mixins: [Simplified],
  components: { InputField },
  template: `
    <InputField :simplicity="simplicity" type="text" placeholder="Input..."/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { InputField },
  template: `
    <InputField :is-inverted="isInverted" type="text" placeholder="Input..."/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const unactionable = () => ({
  mixins: [Unactionable],
  components: { InputField },
  template: `
    <InputField :is-disabled="isDisabled" :is-read-only="isReadOnly" type="text" placeholder="Input..."/>
  `
})
