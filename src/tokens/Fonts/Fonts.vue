<template>
  <div class="vocab fonts">
    <Font
      v-for="(props, index) in values"
      :key="index"
      :property="property"
      :name="props.name"
      :value="props.value"/>
  </div>
</template>

<script>
  import sortBy from 'lodash/sortBy'

  import Font from '@/tokens/Font/Font'

  import designTokens from '@/assets/tokens/tokens.raw.json'

  /**
   * ## Fonts add personality to text.
   *
   * Vocabulary is completely based on 'Source Sans Pro' by Adobe as the body
   * font, with fallback on 'Arial', 'Helvetica Neue', 'Helvetica' and finally,
   * if all else fails, the generic `sans-serif` font family.
   */
  export default {
    name: 'Fonts',
    components: {
      Font
    },
    props: {
      /**
       * _the property of the font being showcased_
       *
       * ∈ {`'size'`, `'weight'`}
       */
      property: {
        type: String,
        validator: val => ['size', 'weight'].includes(val),
        required: true
      }
    },
    methods: {
      extractFontProperty: function (data) {
        return sortBy(
          data,
          ['value']
        ).filter(
          token => token.category.includes(`font-${this.property}`)
        )
      }
    },
    data: function () {
      return {
        values: this.extractFontProperty(designTokens.props, this.property)
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Fonts.styl">
</style>
