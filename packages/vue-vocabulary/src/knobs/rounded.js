import { select } from '@storybook/addon-knobs'

const roundOptions = {
  None: null,
  Slight: 'slight',
  Complete: 'complete'
}

export default {
  props: {
    roundness: {
      default: () => select('Roundness', roundOptions, roundOptions.None)
    }
  }
}
