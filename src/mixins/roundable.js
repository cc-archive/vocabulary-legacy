export default {
  props: {
    /**
     * _whether to round the corner of the component_
     */
    isRounded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    roundableClasses: function () {
      return [
        {
          'rounded': this.isRounded
        }
      ]
    }
  }
}
