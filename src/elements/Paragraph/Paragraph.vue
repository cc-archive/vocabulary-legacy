<template>
  <p class="vocab paragraph" :class="paragraphClasses">
    <!-- @slot Content goes here -->
    <slot/>
  </p>
</template>

<script>
  import Branded from '@/mixins/branded'
  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'

  /**
   * ### Paragraphs are meaningful blocks of text.
   *
   * In a paragraph, you write your heart out. You go into details, describe the
   * matter and get the entire bulk of the message across.
   */
  export default {
    name: 'Paragraph',
    mixins: [
      Branded,
      Colored,
      Indicating
    ],
    props: {
      /**
       * _whether the line height should be more or less than is default_
       *
       * ∈ {`'sparse'`, `'dense'`}
       */
      density: {
        type: String,
        validator: val => [
          'sparse',
          'dense'
        ].includes(val)
      },
      color: {
        default: 'inherit' // Overriding mixin Colored
      }
    },
    computed: {
      paragraphClasses: function () {
        return [
          ...this.brandedClasses,
          ...this.coloredClasses,
          ...this.indicatingClasses,

          this.density ? `${this.density}-packed` : ''
        ]
      }
    }
  }
</script>

<style lang="stylus" src="./Paragraph.styl">
</style>
