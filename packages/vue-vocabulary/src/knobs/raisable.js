import { boolean } from '@storybook/addon-knobs'

export default {
  props: {
    isRaised: {
      default: () => boolean('Is raised?', true)
    }
  }
}
