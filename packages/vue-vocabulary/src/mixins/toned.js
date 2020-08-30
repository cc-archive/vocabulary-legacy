export default {
  props: {
    /**
     * _the shade of grey to use_
     *
     *  ⩾ 0 and ⩽ 9
     */
    tone: {
      type: Number,
      validator: val => val >= 0 && val <= 9
    }
  },
  computed: {
    tonedClasses: function () {
      let classes = []
      if (this.tone) {
        classes.push(`t${this.tone}-toned`) // Classes cannot start with number
      }
      return classes
    }
  }
}
