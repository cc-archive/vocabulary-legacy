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
  import Branded from '@/mixins/branded'
  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'

  /**
   * ### Headings title the content under them.
   *
   * They are often short, punchy and attractive, summarising the content under
   * them as well as keeping a user's attention.
   */
  export default {
    name: 'Heading',
    mixins: [
      Branded,
      Colored,
      Indicating
    ],
    props: {
      /**
       * _the prominence of the heading in the page hierarchy_
       *
       * ⩾ 1 and ⩽ 6
       */
      level: {
        type: Number,
        default: 6,
        validator: val => val >= 1 && val <= 6
      },
      color: {
        default: 'inherit' // Overriding mixin Colored
      }
    },
    computed: {
      headingClasses: function () {
        return [
          ...this.brandedClasses,
          ...this.coloredClasses,
          ...this.indicatingClasses
        ]
      },

      tag: function () {
        return `h${this.level}`
      }
    }
  }
</script>

<style src="@creativecommons/vocabulary/css/elements/Heading.css">
</style>
