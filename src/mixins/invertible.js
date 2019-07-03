export default {
  props: {
    /**
     * _whether the component appears on a dark or non-white background_
     *
     * This essentially overrides the color, setting it to `'white'`.
     */
    isInverted: {
      type: Boolean,
      default: false
    }
  }
}
