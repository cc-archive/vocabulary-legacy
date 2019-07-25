<template>
  <div class="vocab section" :class="sectionClasses">
    <!-- @slot Content goes here -->
    <slot>
      &nbsp;
    </slot>
  </div>
</template>

<script>
  import Basicable from '@/mixins/basicable'
  import Roundable from '@/mixins/roundable'
  import Invertible from '@/mixins/invertible'
  import Colorable from '@/mixins/colorable'
  import Raisable from '@/mixins/raisable'
  import Indicatable from '@/mixins/indicatable'

  /**
   * ## Sections are groupings of related content.
   *
   * A section marks portions of the screen containing related content by the
   * use of borders, spacing and dividers.
   */
  export default {
    name: 'Section',
    mixins: [
      Basicable,
      Roundable,
      Colorable,
      Invertible,
      Raisable,
      Indicatable
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
       * ∈ {`'top'`, `'bottom'`}
       */
      colorSide: {
        type: String,
        validator: val => ['top', 'bottom'].includes(val)
      }
    },
    computed: {
      processedColorSide: function () {
        if (this.color && this.colorSide === '') {
          return 'top'
        } else {
          return this.colorSide
        }
      },
      sectionClasses: function () {
        return [
          this.color,
          this.shade,
          this.processedColorSide,
          this.indication,
          {
            'basic': this.isBasic,
            'rounded': this.isRounded,
            'raised': this.isRaised,
            'inverted': this.isInverted,
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
