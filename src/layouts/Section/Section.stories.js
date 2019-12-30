import Section from '@/layouts/Section/Section'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'
import Directed from '@/knobs/direction'
import Indicating from '@/knobs/indicating'
import Rounded from '@/knobs/rounded'
import Simplified from '@/knobs/simplified'

import Raisable from '@/knobs/raisable'
import Invertible from '@/knobs/invertible'

import Text from '@/knobs/text'
import { boolean } from '@storybook/addon-knobs'

export default { title: 'Layouts|Section' }

export const branded = () => ({
  mixins: [Branded],
  components: { Section },
  template: `
    <Section :brand="brand">Content</Section>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Section },
  template: `
    <Section :color="color" :shade="shade">Content</Section>
  `
})

export const indicating = () => ({
  mixins: [Indicating],
  components: { Section },
  template: `
    <Section :indication="indication">Content</Section>
  `
})

export const rounded = () => ({
  mixins: [Rounded],
  components: { Section },
  template: `
    <Section :roundness="roundness">Content</Section>
  `
})

export const simplified = () => ({
  mixins: [Simplified],
  components: { Section },
  template: `
    <Section :simplicity="simplicity">Content</Section>
  `
})

export const directed = () => ({
  mixins: [Directed],
  components: { Section },
  template: `
    <Section
      color="indigo"
      :shade="9"
      :color-side="direction">
      Content
    </Section>
  `
})

export const compactable = () => ({
  components: { Section },
  props: {
    isCompact: {
      default: () => boolean('Is compact?', true)
    }
  },
  template: `
    <Section :is-compact="isCompact">Content</Section>
  `
})

export const clingable = () => ({
  components: { Section },
  props: {
    isClingy: {
      default: () => boolean('Is clingy?', true)
    }
  },
  template: `
    <Section :is-clingy="isClingy">Content</Section>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { Section },
  template: `
    <Section :is-inverted="isInverted">Content</Section>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const raisable = () => ({
  mixins: [Raisable],
  components: { Section },
  template: `
    <Section :is-raised="isRaised">Content</Section>
  `
})

export const withText = () => ({
  mixins: [Text],
  components: { Section },
  template: `
    <Section>{{ text }}</Section>
  `
})
