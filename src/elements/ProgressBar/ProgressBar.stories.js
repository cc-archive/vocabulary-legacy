import ProgressBar from '@/elements/ProgressBar/ProgressBar'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Indicating from '@/knobs/indicating'
import Roundness from '@/knobs/rounded'
import Scaled from '@/knobs/scaled'

import Invertible from '@/knobs/invertible'

import Iconified from '@/knobs/iconified'

import { boolean } from '@storybook/addon-knobs'

export default { title: 'Elements|ProgressBar' }

export const indeterminate = () => ({
  components: { ProgressBar },
  template: `
    <ProgressBar/>
  `
})

export const branded = () => ({
  mixins: [Branded],
  components: { ProgressBar },
  template: `
    <ProgressBar value="33" :brand="brand"/>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { ProgressBar },
  template: `
    <ProgressBar value="33" :color="color" :shade="shade"/>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { ProgressBar },
  template: `
    <ProgressBar value="33" :indication="indication"/>
  `
})

export const rounded = () => ({
  mixins: [Roundness],
  components: { ProgressBar },
  template: `
    <ProgressBar value="33" :roundness="roundness"/>
  `
})

export const scaled = () => ({
  mixins: [Scaled],
  components: { ProgressBar },
  template: `
    <ProgressBar value="33" :size="size"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { ProgressBar },
  template: `
    <ProgressBar value="33" :is-inverted="isInverted"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const withPercentage = () => ({
  components: { ProgressBar },
  props: {
    isPercentVisible: {
      default: () => boolean('Is percent visible?', true)
    }
  },
  template: `
    <ProgressBar value="33" :is-percent-visible="isPercentVisible"/>
  `
})

export const withIcon = () => ({
  mixins: [Iconified],
  components: { ProgressBar },
  template: `
    <ProgressBar value="33" :icon="icon"/>
  `
})
