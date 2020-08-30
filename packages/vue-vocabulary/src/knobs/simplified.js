import { select } from '@storybook/addon-knobs'

const simplifiedOptions = {
  None: null,
  Slight: 'slight',
  Extreme: 'extreme'
}

export default {
  props: {
    simplicity: {
      default: () => select('Simplicity', simplifiedOptions, simplifiedOptions.None)
    }
  }
}
