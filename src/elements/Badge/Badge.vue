<template>
  <img :src="svg" :alt="`${license}`.toUpperCase()">
</template>

<script>
  export default {
    name: 'Badge',
    props: {
      /**
       * the license whose badge is being shown
       *
       * ∈ {`'by'`, `'by-nc'`, `'by-nc-nd'`, `'by-nc-sa'`, `'by-nd'`, `'by-sa'`,
       * `'zero'`, `'pd'`}
       */
      license: {
        type: String,
        validator: val => [
          'by',
          'by-nc',
          'by-nc-nd',
          'by-nc-sa',
          'by-nd',
          'by-sa',
          'zero',
          'pd'
        ].includes(val),
        required: true
      },
      /**
       * the size of the badge being displayed
       *
       * ∈ {`'large'`, `'small'`}
       */
      size: {
        type: String,
        default: 'large'
      }
    },
    computed: {
      svg: function () {
        return require(
          `@/assets/icons/license/badges_${this.size}/${this.license}.svg`
        )
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Badge.styl">
</style>
