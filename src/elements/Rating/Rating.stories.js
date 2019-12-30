import Rating from '@/elements/Rating/Rating'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Scaled from '@/knobs/scaled'

import Invertible from '@/knobs/invertible'
import Unactionable from '@/knobs/unactionable'

import Iconified from '@/knobs/iconified'

import { boolean, number } from '@storybook/addon-knobs'

export default { title: 'Elements|Rating' }

export const branded = () => ({
  mixins: [Branded],
  components: { Rating },
  template: `
    <Rating :value="3" :brand="brand"/>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Rating },
  template: `
    <Rating :value="3" :color="color" :shade="shade"/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Rating },
  template: `
    <Rating :value="3" :indication="indication"/>
  `
})

export const scaled = () => ({
  mixins: [Scaled],
  components: { Rating },
  template: `
    <Rating :value="3" :size="size"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Rating },
  template: `
    <Rating :value="3" :is-inverted="isInverted"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const toggleable = () => ({
  components: { Rating },
  props: {
    isToggleable: {
      default: () => boolean('Is toggleable?', true)
    }
  },
  template: `
    <Rating color="violet" :value="3" is-toggleable="isToggleable"/>
  `
})

export const unactionable = () => ({
  mixins: [Unactionable],
  components: { Rating },
  template: `
    <Rating :value="3" :is-disabled="isDisabled" :is-read-only="isReadOnly"/>
  `
})

export const withIcon = () => ({
  mixins: [Iconified],
  components: { Rating },
  template: `
    <Rating :value="3" :icon-set="[icon]"/>
  `
})

export const withLimits = () => ({
  components: { Rating },
  props: {
    max: {
      default: number('Max', 5, {
        range: true,
        min: 5,
        max: 10,
        step: 1
      })
    }
  },
  template: `
    <Rating :max="max" :value="3"/>
  `
})
