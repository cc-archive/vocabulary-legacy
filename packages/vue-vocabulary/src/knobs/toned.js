import { number } from '@storybook/addon-knobs'

export default {
  props: {
    tone: {
      default: () => number('Tone', 9, {
        range: true,
        min: 0,
        max: 9,
        step: 1
      })
    }
  }
}
