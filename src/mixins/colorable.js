export default {
  props: {
    /**
     * _the font color for the text_
     *
     * ∈ {`'blue'`, `'green'`, `'magenta'`, `'olive'`, `'orange'`, `'purple'`,
     * `'red'`, `'sand'`, `'yellow'`}
     *
     * If the color is not specified, it is inherited from the parent.
     */
    color: {
      type: String,
      validator: val => [
        'blue',
        'green',
        'magenta',
        'olive',
        'orange',
        'purple',
        'red',
        'sand',
        'yellow'
      ].includes(val)
    },
    /**
     * _the shade of the color to use for the text_
     *
     * ∈ {`'light'`, `'dark'`, `'darker'`}
     *
     * If the shade is not specified, the base color will be used.
     */
    shade: {
      type: String,
      validator: val => [
        'light',
        'dark',
        'darker'
      ].includes(val)
    }
  }
}
