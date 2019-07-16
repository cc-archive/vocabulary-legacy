export default {
  props: {
    /**
     * _the primary color for the component_
     *
     * ∈ {`'blue'`, `'green'`, `'magenta'`, `'olive'`, `'orange'`, `'purple'`,
     * `'red'`, `'sand'`, `'yellow'`}
     *
     * If the color is not specified, a default one is chosen as described.
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
     * _the accentuating shade of the primary color to use_
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
