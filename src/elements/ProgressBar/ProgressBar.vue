<template>
  <div
    class="vocab progress-bar"
    :class="progressBarClasses">
    <progress
      class="bar"
      :value="value"
      :max="max">
      &nbsp;
    </progress>
    <span v-if="value && isPercentVisible">{{ percent }}%</span>
  </div>
</template>

<script>
  import Colorable from '@/mixins/colorable'
  import Resizeable from '@/mixins/resizable'
  import Indicatable from '@/mixins/indicatable'
  import Invertible from '@/mixins/invertible'

  /**
   * ## Progress bars inspire patience.
   *
   * Progress bars inform the user of progress or indicate activity. This gives
   * the user some additional patience to wait.
   */
  export default {
    name: 'ProgressBar',
    mixins: [
      Colorable,
      Resizeable,
      Indicatable,
      Invertible
    ],
    props: {
      /**
       * _the progress made so far in the task_
       *
       * If not provided, the progress bar takes the indeterminate form.
       */
      value: {
        type: Number
      },
      /**
       * _the upper limit of value_
       */
      max: {
        type: Number,
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
          this.color,
          this.shade,
          this.size,
          this.indication,
          {
            'inverted': this.isInverted
          }
        ]
      },
      percent: function () {
        return Math.round(this.value / this.max * 100)
      }
    }
  }
</script>

<style lang="stylus" src="./ProgressBar.styl">
</style>
