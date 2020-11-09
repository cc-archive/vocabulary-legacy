<template>
  <component :is="component"
    :href="href"
    :target="target"
    :rel="rel"
    class="navbar-item navbar-link is-arrowless"
    :class="itemClasses"
    v-bind="$attrs"
    tabindex="0"
    v-on="$listeners"
  >{{label}}
    <!--  <span class="icon"><ExternalLink /></span>-->
    <i class="icon external-link" v-if="isExternal"/>
  </component>
</template>

<script>
  // import ExternalLink from '@creativecommons/fonts/dist/assets/svg/symbols/external-link.svg?inline'
  export default {
    name: 'MenuItem',
    // components: {
    //   ExternalLink
    // },
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
        default: 'router-link'
      },
      itemClasses: {
        type: String,
        default: ''
      }
    },
    computed: {
      component () {
        return this.tag || 'a'
      },
      isExternal () {
        return this.tag.toLowerCase() === 'a' && !this.href.startsWith('/')
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
  .navbar-item {
    cursor: pointer;
    background: white;
  }
</style>
