<template>
  <div
    class="vocab progress-bar"
    :class="progressBarClasses">
    <div v-if="hasLeftAddons" class="left addons">
      <!-- @slot Left add-ons go here -->
      <slot name="leftAddons">
        <FontAwesomeIcon
          v-if="icon"
          :icon="icon"
          fixed-width/>
      </slot>
    </div>

    <progress
      v-if="value !== undefined"
      class="bar"
      :class="barClasses"
      :max="max"
      :value="value">
    </progress>
    <progress
      v-else
      class="bar"
      :class="barClasses"
      :max="max">
    </progress>

    <div v-if="hasRightAddons" class="right addons">
      <!-- @slot Right add-ons go here -->
      <slot name="rightAddons">
        {{ percent }}%
      </slot>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'
  import Rounded from '@/mixins/rounded'
  import Scaled from '@/mixins/scaled'

  import Invertible from '@/mixins/invertible'

  library.add(faHourglassHalf)

  /**
   * ### Progress bars inspire patience.
   *
   * Progress bars inform the user of progress or indicate activity. This gives
   * the user some additional patience to wait.
   */
  export default {
    name: 'ProgressBar',
    components: {
      FontAwesomeIcon
    },
    mixins: [
      Colored,
      Indicating,
      Rounded,
      Scaled,

      Invertible
    ],
    props: {
      /**
       * _an icon to use as an add-on for the progress bar_
       */
      icon: {
        type: [String, Array]
      },
      /**
       * _the progress made so far in the task_
       *
       * If not provided, the progress bar takes the indeterminate form.
       */
      value: {
        type: Number,
        validator: val => val >= 0
      },
      /**
       * _the upper limit of value_
       */
      max: {
        type: Number,
        validator: val => val >= 0,
        default: 100
      },
      /**
       * _whether to show the percentage completion of the task_
       *
       * This requires prop `value` to be provided.
       */
      isPercentVisible: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      progressBarClasses: function () {
        return [
          ...this.coloredClasses,
          ...this.indicatingClasses,
          ...this.roundedClasses,
          ...this.scaledClasses,

          ...this.invertibleClasses
        ]
      },
      barClasses: function () {
        return [
          {
            'has-left-addons': this.hasLeftAddons,
            'has-right-addons': this.hasRightAddons
          }
        ]
      },

      hasLeftAddons: function () {
        return this.icon || this.$slots.leftAddons
      },
      hasRightAddons: function () {
        return (this.isPercentVisible && this.percent) ||
          this.$slots.rightAddons
      },

      percent: function () {
        if (!this.value) {
          return null
        }
        return Math.round(this.value / this.max * 100)
      }
    }
  }
</script>

<style lang="stylus" src="./ProgressBar.styl">
</style>
