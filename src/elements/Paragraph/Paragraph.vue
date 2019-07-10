<template>
  <p class="vocab paragraph" :class="paragraphStyles">
    <!-- @slot Content goes here -->
    <slot/>
  </p>
</template>

<script>
  import Invertible from '@/mixins/invertible'
  import Colorable from '@/mixins/colorable'

  /**
   * ## Paragraphs are meaningful blocks of text.
   *
   * In a paragraph, you write your heart out. You go into details, describe the
   * matter and get the entire bulk of the message across.
   */
  export default {
    name: 'Paragraph',
    mixins: [
      Invertible,
      Colorable
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
      }
    },
    computed: {
      paragraphStyles: function () {
        return [
          this.color,
          this.shade,
          this.density,
          {
            'inverted': this.isInverted
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" src="./Paragraph.styl">
</style>
