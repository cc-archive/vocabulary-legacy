<template>
  <header class="vocab header">
    <nav class="navbar is-default"
         :class="{['is-active'] : isBurgerMenuActive}"
         :aria-label="$t('header.aria.primary')">
      <div class="navbar-brand">
        <a class="logo" href="/">
          <!--@slot The Vue component with the site's logo -->
          <slot name="logo">
            <CCSearchLogo />
          </slot>
        </a>
        <a
          role="button"
          :class="{ ['navbar-burger']: true, ['is-active']: isBurgerMenuActive }"
          :aria-label="$t('header.aria.menu')"
          aria-expanded="false"
          @click="toggleBurgerActive"
          @keyup.enter="toggleBurgerActive"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div class="navbar-start">
        <slot name="locale">
          <Locale />
        </slot>
        <slot name="donate">
          <DonateButton size="small" :is-header="true">Donate</DonateButton>
        </slot>
      </div>
      <div :class="{ ['navbar-menu']: true, ['is-active']: isBurgerMenuActive }">
        <div class="tabs-nav">
          <div class="tabs">
            <button type="button"
                    class="button menu-tab is-text is-active"
                    data-tab="menu"
                    @click="activateTab">
              Menu
            </button>
            <button type="button"
                    class="button explore-tab is-text"
                    data-tab="explore"
                    @click="activateTab">
              Explore Creative Commons
            </button>
          </div>
          <div class="tabs-content" ref="tabs">
            <div class="tabs-panel menu is-active" ref="menu">
              <div class="navbar-end">
                <slot name="menu-items">
                  <NavItem is="a" href="/item_one" label="Item One" />
                  <NavItem href="/item_two" label="Item Two" />
                  <NavDropdown label="Item Three">
                    <NavItem href="/item_three_a" label="Item Three A" />
                    <NavItem is="a" href="/item_three_b" label="Item Three B" />
                  </NavDropdown>
                </slot>
              </div>
            </div>
            <div class="tabs-panel explore" ref="explore">
              Explore CC
            </div>
          </div>
        </div>
        <div class="navbar-end main-nav">
          <!--@slot Menu items, can be `NavItem`, `NavDropdown` -->
          <slot name="menu-items">
            <NavItem is="a" href="/item_one" label="Item One" />
            <NavItem href="/item_two" label="Item Two" />
            <NavDropdown label="Item Three">
              <NavItem href="/item_three_a" label="Item Three A" />
              <NavItem is="a" href="/item_three_b" label="Item Three B" />
            </NavDropdown>
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
  import NavItem from './NavItem'
  import NavDropdown from './NavDropdown'
  import CCSearchLogo from '@creativecommons/vocabulary/assets/logos/products/search.svg?inline'
  import Locale from '../Locale/Locale'
  import DonateButton from '../../elements/DonateButton/DonateButton'

  export default {
    name: 'VHeader',
    components: {
      CCSearchLogo,
      NavItem,
      NavDropdown,
      Locale,
      DonateButton
    },
    data: () => ({ isBurgerMenuActive: false }),
    methods: {
      toggleBurgerActive () {
        this.isBurgerMenuActive = !this.isBurgerMenuActive
      },
      activateTab (event) {
        const buttons = [...event.currentTarget.parentElement.children]
        buttons.forEach((button) => {
          console.log({ button })
          if (button === event.currentTarget) {
            button.classList.add('is-active')
          } else {
            button.classList.remove('is-active')
          }
        })
        const tabs = [...this.$refs.tabs.children]
        tabs.forEach(tab => {
          if (tab.classList.contains(event.currentTarget.dataset.tab)) {
            tab.classList.add('is-active')
          } else {
            tab.classList.remove('is-active')
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
.tabs-panel:not(.is-active) {
  display: none;
}
</style>
