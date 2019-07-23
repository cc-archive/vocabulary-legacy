<template>
  <div class="vocab statistic" :class="statisticClasses">
    <div class="value-wrapper" :class="valueWrapperClasses">
      <span class="value-addons" v-if="hasValueAddons">
        <!-- @slot Value addons go here -->
        <slot name="valueAddons">
          <FontAwesomeIcon
            v-if="hasValueIcon"
            :icon="['fas', iconSet[0]]"
            fixed-width/>
        </slot>
      </span>
      <span class="value">
        <!-- @slot Value goes here -->
        <slot>{{ value }}</slot>
      </span>
    </div>
    <div class="label-wrapper">
      <span class="label-addons" v-if="hasLabelAddons">
        <!-- @slot Label addons go here -->
        <slot name="labelAddons">
          <FontAwesomeIcon
            v-if="hasLabelIcon"
            :icon="['fas', iconSet[1]]"
            fixed-width/>
        </slot>
      </span>
      <span class="label">
        <!-- @slot Label goes here -->
        <slot name="label">{{ label }}</slot>
      </span>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faChartLine } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Colorable from '@/mixins/colorable'
  import Invertible from '@/mixins/invertible'
  import Indicatable from '@/mixins/indicatable'

  library.add(faChartLine)

  /**
   * ## Statistics are bits of math trivia.
   *
   * Statistics present an aesthetic way to present individual bits of numerical
   * data pertaining to the app or website such as traffic, eyeballs or content.
   */
  export default {
    name: 'Statistic',
    mixins: [
      Colorable,
      Invertible,
      Indicatable
    ],
    components: {
      FontAwesomeIcon
    },
    props: {
      /**
       * _the value of the statistic_
       */
      value: {
        type: String
      },
      /**
       * _the area in which the statistic is defined_
       */
      label: {
        type: String
      },
      /**
       * _whether the value is text-based or numeral-based_
       *
       * Text based values have smaller font sizes to accommodate more data.
       */
      isTextualValue: {
        type: Boolean,
        default: false
      },
      /**
       * _whether the statistic appears with other statistics in a grid_
       */
      isPlural: {
        type: Boolean,
        default: false
      },
      /**
       * _an array specifying the value and label icon_
       *
       * Use '' to omit the icon.
       */
      iconSet: {
        type: Array,
        validator: val => val.length === 2,
        default: () => ['', '']
      }
    },
    computed: {
      statisticClasses: function () {
        return [
          this.color,
          this.shade,
          this.indication,
          {
            'plural': this.isPlural,
            'inverted': this.isInverted
          }
        ]
      },
      valueWrapperClasses: function () {
        return [
          {
            'textual': this.isTextualValue
          }
        ]
      },
      hasValueIcon: function () {
        return this.iconSet[0] !== ''
      },
      hasValueAddons: function () {
        return this.hasValueIcon || this.$slots.valueAddons
      },
      hasLabelIcon: function () {
        return this.iconSet[1] !== ''
      },
      hasLabelAddons: function () {
        return this.hasLabelIcon || this.$slots.labelAddons
      }
    }
  }
</script>

<style lang="stylus" src="./Statistic.styl">
</style>
