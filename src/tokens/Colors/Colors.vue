<template>
  <div class="colors">
    <Color
      v-for="(prop, index) in colors"
      :key="index"
      :name="prop.name"
      :value="prop.value"/>
  </div>
</template>

<script>
  import sortBy from 'lodash/sortBy'

  import Color from '@/tokens/Color/Color'

  import designTokens from '@/assets/tokens/tokens.raw.json'

  export default {
    name: 'Colors',
    components: {
      Color
    },
    props: {
      /**
       * the substring of the category to filter based on
       */
      category: {
        type: String,
        required: true
      }
    },
    methods: {
      extractColors: function (data) {
        return sortBy(
          data,
          ['name', 'category']
        ).filter(
          token => token.type === 'color' &&
            token.category.includes(this.category)
        )
      }
    },
    data: function () {
      return {
        colors: this.extractColors(designTokens.props)
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Colors.styl">
</style>
