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
      Raisable
    ],
    props: {
      /**
       * _whether the section should take only as much width as it requires_
       */
      isCompact: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      sectionClasses: function () {
        return [
          this.color,
          this.shade,
          {
            'basic': this.isBasic,
            'rounded': this.isRounded,
            'raised': this.isRaised,
            'inverted': this.isInverted,
            'compact': this.isCompact
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" src="./Section.styl">
</style>
