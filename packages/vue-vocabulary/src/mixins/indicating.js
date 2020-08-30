export default {
  props: {
    /**
     * _the state to indicate the component in_
     *
     * ∈ {`'negative'`, `'positive'`, `'probably'`}
     */
    indication: {
      type: String,
      validator: val => ['negative', 'positive', 'probably'].includes(val)
    }
  },
  computed: {
    indicatingClasses: function () {
      let classes = []
      if (this.indication) {
        classes.push(`${this.indication}-indicating`)
      }
      return classes
    }
  }
}
