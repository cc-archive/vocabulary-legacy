export default {
  props: {
    /**
     * _the primary color for the component_
     *
     * ∈ {`'red'`, `'pink'`, `'grape'`, `'violet'`, `'indigo'`, `'cyan'`,
     * `'teal'`, `'green'`, `'lime'`, `'yellow'`}
     *
     * If the color is not specified, a default one is chosen as described.
     */
    color: {
      type: String,
      validator: val => [
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow'
      ].includes(val)
    },
    /**
     * _the accentuating shade of the primary color to use_
     *
     *  ⩾ 0 and ⩽ 9
     *
     * If the shade is not specified, the darkest shade of color will be used.
     */
    shade: {
      type: Number,
      default: 9,
      validator: val => val >= 0 && val <= 9
    }
  },
  computed: {
    coloredClasses: function () {
      let classes = []
      if (this.color) {
        classes.push(`${this.color}-colored`)
      }
      classes.push(`s${this.shade}-shaded`) // Classes cannot start with number
      return classes
    }
  }
}
