import { select } from '@storybook/addon-knobs'

const directionOptions = {
  Top: 'top',
  Right: 'right',
  Bottom: 'bottom',
  Left: 'left'
}

export default {
  props: {
    direction: {
      default: () => select('Direction', directionOptions, directionOptions.Top)
    }
  }
}
