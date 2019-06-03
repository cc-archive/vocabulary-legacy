<template>
  <div class="fonts">
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

  export default {
    name: 'Fonts',
    components: {
      Font
    },
    props: {
      /**
       * the property of the font being showcased
       */
      property: {
        type: String,
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
