<template>
  <Card
    class="vocab color"
    :heading="properName"
    :subheading="comment"
    is-decked
    is-raised>
    <div
      class="swatch"
      :style="swatchStyles"
      @click="toggleOverlay"></div>
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
    name: 'Color',
    components: {
      Card
    },
    data: function () {
      return {
        showOverlay: true
      }
    },
    props: {
      /**
       * _the category of the color being showcased_
       */
      category: {
        type: String,
        required: true
      },
      /**
       * _the name of the color being showcased_
       */
      name: {
        type: String,
        required: true
      },
      /**
       * _the color being showcased_
       */
      value: {
        type: String,
        required: true
      },
      /**
       * _some description of the color being showcased_
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
          this.name.replace(/_/g, ' ').replace(/color/g, '')
        )
      },
      /**
       * the stylesheet variable name for this color
       */
      styleName: function () {
        return this.name.replace(/_/g, '-')
      },
      /**
       * the JSS style dictionary to apply to the swatch
       */
      swatchStyles: function () {
        let styleDict = {}
        if (this.category !== 'overlay') {
          styleDict.backgroundColor = this.value
        } else {
          styleDict.backgroundColor = 'rgb(0, 38, 77)'
          if (this.showOverlay) {
            styleDict.backgroundImage = 'linear-gradient(' +
              '135deg,' +
              `transparent 50%, ` +
              `${this.value} 50%` +
              ')'
          }
        }
        return styleDict
      }
    },
    methods: {
      toggleOverlay: function () {
        this.showOverlay = !this.showOverlay
      }
    }
  }
</script>

<style lang="stylus" src="./Color.styl">
</style>
