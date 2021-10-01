export default {
  props: {
    /**
     * _whether to change the shape of the component into a circle_
     */
    isCircular: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    circleableClasses() {
      return [
        {
          circular: this.isCircular,
        },
      ];
    },
  },
};
