import { text } from '@storybook/addon-knobs'

export default {
  props: {
    text: {
      default: () => text('Text', 'Hello World!')
    }
  }
}
