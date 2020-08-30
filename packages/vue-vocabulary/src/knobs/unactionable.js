import { boolean } from '@storybook/addon-knobs'

export default {
  props: {
    isDisabled: {
      default: () => boolean('Is disabled?', true)
    },
    isReadOnly: {
      default: () => boolean('Is read-only?', false)
    }
  }
}
