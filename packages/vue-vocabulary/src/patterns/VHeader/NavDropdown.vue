<template>
  <div
    class="navbar-item has-dropdown is-hoverable"
    ref="outerDiv"
    @mouseenter="openMenu"
    @mouseleave="closeMenu"
  >
    <button
      class="navbar-link is-arrowless"
      aria-haspopup="menu"
      aria-expanded="false"
      ref="opener"
      @click="toggleMenu"
    >
      {{ label }}
      <!--  <span class="icon"><CaretDown /></span>-->
      <i class="icon caret-down" />
    </button>
    <div class="navbar-dropdown">
      <slot />
    </div>
  </div>
</template>

<script>
// import CaretDown from '@creativecommons/fonts/assets/svg/caret-down.svg?inline'
  export default {
    name: 'NavDropdown',
    // components: {
    //   CaretDown
    // },
    data () {
      return {
        isOpen: false
      }
    },
    props: {
      label: {
        type: String,
        required: true
      }
    },
    methods: {
      openMenu () {
        this.isOpen = true
        this.$refs.opener.setAttribute('aria-expanded', 'true')
      },
      closeMenu () {
        this.isOpen = false
        this.$refs.opener.setAttribute('aria-expanded', 'false')
      },
      toggleMenu () {
        this.isOpen = !this.isOpen
        const ariaExpanded = this.$refs.opener.getAttribute('aria-expanded')
        this.$refs.opener.setAttribute('aria-expanded', `${!ariaExpanded}`)
      }
    }
  }
</script>

<style scoped>
.navbar-link {
  background: transparent;
  border: none;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.5;
}
</style>
