<template>
  <div class="spaces">
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

  export default {
    name: 'Spaces',
    components: {
      Space
    },
    props: {
      /**
       * the units of the value to filter based on
       */
      units: {
        type: String,
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
