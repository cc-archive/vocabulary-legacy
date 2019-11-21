<template>
  <Grid
    :class="gridClasses">
    <GridCell
      :span-set="spanSet"
      v-for="(prop, index) in colors"
      :key="index">
      <Color
        :name="prop.name"
        :value="prop.value"
        :comment="prop.comment"
        :category="category"/>
    </GridCell>
  </Grid>
</template>

<script>
  import sortBy from 'lodash/sortBy'

  import Color from '@/tokens/Colors/Color'
  import Grid from '@/layouts/Grid/Grid'
  import GridCell from '@/layouts/Grid/GridCell'

  import designTokens from '@/assets/tokens/tokens.raw.json'

  /**
   * ### Colors add pizzazz.
   *
   * CC Vocabulary is the design system of Creative Commons, and is infused
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
       * ∈ {`'hue'`, `'tone'`, `'context'`, `'overlay'`}
       */
      category: {
        type: String,
        validator: val => ['hue', 'tone', 'context', 'overlay'].includes(val),
        required: true
      }
    },
    data: function () {
      return {
        colors: this.extractColors(designTokens.props)
      }
    },
    computed: {
      gridClasses: function () {
        return [
          `${this.category}-category`
        ]
      },
      spanSet: function () {
        if (this.category === 'context' || this.category === 'hue') {
          return [12, 6, 4, 4, 4]
        } else {
          return [12, 6, 3, 3, 3]
        }
      }
    },
    methods: {
      extractColors: function (data) {
        return sortBy(
          data,
          [
            'category',
            function (color) {
              let shadeLevels = [
                'default',
                'tone_white', 'near_white', 'lighter', 'light',
                'white_low', 'white_high',
                'normal',
                'black_high', 'black_low',
                'dark', 'darker', 'near_black', 'tone_black'
              ]
              for (let i = 0; i < shadeLevels.length; i++) {
                if (color.name.endsWith(shadeLevels[i])) {
                  return i
                }
              }
              return Math.floor(shadeLevels.length / 2)
            }
          ]
        ).filter(
          token => token.type === 'color' &&
            token.category.includes(`color-group-${this.category}`)
        )
      }
    }
  }
</script>
