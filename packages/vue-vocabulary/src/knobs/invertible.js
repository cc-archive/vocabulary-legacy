import { boolean } from '@storybook/addon-knobs'

export default {
  props: {
    isInverted: {
      default: () => boolean('Is inverted?', true)
    }
  }
}
