<template>
    <label class="v-checkbox checkbox">
      <input type="checkbox" :checked="value" :disabled="disabled" v-model="computedValue">
      <span class="checkbox-label">
        <slot default />
      </span>
    </label>
</template>

<script>
  export default {
    name: 'VCheckbox',
    props: {
      /**
       * Checkbox is checked if this is true. This value is set by `v-model`.
       */
      value: {
        type: [ Boolean, undefined ],
        default: undefined
      },
      /**
       * Optional property, set to `true` to disable the checkbox
       */
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        localValue: this.value
      }
    },
    computed: {
      /**
       * Emitting input event
       */
      computedValue: {
        get () {
          return this.localValue
        },
        set (value) {
          this.localValue = value
          this.$emit('input', value)
        }
      }
    },
    watch: {
      /**
       * When v-model change, set internal value.
       */
      value (value) {
        this.localValue = value
      }
    },
    methods: {
      handleClick () {
        console.log('Doing something')
      },
      focus () {
        // MacOS FireFox and Safari do not focus when clicked
        this.$refs.input.focus()
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "~@creativecommons/vocabulary/scss/color.scss";
.checkbox, .radio {
  display: flex;
  align-items: baseline;
  color: #{$color-dark-slate-gray};
}

// This is overriding Bulma style for horizontal radio elements?
.radio+.radio {
  margin-left: unset;
}
@supports(-webkit-appearance: none) or (-moz-appearance: none) {
  input[type='checkbox'],
  input[type='radio'] {
    margin: 0 0.5rem 0 0;
    flex: 0 0 auto;
    width: 1rem;
    height: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    --checkmark-color: #fff;

    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    cursor: pointer;
    border: 1px solid var(--border-color, #{$color-light-gray});
    background: var(--background);
    transition: background .3s, border-color .3s, box-shadow .2s;

    &:after {
      content: '';
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform .3s ease, opacity .2s;
      opacity: var(--o, 0);
    }

    &:checked {
      --background: #{$color-brighter-blue};
      --border-color: transparent;
      --o: 1;

      &:not(:disabled):hover {
        filter: brightness(120%) saturate(120%);
      }
    }

    &:disabled {
      --background: #{$color-light-gray};
      --border-color: #{$color-gray};
      cursor: not-allowed;

      &:checked {
        --checkmark-color: #{$color-gray};
      }
    }

    &:focus {
      box-shadow: 0 0 0 2px rgba(39, 94, 254, .3);
    }

    &:hover:not(:checked):not(:disabled) {
      --border-color: #{$color-gray};
    }
  }
  input[type='checkbox'] {
    border-radius: 0.2rem;

    &:after {
      width: 5px;
      height: 9px;
      border: 2px solid var(--checkmark-color);
      border-top: 0;
      border-left: 0;
      left: 4px;
      top: 2px;
      transform: rotate(20deg);
    }

    &:checked::after {
      transform: rotate(35deg);
    }
  }
  input[type='radio'] {
    border-radius: 0.5rem;

    &:checked::after {
      background: var(--checkmark-color);
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 0.25rem;
      left: 3px;
      top: 3px;
    }

    &:disabled {
      --checkmark-color: #{$color-gray};

      & + .radio-label {
        color: #{$color-gray};
      }
    }
  }
}
</style>
