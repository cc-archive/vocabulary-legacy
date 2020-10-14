<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    class="navbar-item"
    >{{$t(label)}}
  <i class="icon external-link" />
  </a>
</template>

<script>
  export default {
    name: 'MenuItem',
    props: {
      label: {
        type: String,
        required: true
      },
      href: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
