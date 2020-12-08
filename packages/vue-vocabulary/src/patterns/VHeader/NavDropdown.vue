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
      <span class="icon caret-down">
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M7.45896 11.25H22.5351c1.043 0 1.5645 1.2598.8262 1.998l-7.5352 7.5411c-.457.457-1.2011.457-1.6582 0L6.63279 13.248c-.73828-.7382-.2168-1.998.82617-1.998z" fill="currentColor"/></svg>
      </span>
      <!--  <span class="icon"><CaretDown /></span>-->
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
      toggleMenu (event) {
        this.isOpen = !this.isOpen
        const ariaExpanded = this.$refs.opener.getAttribute('aria-expanded')
        this.$refs.opener.setAttribute('aria-expanded', `${!ariaExpanded}`)
        event.currentTarget.parentElement.classList.toggle('is-active')
      }
    }
  }
</script>

<style lang="scss" scoped>
.navbar-link {
  background: transparent;
  border: none;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.5;
  @media screen and (max-width: 769px) {
    width: 100%;
    padding-left: 22px;
    padding-right: 25px;
    .navbar-dropdown {
      padding-left: 1rem;
    }
  }
  &:active, &:focus, &:hover {
    border: none;
    outline: none;
    text-decoration: underline;
  }
}
</style>
