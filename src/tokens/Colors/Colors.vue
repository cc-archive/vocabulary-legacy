<template>
  <div class="vocab colors">
    <Color
      v-for="(value, key) in colors"
      :key="key"
      :category="category"
      :subcategory="key"
      :colors="value"/>
  </div>
</template>

<script>
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
      Color,
    },
    props: {
      /**
       * _the substring of the category to filter based on_
       *
       * ∈ {`'brand'`, `'function'`, `'tone'`, `'context'`, `'overlay'`}
       */
      category: {
        type: String,
        validator: val => [
          'brand',
          'function',
          'tone',
          'context',
          'overlay'
        ].includes(val),
        required: true
      }
    },
    data: function () {
      return {
        colors: {}
      }
    },
    computed: {
      gridClasses: function () {
        return [
          `${this.category}-category`
        ]
      }
    },
    methods: {
      extractColors: function (data) {
        Object.keys(data)
          .map(key => data[key])
          .filter(token => token.type === 'color' &&
            token.category.includes(`color-group-${this.category}`))
          .forEach(color => {
            let subcategory = color.category.replace(
              new RegExp(`color-group-${this.category}-?`, 'g'),
              ''
            )
            if (!this.colors[subcategory]) {
              this.colors[subcategory] = []
            }
            this.colors[subcategory].push(color)
          })
      }
    },
    created: function () {
      this.extractColors(designTokens.props)
      console.log(this.colors)
    }
  }
</script>
