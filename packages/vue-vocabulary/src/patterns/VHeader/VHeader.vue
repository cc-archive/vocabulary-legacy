<template>
  <header class="vocab header">
    <nav :aria-label="$t('header.aria.primary')">
      <div class="navbar-brand has-color-white">
        <slot name="logo">
          <a class="logo" href="/">
            Logo
          </a>
        </slot>
        <slot name="hamburger-menu">
          <a role="button"
             :class="{ ['navbar-burger']: true, ['is-active']: isBurgerMenuActive }"
             :aria-label="$t('header.aria.menu')"
             aria-expanded="false"
             @click="toggleBurgerActive"
             @keyup.enter="toggleBurgerActive">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
          </a>
        </slot>
      </div>
      <div class="navbar-end">
        <slot name="menu-items">
          <MenuItem href="/whatever" label="Item One" />
          <MenuItem href="/whatever" label="Item Two" />
          <MenuDropdown label="Item Three">
            <MenuItem href="/whatever" label="Item Three A" />
            <MenuItem href="/whatever" label="Item Three B" />
          </MenuDropdown>
        </slot>
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

  export default {
    name: 'VHeader',
    components: {
      MenuItem,
      MenuDropdown
    }
  }
</script>
<style lang="scss" scoped>
</style>
