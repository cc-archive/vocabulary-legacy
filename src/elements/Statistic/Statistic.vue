<template>
  <div class="vocab statistic" :class="statisticClasses">
    <div class="bit value" :class="valueWrapperClasses">
      <span class="value addons" v-if="hasValueAddons">
        <!-- @slot Value addons go here -->
        <slot name="valueAddons">
          <FontAwesomeIcon
            v-if="iconSet[0]"
            :icon="iconSet[0]"
            fixed-width/>
        </slot>
      </span>
      <span class="value">
        <!-- @slot Value goes here -->
        <slot>{{ value }}</slot>
      </span>
    </div>
    <div class="bit label">
      <span class="addons label" v-if="hasLabelAddons">
        <!-- @slot Label addons go here -->
        <slot name="labelAddons">
          <FontAwesomeIcon
            v-if="iconSet[1]"
            :icon="iconSet[1]"
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

  import Branded from '@/mixins/branded'
  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'

  import Invertible from '@/mixins/invertible'

  library.add(faChartLine)

  /**
   * ### Statistics are bits of math trivia.
   *
   * Statistics present an aesthetic way to present individual bits of numerical
   * data pertaining to the app or website such as traffic, eyeballs or content.
   */
  export default {
    name: 'Statistic',
    mixins: [
      Branded,
      Colored,
      Indicating,

      Invertible
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
        default: () => [null, null]
      }
    },
    computed: {
      statisticClasses: function () {
        return [
          ...this.brandedClasses,
          ...this.coloredClasses,
          ...this.indicatingClasses,

          ...this.invertibleClasses,

          {
            'plural': this.isPlural
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

      hasValueAddons: function () {
        return this.iconSet[0] || this.$slots.valueAddons
      },
      hasLabelAddons: function () {
        return this.iconSet[1] || this.$slots.labelAddons
      }
    }
  }
</script>

<style src="@creativecommons/vocabulary/css/elements/Statistic.css">
</style>
