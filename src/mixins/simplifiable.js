export default {
  props: {
    /**
     * _whether to style the component so that it is less prominent_
     */
    isBasic: {
      type: Boolean,
      default: false
    },
    /**
     * _whether to style the component so that it is easy-to-miss_
     */
    isGhost: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    simplifiableClasses: function () {
      return [
        {
          'basic': this.isBasic,
          'ghost': this.isGhost
        }
      ]
    }
  }
}
