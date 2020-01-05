import Button from '@/elements/Button/Button'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Rounded from '@/knobs/rounded'
import Scaled from '@/knobs/scaled'
import Simplified from '@/knobs/simplified'
import Toned from '@/knobs/toned'

import Invertible from '@/knobs/invertible'
import Unactionable from '@/knobs/unactionable'

import Text from '@/knobs/text'
import Iconified from '@/knobs/iconified'
import Attribute from '@/knobs/attribute'

export default { title: 'Elements|Button' }

export const branded = () => ({
  mixins: [Branded],
  components: { Button },
  template: `
    <Button :brand="brand">{{ brand }}</Button>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Button },
  template: `
    <Button :color="color" :shade="shade">{{ color }} {{ shade}}</Button>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Button },
  template: `
    <Button :indication="indication">{{ indication }}</Button>
  `
})

export const rounded = () => ({
  mixins: [Rounded],
  components: { Button },
  template: `
    <Button :roundness="roundness">Click Me</Button>
  `
})

export const scaled = () => ({
  mixins: [Scaled],
  components: { Button },
  template: `
    <Button :size="size">Click Me</Button>
  `
})

export const simplified = () => ({
  mixins: [Simplified],
  components: { Button },
  template: `
    <Button :simplicity="simplicity">Click Me</Button>
  `
})

export const toned = () => ({
  mixins: [Toned],
  components: { Button },
  template: `
    <Button :tone="tone">Click me</Button>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Button },
  template: `
    <Button :isInverted="isInverted">Click Me</Button>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const unactionable = () => ({
  mixins: [Unactionable],
  components: { Button },
  template: `
    <Button :is-disabled="isDisabled"> Click Me</Button>
  `
})

export const withText = () => ({
  mixins: [Text],
  components: { Button },
  template: `
    <Button>{{ text }}</Button>
  `
})

export const withIcon = () => ({
  mixins: [Iconified],
  components: { Button },
  template: `
    <Button :icon="icon">Click me</Button>
  `
})

export const withAttribute = () => ({
  mixins: [Attribute],
  components: { Button },
  template: `
    <Button :type="type" :value="value">Click me</Button>
  `
})
