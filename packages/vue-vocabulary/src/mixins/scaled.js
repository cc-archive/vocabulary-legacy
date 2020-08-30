export default {
  props: {
    /**
     * _the size of the component_
     *
     * ∈ {`'small'`, `'normal'`, `'big'`, `'large'`, `'huge'`, `'enormous'`,
     * `'gigantic'`, `'mega'`}
     */
    size: {
      type: String,
      default: 'normal',
      validator: val => [
        'small',
        'normal',
        'big',
        'large',
        'huge',
        'enormous',
        'gigantic',
        'mega'
      ].includes(val)
    }
  },
  computed: {
    scaledClasses: function () {
      let classes = []
      if (this.size) {
        classes.push(`${this.size}-sized`)
      }
      return classes
    }
  }
}
