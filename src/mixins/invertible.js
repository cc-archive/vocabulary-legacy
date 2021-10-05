export default {
  props: {
    /**
     * _whether the component appears on a dark or non-white background_
     *
     * This essentially negates all greyscale colors.
     */
    isInverted: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    invertibleClasses() {
      return [
        {
          inverted: this.isInverted,
        },
      ];
    },
  },
};
