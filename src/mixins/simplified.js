export default {
  props: {
    /**
     * _the amount of simplicity in the appearance of the component_
     *
     * ∈ {`'slight'`, `'extreme'`}
     */
    simplicity: {
      type: String,
      validator: val => ['slight', 'extreme'].includes(val)
    }
  },
  computed: {
    simplifiedClasses: function () {
      let classes = []
      if (this.simplicity) {
        classes.push(`${this.simplicity}ly-simple`)
      }
      return classes
    }
  }
}
