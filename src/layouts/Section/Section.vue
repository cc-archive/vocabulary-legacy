<template>
  <div class="vocab section" :class="sectionClasses">
    <!-- @slot Content goes here -->
    <slot/>
  </div>
</template>

<script>
  import Branded from '@/mixins/branded'
  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'
  import Rounded from '@/mixins/rounded'
  import Simplified from '@/mixins/simplified'

  import Invertible from '@/mixins/invertible'
  import Raisable from '@/mixins/raisable'

  /**
   * ### Sections are groupings of related content.
   *
   * A section marks portions of the screen containing related content by the
   * use of borders, spacing and dividers.
   */
  export default {
    name: 'Section',
    mixins: [
      Branded,
      Colored,
      Indicating,
      Rounded,
      Simplified,

      Invertible,
      Raisable
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
       * ∈ {`'top'`, `'right'`, `'bottom'`, `'left'`, `'none'`}
       */
      colorSide: {
        type: String,
        default: 'top',
        validator: val => ['top', 'right', 'bottom', 'left'].includes(val)
      }
    },
    computed: {
      processedColorSide: function () {
        if (this.brand || this.color || this.indication) {
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
          ...this.brandedClasses,
          ...this.coloredClasses,
          ...this.indicatingClasses,
          ...this.roundedClasses,
          ...this.simplifiedClasses,

          ...this.invertibleClasses,
          ...this.raisableClasses,

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

<style src="@creativecommons/vocabulary/css/layouts/Section.css">
</style>
