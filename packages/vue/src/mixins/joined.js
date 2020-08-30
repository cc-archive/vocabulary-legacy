export default {
  props: {
    /**
     * _the side on which the component is connected to other components_
     *
     * ∈ {`'left'`, `'right'`, `'both'`}
     */
    joinSide: {
      type: String,
      validator: val => [
        'left',
        'right',
        'both'
      ].includes(val)
    }
  },
  computed: {
    joinClasses: function () {
      let classes = []
      if (this.joinSide) {
        classes.push(`${this.joinSide}-joined`)
      }
      return classes
    }
  }
}
