<template>
  <Grid density="sparse">
    <GridCell
      :span-set="[12, 4, 4, 4, 4]"
      v-for="(prop, index) in radii"
      :key="index">
      <Radius
        :name="prop.name"
        :value="prop.value"
        :comment="prop.comment"/>
    </GridCell>
  </Grid>
</template>

<script>
  import sortBy from 'lodash/sortBy'

  import Radius from '@/tokens/Radii/Radius'
  import Grid from '@/layouts/Grid/Grid'
  import GridCell from '@/layouts/Grid/GridCell'

  import designTokens from '@creativecommons/vocabulary/tokens/tokens.raw.json'

  /**
   * ### Radii soften edges.
   *
   * While sharp cuts and right-angled corners may define CC Vocabulary, we
   * don't have to limit ourselves to them. A splash of smooth rounded corners
   * here and there just adds variety to the interface and looks incredibly
   * aesthetic.
   */
  export default {
    name: 'Radii',
    components: {
      GridCell,
      Grid,
      Radius
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
        radii: this.extractRadii(designTokens.props)
      }
    },
    methods: {
      extractRadii: function (data) {
        return sortBy(
          data,
          [
            'category',
            function (space) {
              let roundLevels = [
                'small',
                'normal',
                'large'
              ]
              for (let i = 0; i < roundLevels.length; i++) {
                if (space.name.endsWith(roundLevels[i])) {
                  return i
                }
              }
              return Math.floor(roundLevels.length / 2)
            }
          ]
        ).filter(
          token => token.type === 'size' &&
            token.category.includes(`radius-group-${this.category}`)
        )
      }
    }
  }
</script>
