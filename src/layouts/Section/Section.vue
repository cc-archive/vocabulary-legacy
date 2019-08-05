<template>
  <div class="vocab section" :class="sectionClasses">
    <!-- @slot Content goes here -->
    <slot/>
  </div>
</template>

<script>
  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'
  import Invertible from '@/mixins/invertible'
  import Raisable from '@/mixins/raisable'
  import Roundable from '@/mixins/roundable'
  import Simplifiable from '@/mixins/simplifiable'

  /**
   * ### Sections are groupings of related content.
   *
   * A section marks portions of the screen containing related content by the
   * use of borders, spacing and dividers.
   */
  export default {
    name: 'Section',
    mixins: [
      Colored,
      Indicating,
      Invertible,
      Roundable,
      Raisable,
      Simplifiable
    ],
    props: {
      /**
       * _whether the section should take only as much width as it requires_
       */
      isCompact: {
        type: Boolean,
        default: false
      },
      /**
       * _whether the section lacks all padding_
       */
      isClingy: {
        type: Boolean,
        default: false
      },
      /**
       * _which side of the div to highlight with the color_
       *
       * ∈ {`'top'`, `'right'`, `'bottom'`, `'left'`}
       */
      colorSide: {
        type: String,
        validator: val => ['top', 'right', 'bottom', 'left'].includes(val)
      }
    },
    computed: {
      processedColorSide: function () {
        if (this.color || this.indication) {
          if (this.colorSide) {
            return this.colorSide
          } else {
            return 'top'
          }
        } else {
          return ''
        }
      },
      sectionClasses: function () {
        return [
          ...this.coloredClasses,
          ...this.indicatingClasses,
          ...this.invertibleClasses,
          ...this.raisableClasses,
          ...this.roundableClasses,
          ...this.simplifiableClasses,

          this.processedColorSide ? `${this.processedColorSide}-accented` : '',
          {
            'compact': this.isCompact,
            'clingy': this.isClingy
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" src="./Section.styl">
</style>
