<template>
  <div>
      <span
        class="icon"
        :class="[size, color]"
        v-html="svg" />
  </div>

</template>

<script>

  export default {
    name: 'VIcon',
    data () {
      return {
        // For some reason, '?inline' query string doesn't work with require here,
        // so I had to use inline webpack loader
        svg: require(`!raw-loader!@creativecommons/fonts/assets/svg/cc/${this.name}.svg`).default
      }
    },
    props: {
      name: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: ''
      },
      size: {
        // sizes: large 30px, bigger 20px, big 17px, normal 15px, small 10px
        type: String,
        default: 'normal', // 15px
        validator: function (value) {
          return ['large', 'bigger', 'big', 'normal', 'small'].includes(value)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.icon {
  height: 15px;
  width: 15px;
  display: block;
  &.large {
    height: 30px;
    width: 30px;
   }
  &.bigger {
    height: 20px;
    width: 20px;
  }
  &.big {
    height: 17px;
    width: 17px;
  }
  &.small {
    height: 10px;
    width: 10px;
  }
  &.white {
    color: white;
  }
  & svg {
    height: 100%;
    width: auto;
  }
}

</style>
