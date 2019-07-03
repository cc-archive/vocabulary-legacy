<template>
  <div
    :is="tag"
    class="vocab heading"
    :class="headingClasses">
    <!-- @slot Content goes here -->
    <slot/>
  </div>
</template>

<script>
  import Invertible from '@/mixins/invertible'
  import Colorable from '@/mixins/colorable'

  /**
   * ## Headings title the content under them.
   *
   * They are often short, punchy and attractive, summarising the content under
   * them as well as keeping a user's attention.
   */
  export default {
    name: 'Heading',
    mixins: [
      Invertible,
      Colorable
    ],
    props: {
      /**
       * _the prominence of the heading in the page hierarchy_
       *
       * ⩾ 1 and ⩽ 6
       */
      level: {
        type: Number,
        required: true,
        validator: val => val >= 1 && val <= 6
      }
    },
    computed: {
      tag: function () {
        return `h${this.level}`
      },
      headingClasses: function () {
        return [
          this.color,
          this.shade,
          {
            'inverted': this.isInverted
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" src="./Heading.styl">
</style>
