<template>
  <div class="vocab select-field" :class="selectFieldClasses">
    <!-- Attach label with ID when using -->
    <select
      v-bind="$attrs"
      v-on="selectListeners"
      class="field"
      :class="fieldClasses"
      :disabled="isDisabled || isReadOnly"
      :value="value"
      @focus="toggleDropdown"
      @blur="toggleDropdown">
      <option disabled value="">
        Select
      </option>
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
          v-if="icon"
          :icon="['fas', icon]"
          fixed-width/>
      </slot>
    </div>

    <div class="caret">
      <FontAwesomeLayers class="icon-group">
        <template v-if="!isDisabled && !isReadOnly">
          <FontAwesomeIcon
            class="icon"
            :class="{active: isContentVisible}"
            :icon="['fas', 'angle-up']"
            fixed-width/>
          <FontAwesomeIcon
            class="icon"
            :class="{active: !isContentVisible}"
            :icon="['fas', 'angle-down']"
            fixed-width/>
        </template>
        <template v-else>
          <FontAwesomeIcon
            v-if="isDisabled"
            :icon="['fas', 'ban']"
            fixed-width/>
          <FontAwesomeIcon
            v-if="isReadOnly"
            :icon="['fas', 'eye']"
            fixed-width/>
        </template>
      </FontAwesomeLayers>
    </div>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faVoteYea,
    faAngleDown,
    faAngleUp,
    faBan,
    faEye
  } from '@fortawesome/free-solid-svg-icons'
  import {
    FontAwesomeIcon,
    FontAwesomeLayers
  } from '@fortawesome/vue-fontawesome'

  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'
  import Invertible from '@/mixins/invertible'
  import Resizable from '@/mixins/resizable'
  import Simplifiable from '@/mixins/simplifiable'
  import Unactionable from '@/mixins/unactionable'

  library.add(faVoteYea, faAngleDown, faAngleUp, faBan, faEye)

  /**
   * ### Select fields presents discoverable content.
   *
   * A select field allows a user to choose one or more options from many.
   * It presents a standard alternative to radio buttons if choosing one and to
   * checkboxes if choosing many.
   */
  export default {
    name: 'SelectField',
    components: {
      FontAwesomeIcon,
      FontAwesomeLayers
    },
    mixins: [
      Colored,
      Indicating,
      Invertible,
      Resizable,
      Simplifiable,
      Unactionable
    ],
    inheritAttrs: false,
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      /**
       * _an icon to use in the dropdown_
       */
      icon: {
        type: String
      },
      /**
       * _the list of options to choose from_
       */
      optionList: {
        type: Array,
        required: true
      },
      /**
       * _the value of this field_
       *
       * The option that matches this value will be shown as the selected
       * option.
       */
      value: {
        type: String
      }
    },
    data: function () {
      return {
        isContentVisible: false
      }
    },
    computed: {
      selectFieldClasses: function () {
        return [
          ...this.coloredClasses,
          ...this.indicatingClasses,
          ...this.invertibleClasses,
          ...this.resizableClasses,
          ...this.simplifiableClasses,
          ...this.unactionableClasses
        ]
      },
      fieldClasses: function () {
        return {
          'has-addons': this.hasAddons
        }
      },

      hasAddons: function () {
        return this.icon || this.$slots.addons
      },

      selectListeners: function () {
        let vm = this
        return Object.assign(
          {},
          vm.$listeners,
          {
            change: function (event) {
              vm.$emit('change', event.target.value)
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
