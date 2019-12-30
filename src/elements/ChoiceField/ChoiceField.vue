<template>
  <!-- Attach label with ID when using -->
  <input
    v-bind="$attrs"
    class="vocab choice-field"
    :value="value"
    :checked="isChecked"
    :class="choiceFieldClasses"
    :disabled="isDisabled || isReadOnly"
    :type="inputType"
    @change="emitChange">
</template>

<script>
  import Branded from '@/mixins/branded'
  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'
  import Scaled from '@/mixins/scaled'
  import Simplified from '@/mixins/simplified'

  import Invertible from '@/mixins/invertible'
  import Unactionable from '@/mixins/unactionable'

  /**
   * ### Choice is power.
   *
   * When it comes to choosing, you can choose one or you can choose many. On
   * the web these choices manifest as checkboxes and radios. Vocabulary unifies
   * these two into one common abstract choice field.
   */
  export default {
    name: 'ChoiceField',
    mixins: [
      Branded,
      Colored,
      Indicating,
      Scaled,
      Simplified,

      Invertible,
      Unactionable
    ],
    inheritAttrs: false,
    model: {
      // Since 'value' has a different meaning for radios and checkboxes
      prop: 'modelValue',
      event: 'change'
    },
    props: {
      /**
       * _whether this field allows only one of its kind to be chosen_
       *
       * This essentially toggles between radio and checkbox behaviour.
       */
      isSingleSelect: {
        type: Boolean,
        default: false
      },
      /**
       * _the value of this field_
       *
       * Whether it is equal to `modelValue` (radio) or belongs to `modelValue`
       * (checkbox) determines whether it is checked or not.
       */
      value: {
        type: String
      },
      /**
       * _the variable to use as the `v-model` interface_
       *
       * This will be a String for radio behaviour (`isSingleSelect` set to
       * `true`) and an Array for checkbox behavious (`isSingleSelect` set to
       * `false`).
       */
      modelValue: {
        type: [String, Array] // String for radio, Array for checkboxes
      }
    },
    computed: {
      choiceFieldClasses: function () {
        return [
          ...this.brandedClasses,
          ...this.coloredClasses,
          ...this.indicatingClasses,
          ...this.scaledClasses,
          ...this.simplifiedClasses,

          ...this.invertibleClasses,
          ...this.unactionableClasses
        ]
      },

      inputType: function () {
        if (this.isSingleSelect) {
          return 'radio'
        } else {
          return 'checkbox'
        }
      },
      isChecked: function () {
        try {
          if (this.isSingleSelect) {
            return this.value === this.modelValue
          } else {
            return this.modelValue.includes(this.value)
          }
        } catch (e) {
          return false
        }
      }
    },
    methods: {
      emitChange: function (event) {
        let targetValue = event.target.value
        let targetIsChecked = event.target.checked

        let result

        if (this.isSingleSelect) {
          result = targetValue
        } else {
          if (this.modelValue === undefined) {
            result = []
          } else {
            result = this.modelValue.slice(0)
          }
          if (targetIsChecked) {
            result.push(targetValue)
          } else {
            result.splice(result.indexOf(targetValue), 1)
          }
        }
        /**
         * _event emitted when a choice field is toggled_
         *
         * The value of the chosen field if `isSingleSelect` or the array of the
         * values of all chosen fields if `!isSingleSelect` is passed back.
         *
         * @type {string|array}
         */
        this.$emit('change', result)
      }
    }
  }
</script>

<style lang="stylus" src="./ChoiceField.styl">
</style>
