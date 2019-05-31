<template>
  <!-- TODO Make card -->
  <div class="font">
    <div class="demo" :style="style">
      When we share, everyone wins
    </div>
    <div class="description">
      <Heading :level="6">
        {{ properName }}
      </Heading>
      <p>
        <strong>Value:</strong><code> {{ value }}</code>
        <br>
        <strong>Style:</strong><code> ${{ styleName }}</code>
      </p>
    </div>
  </div>
</template>

<script>
  import camelCase from 'lodash/camelCase'
  import startCase from 'lodash/startCase'

  import Heading from '@/elements/Heading/Heading'

  export default {
    name: 'Font',
    components: {
      Heading
    },
    props: {
      /**
       * the font property being showcased
       */
      property: {
        type: String,
        required: true
      },
      /**
       * the name of the value being showcased
       */
      name: {
        type: String,
        required: true
      },
      /**
       * the actual value being showcased
       */
      value: {
        type: String,
        required: true
      }
    },
    computed: {
      /**
       * the capitalised name to show to the viewer
       */
      properName: function () {
        return startCase(this.name.replace(/_/g, ' ').replace(/color/g, ''))
      },
      /**
       * the Stylus style name for this value
       */
      styleName: function () {
        return this.name.replace(/_/g, '-')
      },
      /**
       * the JSS style dictionary to apply to the demo
       */
      style: function () {
        let styleDict = {}
        styleDict[this.properProperty] = this.value
        return styleDict
      },
      /**
       * the camel cased property name to use in the JSS swatch
       */
      properProperty: function () {
        return camelCase(this.property)
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Font.styl">
</style>
