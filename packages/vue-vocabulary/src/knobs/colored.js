import { number, select } from '@storybook/addon-knobs'

const colorOptions = {
  Red: 'red',
  Pink: 'pink',
  Grape: 'grape',
  Violet: 'violet',
  Indigo: 'indigo',
  Cyan: 'cyan',
  Teal: 'teal',
  Green: 'green',
  Lime: 'lime',
  Yellow: 'yellow'
}

export default {
  props: {
    color: {
      default: () => select('Color', colorOptions, colorOptions.Indigo)
    },
    shade: {
      default: () => number('Shade', 9, {
        range: true,
        min: 0,
        max: 9,
        step: 1
      })
    }
  }
}
