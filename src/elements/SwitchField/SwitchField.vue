<template>
  <div class="vocab switch-field" :class="switchFieldClasses">
    <span
      class="field"
      :class="fieldClasses"
      v-on:click="flipSwitch">
    </span>
  </div>
</template>

<script>
  import Colorable from '@/mixins/colorable'
  import Resizeable from '@/mixins/resizable'
  import Disableable from '@/mixins/disableable'
  import Indicatable from '@/mixins/indicatable'

  /**
   * ## What turns you on? A light switch.
   *
   * A switch indicates a toggleable value. It is different from a checkbox in
   * that while a checkbox is for choosing many out of many, a switch's job is
   * to indicate, and possibly change, the state of an item.
   */
  export default {
    name: 'SwitchField',
    mixins: [
      Colorable,
      Resizeable,
      Disableable,
      Indicatable
    ],
    data: function () {
      return {
        isChecked: this.value
      }
    },
    props: {
      /**
       * _the initial state of the switch_
       */
      value: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      switchFieldClasses: function () {
        return [
          this.color,
          this.shade,
          this.size,
          this.indication,
          {
            'disabled': this.isDisabled,
            'basic': this.isBasic
          }
        ]
      },
      fieldClasses: function () {
        return [
          {
            'checked': this.isChecked
          }
        ]
      }
    },
    methods: {
      flipSwitch: function () {
        if (!this.isDisabled) {
          this.isChecked = !this.isChecked
          this.$emit('input', this.isChecked)
        }
      }
    }
  }
</script>

<style lang="stylus" src="./SwitchField.styl">
</style>
