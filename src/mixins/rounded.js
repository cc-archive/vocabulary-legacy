export default {
  props: {
    /**
     * _the amount of curvature on the vertices of the component_
     *
     * ∈ {`'slight'`, `'complete'`}
     */
    roundness: {
      type: String,
      validator: val => ['slight', 'complete'].includes(val)
    }
  },
  computed: {
    roundedClasses: function () {
      let classes = []
      if (this.roundness) {
        classes.push(`${this.roundness}ly-rounded`)
      }
      return classes
    }
  }
}
