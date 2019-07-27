<template>
    <Card
            class="vocab space"
            :heading="properName"
            :subheading="comment"
            is-decked
            is-raised>
        <div class="box" :style="boxStyles"></div>
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
    name: 'Space',
    components: {
      Card
    },
    props: {
      /**
       * _the name of the space being showcased_
       */
      name: {
        type: String,
        required: true
      },
      /**
       * _the space being showcased_
       */
      value: {
        type: String,
        required: true
      },
      /**
       * _some description of the space being showcased_
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
          this.name.replace(/_/g, ' ').replace(/(r)?space/g, '')
        )
      },
      /**
       * the stylesheet variable name for this space
       */
      styleName: function () {
        return this.name.replace(/_/g, '-')
      },
      /**
       * the JSS style dictionary to apply to the box
       */
      boxStyles: function () {
        let styleDict = {}
        styleDict.height = this.value
        return styleDict
      }
    }
  }
</script>

<style lang="stylus" src="./Space.styl">
</style>
