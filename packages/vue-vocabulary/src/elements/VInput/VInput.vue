<template>
    <label>
        {{ label }}
        <input
            class="input"
            type="text"
            :value="localValue"
            @input="onInput"
        >
    </label>
</template>
<script>
  export default {
    name: 'VInput',
    props: {
      label: {
        type: String,
        required: true
      },
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
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
      }
    },
    methods: {
      onInput (event) {
        this.localValue = event.target.value
        this.computedValue = event.target.value
      }
    }
  }
</script>

<style scoped>

</style>
