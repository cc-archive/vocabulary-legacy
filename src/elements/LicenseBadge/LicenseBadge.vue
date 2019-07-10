<template>
  <img class="vocab license-badge" :class="licenseBadgeClasses" :src="svg" :alt="`${license}`.toUpperCase()">
</template>

<script>
  /**
   * ## License badges are hieroglyphs for licenses.
   *
   * A license badge represents a license in pictorial form, depicting all the
   * aspects of said license such as shareability and commercial usability.
   */
  export default {
    name: 'LicenseBadge',
    props: {
      /**
       * _the license whose badge is being shown_
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
       * _the size of the badge being displayed_
       *
       * ∈ {`'large'`, `'small'`}
       */
      size: {
        type: String,
        default: 'large'
      },
      /**
       * _whether to center the image when inline with text_
       */
      isCentered: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      licenseBadgeClasses: function () {
        return [
          {
            'centered': this.isCentered
          }
        ]
      },
      svg: function () {
        return require(
          `@/assets/icons/license/badges_${this.size}/${this.license}.svg`
        )
      }
    }
  }
</script>

<style lang="stylus" src="./LicenseBadge.styl">
</style>
