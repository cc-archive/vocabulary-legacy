export default {
  props: {
    /**
     * _whether to disable input on the component_
     */
    isDisabled: {
      type: Boolean,
      default: false
    },
    /**
     * _whether to disable input on the component while preserving readability_
     */
    isReadOnly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    unactionableClasses: function () {
      return [
        {
          'disabled': this.isDisabled,
          'read-only': this.isReadOnly
        }
      ]
    }
  }
}
