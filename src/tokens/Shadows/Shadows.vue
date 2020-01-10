<template>
  <Grid density="sparse">
    <GridCell
      :span-set="[12, 4, 4, 4, 4]"
      v-for="(prop, index) in shadows"
      :key="index">
      <Shadow
        :name="prop.name"
        :value="prop.value"
        :comment="prop.comment"/>
    </GridCell>
  </Grid>
</template>

<script>
  import sortBy from 'lodash/sortBy'

  import Shadow from '@/tokens/Shadows/Shadow'
  import Grid from '@/layouts/Grid/Grid'
  import GridCell from '@/layouts/Grid/GridCell'

  import designTokens from '@creativecommons/vocabulary/tokens/tokens.raw.json'

  /**
   * ### Shadows elevate content.
   *
   * CC Vocabulary allows for content to have a 3D position, making it easy to
   * raise emphasised content above the bulk of the page via the illusion of
   * a shadow. Different objects at different heights cast differing shadows.
   */
  export default {
    name: 'Shadows',
    components: {
      GridCell,
      Grid,
      Shadow
    },
    data: function () {
      return {
        shadows: this.extractShadows(designTokens.props)
      }
    },
    methods: {
      extractShadows: function (data) {
        return sortBy(
          data,
          [
            'category',
            'value'
          ]
        ).filter(
          token => token.type === 'string' &&
            token.category.includes('box-shadow')
        )
      }
    }
  }
</script>
