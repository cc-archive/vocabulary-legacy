<template>
  <div class="vocab container">
    <!-- @slot Content goes here -->
    <slot/>
  </div>
</template>

<script>
  /**
   * ### Containers make pages large-display friendly.
   *
   * A container maintains a constant width on all display sizes in a given
   * breakpoint range.
   */
  export default {
    name: 'Container'
  }
</script>

<style src="@creativecommons/vocabulary/css/layouts/Container.css">
</style>
