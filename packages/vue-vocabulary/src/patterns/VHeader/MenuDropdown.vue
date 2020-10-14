<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link is-arrowless">
      {{ $t(label) }}
      <i class="icon caret-down" />
    </a>
    <div class="navbar-dropdown">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MenuDropdown',
    props: {
      label: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
