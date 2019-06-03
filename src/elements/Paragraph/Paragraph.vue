<template>
  <p :class="{inverted: inverted}">
    <!-- @slot Content goes here -->
    <slot/>
  </p>
</template>

<script>
  export default {
    name: 'Paragraph',
    props: {
      /**
       * whether the content is on a dark background
       */
      inverted: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Paragraph.styl">
</style>
