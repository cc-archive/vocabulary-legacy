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
      group: {
        type: String,
        required: true
      }
    },
    methods: {
      extractColors: function (data) {
        let colors = sortBy(
          data,
          [
            'category',
            function (color) {
              if (color.name.includes('darker')) {
                return 4
              }
              if (color.name.includes('dark')) {
                return 3
              }
              if (color.name.includes('light')) {
                return 1
              }
              return 2
            }
          ]
        ).filter(
          token => token.type === 'color'
        )

        if (this.group === 'tone') {
          colors = colors.filter(
            token => token.category === 'color_group_tone'
          )
        } else if (this.group === 'context') {
          colors = colors.filter(
            token => token.category === 'color_group_context'
          )
        } else {
          colors = colors.filter(
            token => token.category !== 'color_group_tone' &&
              token.category !== 'color_group_context'
          )
        }

        return colors
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
