export default {
  props: {
    /**
     * _whether to disable input on the component_
     */
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    disableableClasses: function () {
      return [
        {
          'disabled': this.isDisabled
        }
      ]
    }
  }
}
