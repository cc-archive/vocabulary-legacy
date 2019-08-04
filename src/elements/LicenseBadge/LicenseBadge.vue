<template>
  <ImageView
    v-bind="$attrs"
    class="license-badge"
    :source="svgSource"
    :alternate-text="`${license}`.toUpperCase()"
    :is-centered="isCentered"/>
</template>

<script>
  import ImageView from '@/elements/ImageView/ImageView'

  /**
   * ### License badges are hieroglyphs for licenses.
   *
   * A license badge represents a license in pictorial form, depicting all the
   * aspects of said license such as shareability and commercial usability.
   */
  export default {
    name: 'LicenseBadge',
    components: {
      ImageView
    },
    inheritAttrs: false,
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
       * _the size-based version of the badge being displayed_
       *
       * ∈ {`'large'`, `'small'`}
       */
      version: {
        type: String,
        default: 'large'
      },
      /**
       * _whether to center the badge when inline with text_
       */
      isCentered: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      svgSource: function () {
        return require(
          `@/assets/icons/license/badges_${this.version}/${this.license}.svg`
        )
      }
    }
  }
</script>
