<template>
    <Grid>
      <GridCell
        :spanSet="[12, 3, 3]"
        v-for="(prop, index) in colors"
        :key="index">
        <Color
          :name="prop.name"
          :value="prop.value"/>
      </GridCell>
    </Grid>
</template>

<script>
  import sortBy from 'lodash/sortBy'

  import Color from '@/tokens/Color/Color'
  import Grid from '@/layouts/Grid/Grid'
  import GridCell from '@/layouts/Grid/GridCell'

  import designTokens from '@/assets/tokens/tokens.raw.json'

  /**
   * ## Colors add pizzazz.
   *
   * Vocabulary is the design system of Creative Commons, and as such is infused
   * with color throughout the project. There are a number of bright colours,
   * with their lighter and darker shades. There are also a set of color tones
   * in greyscale and some colors with contextual meaning.
   */
  export default {
    name: 'Colors',
    components: {
      GridCell,
      Grid,
      Color
    },
    props: {
      /**
       * _the substring of the category to filter based on_
       *
       * Here `'tones'` refers to greyscale colors and `'context'` refers to
       * colors have have certain contextual connotations.
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
