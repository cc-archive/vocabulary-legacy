export default {
  props: {
    /**
     * _whether the component should appear raised by means of a shadow_
     */
    isRaised: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    raisableClasses: function () {
      return [
        {
          'raised': this.isRaised
        }
      ]
    }
  }
}
