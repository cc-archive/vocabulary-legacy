<template>
  <label class="wrapper" :class="[{inverted, disabled, error}, size]">
    <span v-if="label || $slots.default" class="label">
      <!-- @slot Replacement for label goes here -->
      <slot>{{ label }}</slot>
    </span>
    <span class="input">
      <input
        :disabled="disabled"
        v-bind="$attrs"
        v-on="inputListeners"
        class="field"
        :class="fieldClasses">
      <!-- @slot Replacement for left icon goes here -->
      <slot name="left-icon">
        <FontAwesomeIcon
          v-if="showLeftIcon"
          :icon="['fas', icons[0]]"
          fixed-width
          class="left-icon"/>
      </slot>
      <!-- @slot Replacement for right icon goes here -->
      <slot name="right-icon">
        <FontAwesomeIcon
          v-if="showRightIcon"
          :icon="['fas', icons[1]]"
          fixed-width
          class="right-icon"/>
      </slot>
    </span>
  </label>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import {
    faQuestion,
    faCheck,
    faTimes,
    faMinus,
    faSearch
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faQuestion, faCheck, faTimes, faMinus, faSearch)

  export default {
    name: 'Input',
    inheritAttrs: false,
    components: {
      FontAwesomeIcon
    },
    props: {
      /**
       * the label to attach with the input field
       */
      label: {
        type: String
      },
      /**
       * whether the field is on a dark background
       */
      inverted: {
        type: Boolean,
        default: false
      },
      /**
       * whether to freeze the form field
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       * whether to highlight a field with errors
       */
      error: {
        type: Boolean,
        default: false
      },
      /**
       * an array of left and right icon
       *
       * Use '' to omit the icon
       */
      icons: {
        type: Array,
        default: () => ['', ''],
        validator: val => val.length === 2
      },
      /**
       * the size of the input field
       */
      size: {
        type: String,
        default: 'normal',
        validator: val => [
          'small',
          'normal',
          'big',
          'large',
          'huge',
          'enormous',
          'gigantic',
          'mega'
        ].includes(val)
      }
    },
    computed: {
      showLeftIcon: function () {
        return this.icons[0] !== ''
      },
      showRightIcon: function () {
        return this.icons[1] !== ''
      },
      fieldClasses: function () {
        return {
          'has-left-icon': this.showLeftIcon,
          'has-right-icon': this.showRightIcon
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

<style scoped lang="stylus" src="./Input.styl">
</style>
