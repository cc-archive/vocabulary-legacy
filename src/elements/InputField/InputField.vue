<template>
  <div class="vocab input-field" :class="inputFieldClasses">
    <!-- Attach label with ID when using -->
    <input
      v-bind="$attrs"
      v-on="inputListeners"
      class="field"
      :class="fieldClasses"
      :disabled="isDisabled"
      :readonly="isReadOnly">

    <div
      v-if="hasLeftAddons"
      class="left addons">
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
      class="right addons">
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
  import Invertible from '@/mixins/invertible'
  import Resizeable from '@/mixins/resizable'
  import Simplifiable from '@/mixins/simplifiable'
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
      Invertible,
      Resizeable,
      Simplifiable,
      Unactionable
    ],
    inheritAttrs: false,
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      /**
       * _an array specifying the left and right icon_
       *
       * Use '' to omit the icon.
       */
      iconSet: {
        type: Array,
        validator: val => val.length === 2,
        default: () => [null, null]
      },
      /**
       * _whether to increase the coloration of the input field_
       */
      isInfused: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      inputFieldClasses: function () {
        return [
          ...this.coloredClasses,
          ...this.indicatingClasses,
          ...this.invertibleClasses,
          ...this.resizableClasses,
          ...this.simplifiableClasses,
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

      hasLeftAddons: function () {
        return this.iconSet[0] || this.$slots.leftAddons
      },
      hasRightAddons: function () {
        return this.iconSet[1] || this.$slots.rightAddons
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
