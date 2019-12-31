import Emoji from '@/elements/Emoji/Emoji'

import { select, text } from '@storybook/addon-knobs'

export default {
  title: 'Elements|Emoji',
  decorators: [
    () => ({ template: `<div style="font-size: 2rem;"><story/></div>` })
  ]
}

export const outputs = () => ({
  components: { Emoji },
  props: {
    ext: {
      default: () => select('Extension', {
        PNG: '.png',
        SVG: '.svg'
      }, '.svg')
    }
  },
  template: `
    <Emoji :ext="ext" :key="ext">❤️</Emoji>
  `
})

export const withText = () => ({
  components: { Emoji },
  props: {
    emoji: {
      default: () => text('Emoji', '❤️')
    }
  },
  template: `
    <Emoji :key="emoji">{{ emoji }}</Emoji>
  `
})
