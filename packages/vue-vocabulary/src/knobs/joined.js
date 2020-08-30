import { select } from '@storybook/addon-knobs'

const joinedOptions = {
  Left: 'left',
  Right: 'right',
  Both: 'both'
}

export default {
  props: {
    joinSide: {
      default: () => select('Join side', joinedOptions, joinedOptions.Left)
    }
  }
}
