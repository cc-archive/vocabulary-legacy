<template>
  <Card
    class="vocab radius"
    :heading="properName"
    :subheading="comment"
    is-decked
    is-raised>
    <div class="rectangle" :style="rectangleStyles"></div>
    <template #foot>
      <code>{{ value }}</code><br/>
      <code>${{ styleName }}</code>
    </template>
  </Card>
</template>

<script>
  import startCase from 'lodash/startCase'

  import Card from '@/patterns/Card/Card'

  export default {
    name: 'Radius',
    components: {
      Card
    },
    props: {
      /**
       * _the name of the radius being showcased_
       */
      name: {
        type: String,
        required: true
      },
      /**
       * _the radius being showcased_
       */
      value: {
        type: String,
        required: true
      },
      /**
       * _some description of the radius being showcased_
       */
      comment: {
        type: String,
        required: true
      }
    },
    computed: {
      /**
       * the capitalised name to show to the viewer
       */
      properName: function () {
        return startCase(
          this.name.replace(/_/g, ' ').replace(/(r)?radius/g, '')
        )
      },
      /**
       * the stylesheet variable name for this space
       */
      styleName: function () {
        return this.name.replace(/_/g, '-')
      },
      /**
       * the JSS style dictionary to apply to the rectangle
       */
      rectangleStyles: function () {
        let styleDict = {}
        styleDict.borderRadius = this.value
        return styleDict
      }
    }
  }
</script>

<style lang="stylus" src="./Radius.styl">
</style>
