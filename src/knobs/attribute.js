import { text } from '@storybook/addon-knobs'

export default {
  props: {
    type: {
      default: () => text('Type', 'type')
    },
    name: {
      default: () => text('Name', 'name')
    },
    title: {
      default: () => text('Title', 'title')
    },
    value: {
      default: () => text('Value', 'title')
    }
  }
}
