<template>
  <div :is="tag" :class="{inverted: inverted}">
    <!-- @slot Content goes here -->
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'Heading',
    props: {
      /**
       * the level of the heading
       *
       * **Range:** `1 <= level <= 6`
       */
      level: {
        type: Number,
        required: true,
        validator: val => val >= 1 && val <= 6
      },
      /**
       * whether the content is on a dark background
       */
      inverted: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      tag: function () {
        return `h${this.level}`
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Heading.styl">
</style>
