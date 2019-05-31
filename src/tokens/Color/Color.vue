<template>
  <!-- TODO Make card -->
  <div class="color">
    <div class="swatch" :style="style">
      &nbsp;
    </div>
    <div class="description">
      <Heading :level="6">
        {{ properName }}
      </Heading>
      <p>
        <strong>Value:</strong><code> {{ value }}</code>
      </p>
      <p>
        <strong>Style:</strong><code> ${{ styleName }}</code>
      </p>
    </div>
  </div>
</template>

<script>
  import startCase from 'lodash/startCase'

  import Heading from '@/elements/Heading/Heading'

  export default {
    name: 'Color',
    components: {
      Heading
    },
    props: {
      /**
       * the name of the color being showcased
       */
      name: {
        type: String,
        required: true
      },
      /**
       * the color being showcased
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
       * the Stylus style name for this color
       */
      styleName: function () {
        return this.name.replace(/_/g, '-')
      },
      /**
       * the JSS style dictionary to apply to the swatch
       */
      style: function () {
        let styleDict = {}
        styleDict['backgroundColor'] = this.value
        return styleDict
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Color.styl">
</style>
