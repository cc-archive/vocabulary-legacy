import GitHubCorner from '@/elements/GitHubCorner/GitHubCorner'

import Invertible from '@/knobs/invertible'

import { select } from '@storybook/addon-knobs'

export default { title: 'Elements|GitHubCorner' }

export const invertible = () => ({
  mixins: [Invertible],
  components: { GitHubCorner },
  template: `
    <GitHubCorner :is-inverted="isInverted"/>
  `
})
invertible.story = {
  parameters: {
    backgrounds: [
      { name: 'dark background', value: '#000', default: true },
      { name: 'light background', value: '#fff', default: false }
    ]
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
