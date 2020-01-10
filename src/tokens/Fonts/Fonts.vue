<template>
  <Grid density="sparse">
    <GridCell
      :span-set="[12]"
      v-for="(prop, index) in values"
      :key="index">
      <Font
        :property="property"
        :name="prop.name"
        :value="prop.value"
        :comment="prop.comment"/>
    </GridCell>
  </Grid>
</template>

<script>
  import sortBy from 'lodash/sortBy'

  import Font from '@/tokens/Fonts/Font'
  import Grid from '@/layouts/Grid/Grid'
  import GridCell from '@/layouts/Grid/GridCell'

  import designTokens from '@creativecommons/vocabulary/tokens/tokens.raw.json'

  /**
   * ### Fonts add personality to text.
   *
   * Vocabulary is completely based on [Source Sans Pro by
   * Adobe](https://fonts.google.com/specimen/Source+Sans+Pro) as the body font,
   * with fallback on Arial, Helvetica Neue, Helvetica and finally, if all else
   * fails, the generic `sans-serif` font family. For monospaced content,
   * content [Fira Code by tonsky](https://github.com/tonsky/FiraCode) is
   * preferred for its ligatures, with fallback on the generic `monospace`
   * family.
   */
  export default {
    name: 'Fonts',
    components: {
      GridCell,
      Grid,
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
    data: function () {
      return {
        values: this.extractFontProperty(designTokens.props)
      }
    },
    methods: {
      extractFontProperty: function (data) {
        return sortBy(
          data,
          [
            'value'
          ]
        ).filter(
          token => token.category.includes(`font-${this.property}`)
        )
      }
    }
  }
</script>
