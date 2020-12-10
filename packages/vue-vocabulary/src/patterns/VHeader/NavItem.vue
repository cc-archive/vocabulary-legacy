<template>
  <component
    :is="tag"
    class="navbar-item navbar-link is-arrowless"
    :class="itemClasses"
    v-bind="$attrs"
    tabindex="0"
    v-on="$listeners"
    >{{ label }}
    <!--  <span class="icon"><ExternalLink /></span>-->
    <i class="icon external-link" v-if="isExternal" />
  </component>
</template>

<script>
// import ExternalLink from '@creativecommons/fonts/assets/svg/external-link.svg?inline'
// prettier-ignore
  export default {
    name: 'NavItem',
    // components: {
    //   ExternalLink
    // },
    props: {
      isExternal: {
        type: Boolean,
        default: () => false,
        required: false
      },
      label: {
        type: String,
        required: true
      },
      href: {
        type: String,
        required: true
      },
      itemClasses: {
        type: Object,
        default: () => ({})
      },
      tag: {
        type: String,
        default: 'a'
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
