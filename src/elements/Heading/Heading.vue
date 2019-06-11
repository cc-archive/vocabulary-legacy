<template>
  <div :is="tag" :class="[color, inverted ? 'inverted': '']">
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
       * ⩾ 1 and ⩽ 6
       */
      level: {
        type: Number,
        required: true,
        validator: val => val >= 1 && val <= 6
      },
      /**
       * the font color of the heading
       *
       * ∈ {`'blue'`, `'green'`, `'magenta'`, `'olive'`, `'orange'`, `'purple'`,
       * `'red'`, `'sand'`, `'yellow'`, `'black'`}
       */
      color: {
        type: String,
        default: 'black'
      },
      /**
       * whether the content appears on a dark background
       *
       * This essentially overrides prop `color` with value `'white'`.
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
