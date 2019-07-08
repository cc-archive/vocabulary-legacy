export default {
  props: {
    /**
     * _the size of the component_
     *
     * ∈ {`'small'`, `'big'`, `'large'`, `'huge'`, `'enormous'`, `'gigantic'`,
     * `'mega'`}
     */
    size: {
      type: String,
      default: 'normal',
      validator: val => [
        'small',
        'normal',
        'big',
        'large',
        'huge',
        'enormous',
        'gigantic',
        'mega'
      ].includes(val)
    }
  }
}
