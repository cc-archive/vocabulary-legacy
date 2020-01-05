import { select } from '@storybook/addon-knobs'

const brandOptions = {
  Blue: 'blue',
  Forest: 'forest',
  Gold: 'gold',
  Orange: 'orange',
  Tomato: 'tomato',
  Turquoise: 'turquoise',
  Slate: 'slate'
}

export default {
  props: {
    brand: {
      default: () => select('Brand', brandOptions, brandOptions.Orange)
    }
  }
}
