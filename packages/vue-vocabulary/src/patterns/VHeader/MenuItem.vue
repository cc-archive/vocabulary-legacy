<template>
  <component :is="itemTag"
    :href="href"
    :target="target"
    :rel="rel"
    class="navbar-item"
    >{{$t(label)}}
  <i class="icon external-link" v-if="itemTag==='a'"/>
  </component>
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
      },
      tag: {
        type: String,
        default: 'router-link',
        validator: (value) => {
          return ['router-link', 'a'].indexOf(value) >= 0
        }
      }
    },
    computed: {
      itemTag () {
        return this.tag || 'a'
      },
      isExternal () {
        return this.tag === 'a' && !this.href.startsWith('/')
      },
      target () {
        return this.isExternal ? '_blank' : null
      },
      rel () {
        return this.isExternal ? 'noopener' : null
      }
    }
  }
</script>

<style scoped>

</style>
