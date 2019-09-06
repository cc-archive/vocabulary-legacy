<template>
  <div class="vocab input-field" :class="inputFieldClasses">
    <!-- Attach label with ID when using -->
    <input
      v-bind="$attrs"
      class="field"
      :class="fieldClasses"
      :disabled="isDisabled"
      :readonly="isReadOnly"
      :size="charCount"
      @input="emitInput">

    <div
      v-if="hasLeftAddons"
      class="left addons"
      :class="leftAddonClasses">
      <!-- @slot Left-side addons go here -->
      <slot name="leftAddons">
        <FontAwesomeIcon
          v-if="iconSet[0]"
          :icon="['fas', iconSet[0]]"
          fixed-width/>
      </slot>
    </div>

    <div
      v-if="hasRightAddons"
      class="right addons"
      :class="rightAddonClasses">
      <!-- @slot Right-side addons go here -->
      <slot name="rightAddons">
        <FontAwesomeIcon
          v-if="iconSet[1]"
          :icon="['fas', iconSet[1]]"
          fixed-width/>
      </slot>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'
  import Joined from '@/mixins/joined'
  import Rounded from '@/mixins/rounded'
  import Scaled from '@/mixins/scaled'
  import Simplified from '@/mixins/simplified'

  import Invertible from '@/mixins/invertible'
  import Unactionable from '@/mixins/unactionable'

  library.add(faKeyboard)

  /**
   * ### Inputs fields accept user input, duh!
   *
   * Input fields form the basis of forms, the primary method of receiving input
   * from the user, be it text, email addresses, passwords, dates or numbers.
   */
  export default {
    name: 'InputField',
    components: {
      FontAwesomeIcon
    },
    mixins: [
      Colored,
      Indicating,
      Joined,
      Rounded,
      Scaled,
      Simplified,

      Invertible,
      Unactionable
    ],
    inheritAttrs: false,
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      /**
       * _an array specifying the left and right icon to use as add-ons_
       *
       * Use '' to omit the icon.
       */
      iconSet: {
        type: Array,
        validator: val => val.length === 2,
        default: () => [null, null]
      },
      /**
       * _whether to pad the left and right add-ons_
       */
      isAddonPaddedSet: {
        type: Array,
        validator: val => val.length === 2,
        default: () => [true, true]
      },
      /**
       * _whether to increase the coloration of the input field_
       */
      isInfused: {
        type: Boolean,
        default: false
      },
      /**
       * _this is the renamed `size` attribute from the HTML spec_
       */
      charCount: {
        type: Number,
        default: 1
      }
    },
    computed: {
      inputFieldClasses: function () {
        return [
          ...this.coloredClasses,
          ...this.indicatingClasses,
          ...this.joinClasses,
          ...this.roundedClasses,
          ...this.scaledClasses,
          ...this.simplifiedClasses,

          ...this.invertibleClasses,
          ...this.unactionableClasses,

          {
            'infused': this.isInfused
          }
        ]
      },
      fieldClasses: function () {
        return [
          {
            'has-left-addons': this.hasLeftAddons,
            'has-right-addons': this.hasRightAddons
          }
        ]
      },
      leftAddonClasses: function () {
        return [
          {
            'padded': this.isAddonPaddedSet[0]
          }
        ]
      },
      rightAddonClasses: function () {
        return [
          {
            'padded': this.isAddonPaddedSet[1]
          }
        ]
      },

      hasLeftAddons: function () {
        return this.iconSet[0] || this.$slots.leftAddons
      },
      hasRightAddons: function () {
        return this.iconSet[1] || this.$slots.rightAddons
      }
    },
    methods: {
      emitInput: function (event) {
        /**
         * _event emitted when input given to field_
         *
         * The value of the field is passed back.
         *
         * @type {string}
         */
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<style lang="stylus" src="./InputField.styl">
</style>
