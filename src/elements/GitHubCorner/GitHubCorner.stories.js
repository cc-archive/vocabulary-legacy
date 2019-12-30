import GitHubCorner from '@/elements/GitHubCorner/GitHubCorner'

import Branded from '@/knobs/branded'
import Colored from '@/knobs/colored'

import Invertible from '@/knobs/invertible'

import { select } from '@storybook/addon-knobs'

export default { title: 'Elements|GitHubCorner' }

export const branded = () => ({
  mixins: [Branded],
  components: { GitHubCorner },
  template: `
    <GitHubCorner :brand="brand"/>
  `
})

export const colored = () => ({
  mixins: [Colored],
  components: { GitHubCorner },
  template: `
    <GitHubCorner :color="color" :shade="shade"/>
  `
})

export const invertible = () => ({
  mixins: [Invertible],
  components: { GitHubCorner },
  template: `
    <GitHubCorner :is-inverted="isInverted"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }]
  }
}

export const corners = () => ({
  components: { GitHubCorner },
  props: {
    corner: {
      default: select(
        'Corner',
        {
          Right: 'right',
          Left: 'left'
        },
        'right'
      )
    }
  },
  template: `
    <GitHubCorner :corner="corner"/>
  `
})

export const positions = () => ({
  components: { GitHubCorner },
  props: {
    position: {
      default: select(
        'Position',
        {
          Relative: 'relative',
          Absolute: 'absolute'
        },
        'relative'
      )
    }
  },
  template: `
    <GitHubCorner :position="position"/>
  `
})
