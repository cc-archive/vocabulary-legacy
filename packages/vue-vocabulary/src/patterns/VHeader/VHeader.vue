<template>
  <header class="vocab header">
    <nav class="navbar" :aria-label="$t('header.aria.primary')">
      <div class="navbar-brand has-color-white">
        <slot name="logo">
          <a class="logo" href="/">
            <CCSearchLogo />
          </a>
        </slot>
        <button
          :class="{ ['navbar-burger']: true, ['is-active']: isBurgerMenuActive }"
          :aria-label="$t('header.aria.menu')"
          aria-haspopup="menu"
          :aria-expanded="isBurgerMenuActive"
          aria-controls="navbar-menu"
          @click="toggleBurgerActive">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div id="navbar-menu" :class="{ ['navbar-menu']: true, ['is-active']: isBurgerMenuActive }">
        <div class="navbar-end">
          <slot name="menu-items">
            <MenuItem tag="a" href="/whatever" label="Item One" />
            <MenuDropdown label="Item Three">
              <MenuItem tag="a" href="/whatever" label="Item Three A" />
              <MenuItem tag="a" href="/whatever" label="Item Three B" />
            </MenuDropdown>
            <MenuItem tag="a" href="/whatever" label="Item Two" />
          </slot>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  /**
   * ### VHeader opens the page.
   *
   * The header displays information about the site such as its branding and
   * name as well as navigation links.
   */
  import MenuItem from './MenuItem'
  import MenuDropdown from './MenuDropdown'
  import CCSearchLogo from '@creativecommons/vocabulary/assets/logos/products/search.svg'

  export default {
    name: 'VHeader',
    components: {
      MenuItem,
      MenuDropdown,
      CCSearchLogo
    },
    data: () => ({ isBurgerMenuActive: false }),
    methods: {
      toggleBurgerActive () {
        this.isBurgerMenuActive = !this.isBurgerMenuActive
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '~@creativecommons/vocabulary/scss/vocabulary.scss';

.logo {
  color: black;
  svg {
    height: 100%;
    width: auto;
  }
}
.navbar-burger {
  // When burger is changed from a link to a button, it changes some styles
  // TODO: move these to Vocabulary css
  background: white;
  border: none;
}

</style>
