export default {
  props: {
    /**
     * _the brand color for the component_
     *
     * ∈ {`'blue'`, `'forest'`, `'gold'`, `'orange'`, `'tomato'`, `'turquoise'`, `'slate'`}
     */
    brand: {
      type: String,
      validator: val => [
        'blue',
        'forest',
        'gold',
        'orange',
        'tomato',
        'turquoise',
        'slate'
      ].includes(val)
    }
  },
  computed: {
    brandedClasses: function () {
      let classes = []
      if (this.brand) {
        classes.push(`${this.brand}-branded`)
      }
      return classes
    }
  }
}
