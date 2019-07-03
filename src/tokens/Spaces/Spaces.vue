<template>
  <div class="vocab spaces">
    <Space
      v-for="(prop, index) in colors"
      :key="index"
      :name="prop.name"
      :value="prop.value"/>
  </div>
</template>

<script>
  import sortBy from 'lodash/sortBy'

  import Space from '@/tokens/Space/Space'

  import designTokens from '@/assets/tokens/tokens.raw.json'

  /**
   * ## Spaces provide readability.
   *
   * Vocabulary is meant to be readable, and whitespaces are of paramount
   * importance in readability considerations. Vocabulary provides a number of
   * standard spaces in different units to ensure consistency in the whitespaces
   * throughout the project.
   */
  export default {
    name: 'Spaces',
    components: {
      Space
    },
    props: {
      /**
       * _the units of the value to filter based on_
       *
       * ∈ {`'rem'`, `'em'`}
       */
      units: {
        type: String,
        validator: val => ['em', 'rem'].includes(val),
        required: true
      }
    },
    methods: {
      extractSpaces: function (data) {
        let spaces = sortBy(
          data,
          ['name', 'category']
        ).filter(
          token => token.type === 'size' &&
            token.category === 'spacing'
        )

        if (this.units === 'em') {
          spaces = spaces.filter(
            token => !token.value.includes('rem') || token.value === '0'
          )
        } else {
          spaces = spaces.filter(
            token => token.value.includes('rem') || token.value === '0'
          )
        }

        return spaces
      }
    },
    data: function () {
      return {
        colors: this.extractSpaces(designTokens.props)
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Spaces.styl">
</style>
