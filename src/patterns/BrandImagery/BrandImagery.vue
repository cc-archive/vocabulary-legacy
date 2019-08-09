<template>
  <ImageView
    v-bind="$attrs"
    class="brand-imagery"
    :source="svgSource"
    alternate-text="Logo"
    :size="$attrs.size || 'normal'"/>
</template>

<script>
  import ImageView from '@/elements/ImageView/ImageView'

  /**
   * ### Brand imagery provides recognition.
   *
   * A brand is known by its logo. When you think of a brand, the logo is what
   * you will visualise, and as a picture is worth is a thousand words, a logo
   * is worth your entire brand.
   */
  export default {
    name: 'BrandImagery',
    components: {
      ImageView
    },
    inheritAttrs: false,
    props: {
      /**
       * _the name of the brand whose imagery is being displayed_
       *
       * ∈ {`'cc'`, `'vocabulary'`}
       */
      brand: {
        type: String,
        default: 'cc',
        validator: val => ['cc', 'vocabulary'].includes(val)
      },
      /**
       * _the type of imagery to display_
       *
       * ∈ {`'wordmark'`, `'lettermark'`, `'letterheart'`}
       */
      type: {
        type: String,
        default: 'wordmark',
        validator: val => [
          'wordmark',
          'lettermark',
          'letterheart'
        ].includes(val)
      },
      /**
       * _the color of the image to display_
       *
       * ∈ {`'black'`, `'white'`}
       */
      color: {
        type: String,
        validator: val => [
          'white',
          'black'
        ],
        required: true
      }
    },
    computed: {
      svgSource: function () {
        return require(
          `@/assets/logo/${this.brand}/${this.type}_${this.color}.svg`
        )
      }
    }
  }
</script>
