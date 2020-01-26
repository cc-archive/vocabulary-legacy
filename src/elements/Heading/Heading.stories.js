import Branded from '@/knobs/branded'
import Indicating from '@/knobs/indicating'

import Text from '@/knobs/text'

import { number } from '@storybook/addon-knobs'

export default { title: 'Elements|Heading' }

export const branded = () => ({
  mixins: [ Branded ],
  template: `
    <h6 :class="\`vocab heading $\{brand}-branded\`">Vocabulary</h6>
  `
})

export const indicating = () => ({
  mixins: [ Indicating ],
  template: `
    <h6 :class="\`vocab heading $\{indication}-indicating\`">Vocabulary</h6>
  `
})

export const withText = () => ({
  mixins: [Text],
  template: `
    <h6 class="vocab heading">{{ text }}</h6>
  `
})

export const levels = () => ({
  props: {
    level: {
      default: number('Level', 1, {
        range: true,
        min: 1,
        max: 6,
        step: 1
      })
    }
  },
  template: `
    <component :is="\`h$\{level}\`" class="vocab heading">Vocabulary</component>
  `
})
