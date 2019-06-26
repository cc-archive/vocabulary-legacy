<template>
  <label class="wrapper" :class="{inverted, disabled, error}">
    <span v-if="label || $slots.default" class="label">
      <!-- @slot Replacement for label goes here -->
      <slot>{{ label }}</slot>
    </span>
    <span class="input">
      <input
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="value"
        v-on="inputListeners"
        class="field"
        :class="{'has-left-icon': showLeftIcon, 'has-right-icon': showRightIcon}">
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
    components: {
      FontAwesomeIcon
    },
    props: {
      /**
       * the type of input this field will receive
       */
      type: {
        type: String,
        default: 'text',
        validator: val => ['text', 'email', 'number'].includes(val)
      },
      /**
       * the placeholder text in the input field
       */
      placeholder: {
        type: String
      },
      value: {
        type: String
      },
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
      }
    },
    computed: {
      showLeftIcon: function () {
        return this.icons[0] !== ''
      },
      showRightIcon: function () {
        return this.icons[1] !== ''
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
