<template>
  <div class="vocab input-field" :class="inputFieldClasses">
    <input
      v-bind="$attrs"
      v-on="inputListeners"
      class="field"
      :disabled="isDisabled"
      :class="fieldClasses">
    <div class="left-addons" v-if="hasLeftAddons">
      <!-- @slot Left-side addons go here -->
      <slot name="leftAddons">
        <FontAwesomeIcon
          v-if="hasLeftIcon"
          :icon="['fas', iconSet[0]]"
          fixed-width/>
      </slot>
    </div>
    <div class="right-addons" v-if="hasRightAddons">
      <!-- @slot Right-side addons go here -->
      <slot name="rightAddons">
        <FontAwesomeIcon
          v-if="hasRightIcon"
          :icon="['fas', iconSet[1]]"
          fixed-width/>
      </slot>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faKeyboard
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Colorable from '@/mixins/colorable'
  import Resizeable from '@/mixins/resizable'
  import Basicable from '@/mixins/basicable'
  import Disableable from '@/mixins/disableable'
  import Indicatable from '@/mixins/indicatable'

  library.add(faKeyboard)

  /**
   * ## Inputs fields accept user input, duh!
   *
   * Input fields form the basis of forms, the primary method of receiving input
   * from the user, be it text, email addresses, passwords, dates or numbers.
   */
  export default {
    name: 'InputField',
    inheritAttrs: false,
    mixins: [
      Colorable,
      Resizeable,
      Basicable,
      Disableable,
      Indicatable
    ],
    components: {
      FontAwesomeIcon
    },
    props: {
      /**
       * _an array specifying the left and right icon_
       *
       * Use '' to omit the icon.
       */
      iconSet: {
        type: Array,
        default: () => ['', ''],
        validator: val => val.length === 2
      }
    },
    computed: {
      inputFieldClasses: function () {
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
      hasLeftIcon: function () {
        return this.iconSet[0] !== ''
      },
      hasLeftAddons: function () {
        return this.hasLeftIcon || this.$slots.leftAddons
      },
      hasRightIcon: function () {
        return this.iconSet[1] !== ''
      },
      hasRightAddons: function () {
        return this.hasRightIcon || this.$slots.rightAddons
      },
      fieldClasses: function () {
        return {
          'has-left-addons': this.hasLeftAddons,
          'has-right-addons': this.hasRightAddons
        }
      },
      inputListeners: function () {
        let vm = this
        return Object.assign(
          {},
          vm.$listeners,
          {
            input: function (event) {
              vm.$emit('input', event.target.value)
            }
          }
        )
      }
    }
  }
</script>

<style lang="stylus" src="./InputField.styl">
</style>
