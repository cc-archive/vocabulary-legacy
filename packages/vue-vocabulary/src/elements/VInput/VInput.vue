<template>
    <label :class="sizeClass">
      <span v-if="label" :class="['label', description ? 'label-bold' : '']" >{{ label }}</span>
      <span v-if="description" class="description">{{description}}</span>
        <input
          v-if="!isTextArea"
          class="input"
          :class="[sizeClass]"
          :placeholder="placeholder"
          :disabled="isDisabled"
          :type="type"
          :value="localValue"
          @input="onInput"
        >
      <textarea
        v-if="isTextArea"
        class="textarea"
        :value="localValue"
        :placeholder="placeholder"
        :disabled="isDisabled"
        @input="onInput"
      />
    </label>
</template>
<script>
  export default {
    name: 'VInput',
    props: {
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },

      placeholder: {
        type: String,
        default: ''
      },
      icon: {
        type: [String, null],
        default: null
      },
      isTextArea: {
        type: Boolean,
        default: false
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'normal'
      }
    },
    data () {
      return {
        localValue: this.value
      }
    },
    computed: {
      computedValue: {
        get () {
          return this.localValue
        },
        set (newVal) {
          this.localValue = newVal
          this.$emit('input', newVal)
        }
      },
      sizeClass () {
        return this.size === 'normal' ? '' : this.size
      }
    },
    methods: {
      onInput (event) {
        this.localValue = event.target.value
        this.computedValue = event.target.value
      }
    }
  }
  // <!--'', is-medium, is-large in vocabulary; normal, big, huge in DL-->

</script>

<style lang="scss" scoped >
@import "~@creativecommons/vocabulary/scss/color.scss";
@import "@creativecommons/vocabulary/scss/typography.scss";
.label-bold {
  font-weight: bold;
}
label {
  &.is-medium {
    .label, .description {
      font-size: $font-size-body-bigger;
    }
  }
}
label span + input {
  margin-top: 8px;
}
</style>
