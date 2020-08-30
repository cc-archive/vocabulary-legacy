import { select } from '@storybook/addon-knobs'

const indicationOptions = {
  Negative: 'negative',
  Probably: 'probably',
  Postitive: 'positive'
}

export default {
  props: {
    indication: {
      default: () => select('Indication', indicationOptions, indicationOptions.Postitive)
    }
  }
}
