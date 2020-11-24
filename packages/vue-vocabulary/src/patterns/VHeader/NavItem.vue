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
// import ExternalLink from '@creativecommons/fonts/dist/assets/svg/symbols/external-link.svg?inline'
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

<style lang="scss" scoped>
.navbar-item {
  cursor: pointer;
}
.navbar-item.navbar-link {
  @media screen and (max-width: 769px) {
    width: 100%;
    padding-left: 22px;
    padding-right: 25px;
  }
  .icon.external-link {
    margin-left: 0.5rem;
  }
}
</style>
