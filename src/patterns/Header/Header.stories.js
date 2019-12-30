import Header from '@/patterns/Header/Header'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'

import Text from '@/knobs/text'

import { text } from '@storybook/addon-knobs'

export default { title: 'Patterns|Header' }

export const branded = () => ({
  mixins: [Branded],
  components: { Header },
  template: `
    <Header :brand="brand"/>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { Header },
  template: `
    <Header :color="color" :shade="shade"/>
  `
})

export const titled = () => ({
  components: { Header },
  props: {
    title: {
      default: () => text('Title', 'Vocabulary')
    }
  },
  template: `
    <Header :title="title"/>
  `
})

export const withText = () => ({
  mixins: [Text],
  components: { Header },
  template: `
    <Header>{{ text }}</Header>
  `
})
