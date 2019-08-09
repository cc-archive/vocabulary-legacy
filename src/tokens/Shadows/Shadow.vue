<template>
  <Card
    class="vocab shadow"
    :heading="properName"
    :subheading="comment"
    is-decked
    is-raised>
    <div class="saucer" :style="saucerStyles"></div>
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
    name: 'Shadow',
    components: {
      Card
    },
    props: {
      /**
       * _the name of the shadow being showcased_
       */
      name: {
        type: String,
        required: true
      },
      /**
       * _the shadow being showcased_
       */
      value: {
        type: String,
        required: true
      },
      /**
       * _some description of the shadow being showcased_
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
          this.name.replace(/_/g, ' ').replace(/shadow/g, '')
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
      saucerStyles: function () {
        let styleDict = {}
        styleDict.boxShadow = `${this.value} rgb(237, 237, 238)`
        return styleDict
      }
    }
  }
</script>

<style lang="stylus" src="./Shadow.styl">
</style>
