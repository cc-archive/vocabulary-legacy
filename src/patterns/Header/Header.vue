<template>
  <header class="vocab header" :class="headerClasses">
    <Container class="flex">
      <div id="branding">
        <a :href="homeLink" class="homelink">
          <!-- @slot Alternate branding goes here -->
          <slot name="branding">
            <img
              v-if="appName"
              src="@/assets/logo/lettermark_white.svg"
              alt="CC lettermark"
              class="lettermark">
            <span v-if="appName">
              {{ appName }}
            </span>
            <img
              v-else
              src="@/assets/logo/wordmark_white.svg"
              alt="CC wordmark"
              class="wordmark">
          </slot>
        </a>
      </div>
      <Button
        v-if="$slots.default"
        v-on:click="toggleDropdown"
        type="button"
        :color="color"
        :shade="shade"
        id="hamburger">
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
      <div id="content" :style="contentStyle">
        <!-- @slot Content goes here -->
        <slot/>
      </div>
    </Container>
  </header>
</template>

<script>
  import Container from '@/layouts/Container/Container'
  import Button from '@/elements/Button/Button'

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

  import Colorable from '@/mixins/colorable'

  library.add(faBars, faTimes)

  /**
   * ## Header opens the page.
   *
   * The header displays information about the site such as its branding and
   * name as well as navigation links.
   */
  export default {
    name: 'Header',
    mixins: [
      Colorable
    ],
    components: {
      Container,
      Button,
      FontAwesomeIcon,
      FontAwesomeLayers
    },
    data: function () {
      return {
        isContentVisible: true
      }
    },
    props: {
      /**
       * _the name of the app_
       *
       * This appears next to the CC lettermark.
       */
      appName: {
        type: String
      },
      /**
       * _the link that the branding should point to_
       *
       * This is typically a link to the home page of the app or website.
       */
      homeLink: {
        type: String,
        default: '/'
      }
    },
    computed: {
      headerClasses: function () {
        return [
          this.color,
          this.shade
        ]
      },
      contentStyle: function () {
        return {
          maxHeight: this.isContentVisible ? '15rem' : '0'
        }
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
