<template>
  <Grid density="sparse">
    <GridCell
      :span-set="[12, 4, 4, 4, 4]"
      v-for="(prop, index) in spaces"
      :key="index">
      <Space
        :name="prop.name"
        :value="prop.value"
        :comment="prop.comment"/>
    </GridCell>
  </Grid>
</template>

<script>
  import sortBy from 'lodash/sortBy'

  import Space from '@/tokens/Spaces/Space'
  import Grid from '@/layouts/Grid/Grid'
  import GridCell from '@/layouts/Grid/GridCell'

  import designTokens from '@/assets/tokens/tokens.raw.json'

  /**
   * ### Spaces provide readability.
   *
   * CC Vocabulary is meant to be readable, and whitespaces are of paramount
   * importance in readability considerations. There are a number of standard
   * spaces in different units to ensure consistency in the whitespaces
   * throughout the project.
   */
  export default {
    name: 'Spaces',
    components: {
      GridCell,
      Grid,
      Space
    },
    props: {
      /**
       * _the substring of the category to filter based on_
       *
       * ∈ {`'rem'`, `'em'`, `'special'`}
       */
      category: {
        type: String,
        validator: val => ['em', 'rem', 'special'].includes(val),
        required: true
      }
    },
    data: function () {
      return {
        spaces: this.extractSpaces(designTokens.props)
      }
    },
    methods: {
      extractSpaces: function (data) {
        return sortBy(
          data,
          [
            'category',
            function (space) {
              let gapLevels = [
                'smaller', 'small',
                'normal',
                'large', 'larger'
              ]
              for (let i = 0; i < gapLevels.length; i++) {
                if (space.name.endsWith(gapLevels[i])) {
                  return i
                }
              }
              return Math.floor(gapLevels.length / 2)
            }
          ]
        ).filter(
          token => token.type === 'size' &&
            token.category.includes(`space-group-${this.category}`)
        )
      }
    }
  }
</script>
