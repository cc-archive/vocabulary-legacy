<template>
  <!-- TODO Make card -->
  <div class="space">
    <div class="box" :style="style">
      &nbsp;
    </div>
    <div class="description">
      <Heading :level="6">
        {{ properName }}
      </Heading>
      <p>
        <strong>{{ $t('value') }}:</strong><code> {{ value }}</code>
      </p>
      <p>
        <strong>{{ $t('stylustoken') }}:</strong><code> ${{ styleName }}</code>
      </p>
    </div>
  </div>
</template>

<script>
  import startCase from 'lodash/startCase'

  import Heading from '@/elements/Heading/Heading'

  export default {
    name: 'Space',
    components: {
      Heading
    },
    props: {
      /**
       * the name of the space being showcased
       */
      name: {
        type: String,
        required: true
      },
      /**
       * the space being showcased
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
        return startCase(this.name.replace(/_/g, ' ').replace(/(r)?space/g, ''))
      },
      /**
       * the Stylus style name for this space
       */
      styleName: function () {
        return this.name.replace(/_/g, '-')
      },
      /**
       * the JSS style dictionary to apply to the box
       */
      style: function () {
        let styleDict = {}
        styleDict['height'] = this.value
        return styleDict
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Space.styl">
</style>

<i18n src="./lang.json">
</i18n>
