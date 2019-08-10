<template>
  <header class="vocab header" :class="headerClasses">
    <Container>
      <div class="flex">
        <div id="branding-section">
          <span>
            <!-- @slot Branding goes here -->
            <slot name="branding">
              <a
                class="homelink"
                :href="homeUrl">
                <template v-if="title">
                  <BrandImagery
                    type="lettermark"
                    size="small"
                    color="white"
                    is-centered/>
                  {{ title }}
                </template>

                <BrandImagery
                  v-else
                  type="wordmark"
                  size="small"
                  color="white"
                  is-centered/>
              </a>
            </slot>
          </span>

          <Button
            v-if="$slots.default"
            id="hamburger"
            :color="color"
            :shade="shade"
            is-rounded
            type="button"
            @click="toggleDropdown">
            <FontAwesomeLayers>
              <FontAwesomeIcon
                class="icon"
                :class="{active: isContentVisible}"
                :icon="['fas', 'times']"/>
              <FontAwesomeIcon
                class="icon"
                :class="{active: !isContentVisible}"
                :icon="['fas', 'bars']"/>
            </FontAwesomeLayers>
          </Button>
        </div>

        <div
          :class="contentClasses"
          id="content-section">
          <!-- @slot Content goes here -->
          <slot/>
        </div>
      </div>
    </Container>
  </header>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
  import {
    FontAwesomeIcon,
    FontAwesomeLayers
  } from '@fortawesome/vue-fontawesome'

  import Button from '@/elements/Button/Button'

  import Container from '@/layouts/Container/Container'

  import BrandImagery from '@/patterns/BrandImagery/BrandImagery'

  import Colored from '@/mixins/colored'

  library.add(faBars, faTimes)

  /**
   * ### Header opens the page.
   *
   * The header displays information about the site such as its branding and
   * name as well as navigation links.
   */
  export default {
    name: 'Header',
    mixins: [
      Colored
    ],
    components: {
      Button,
      Container,
      BrandImagery,
      FontAwesomeIcon,
      FontAwesomeLayers
    },
    data: function () {
      return {
        isContentVisible: false
      }
    },
    props: {
      /**
       * _the title of the app or site_
       *
       * This appears next to the CC lettermark.
       */
      title: {
        type: String
      },
      /**
       * _the link that the branding should point to_
       *
       * This is typically a link to the home page of the app or website.
       */
      homeUrl: {
        type: String,
        default: '/'
      },
      /**
       * _the accentuating shade of the primary color to use_
       *
       * ∈ {`'dark'`, `'darker'`}
       */
      shade: {
        type: String,
        validator: val => ['dark', 'darker'].includes(val)
      }
    },
    computed: {
      headerClasses: function () {
        return [
          ...this.coloredClasses
        ]
      },
      contentClasses: function () {
        return [
          {
            'collapsed': !this.isContentVisible
          }
        ]
      }
    },
    methods: {
      toggleDropdown: function () {
        this.isContentVisible = !this.isContentVisible
      }
    }
  }
</script>

<style lang="stylus" src="./Header.styl">
</style>
