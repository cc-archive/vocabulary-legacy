<template>
  <div class="vocab select-field" :class="selectFieldClasses">
    <select
      v-bind="$attrs"
      v-on="selectListeners"
      class="field"
      :disabled="isDisabled"
      :class="fieldClasses">
      <option
        v-for="(option, index) in optionList"
        :key="index"
        :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <div class="addons" v-if="hasAddons">
      <!-- @slot Addons go here -->
      <slot name="addons">
        <FontAwesomeIcon
          v-if="hasIcon"
          :icon="['fas', icon]"
          fixed-width/>
      </slot>
    </div>
    <div class="caret">
      <FontAwesomeIcon
        :icon="['fas', 'angle-down']"
        fixed-width/>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faAngleDown, faVoteYea } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Colorable from '@/mixins/colorable'
  import Resizable from '@/mixins/resizable'
  import Disableable from '@/mixins/disableable'
  import Indicatable from '@/mixins/indicatable'

  library.add(faVoteYea, faAngleDown)

  /**
   * ## Select fields presents discoverable content.
   *
   * A select field allows a user to choose one or more options from many.
   * It is an alternative to radio buttons if choosing one and to checkboxes if
   * choosing many.
   */
  export default {
    name: 'SelectField',
    inheritAttrs: false,
    mixins: [
      Colorable,
      Resizable,
      Disableable,
      Indicatable
    ],
    components: {
      FontAwesomeIcon
    },
    data: function () {
      return {
        isContentVisible: false
      }
    },
    props: {
      /**
       * _an icon to use in the dropdown_
       */
      icon: {
        type: String,
        default: ''
      },
      /**
       * _the list of options to choose from_
       */
      optionList: {
        type: Array,
        required: true
      }
    },
    computed: {
      selectFieldClasses: function () {
        return [
          this.color,
          this.shade,
          this.size,
          this.indication,
          {
            'basic': this.isBasic,
            'disabled': this.isDisabled
          }
        ]
      },
      hasIcon: function () {
        return this.icon !== ''
      },
      hasAddons: function () {
        return this.hasIcon || this.$slots.addons
      },
      fieldClasses: function () {
        return {
          'has-addons': this.hasAddons
        }
      },
      selectListeners: function () {
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
    },
    methods: {
      toggleDropdown: function () {
        this.isContentVisible = !this.isContentVisible
      }
    }
  }
</script>

<style lang="stylus" src="./SelectField.styl">
</style>
