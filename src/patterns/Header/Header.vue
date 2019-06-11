<template>
  <header :class="gradientColor">
    <Container class="flex">
      <div class="section" id="branding">
        <!-- @slot Branding imagery or site title go here -->
        <slot name="branding">
          <div v-if="appName">
            <img
              src="@/assets/logo/lettermark_white.svg"
              alt="CC lettermark"
              class="lettermark">
          </div>
          <div v-else>
            <img
              src="@/assets/logo/wordmark_white.svg"
              alt="CC wordmark"
              class="wordmark">
          </div>
          <span class="name">{{ appName }}</span>
        </slot>
      </div>
      <div v-if="navLinks" v-on:click="toggleNav" class="section" id="hamburger">
        <FontAwesomeIcon :icon="['fas', 'bars']"/>
      </div>
      <div class="section" id="navigation" :style="navStyle">
        <!-- @slot Navigation links go here -->
        <slot name="navigation">
          <nav>
            <ul>
              <li v-for="(link, index) in navLinks" :key="index">
                <a :href="link.href">{{ link.text }}</a>
              </li>
            </ul>
          </nav>
        </slot>
      </div>
    </Container>
  </header>
</template>

<script>
  import Container from '@/elements/Container/Container'

  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  export default {
    name: 'Header',
    components: {
      Container,
      FontAwesomeIcon
    },
    data: function () {
      return {
        isNavVisible: false
      }
    },
    props: {
      /**
       * the name of the app that should appear adjacent to the CC logo
       */
      appName: {
        type: String
      },
      /**
       * the set of navigation links to show on the right side
       */
      navLinks: {
        type: Array,
        validator: val => val.every(
          item => {
            let keys = ['text', 'href']
            return keys.every(key => key in item)
          }
        )
      },
      /**
       * the background gradient for the header
       *
       * ∈ {`'blue'`, `'green'`, `'magenta'`, `'olive'`, `'orange'`, `'purple'`,
       * `'red'`, `'sand'`, `'yellow'`, `'grey-dark'`, `'grey-darker'`}
       */
      gradientColor: {
        type: String,
        default: 'orange'
      }
    },
    computed: {
      navStyle: function () {
        if (this.isNavVisible) {
          return {
            maxHeight: `${3 * this.navLinks.length}rem`
          }
        } else {
          return {}
        }
      }
    },
    methods: {
      toggleNav: function () {
        this.isNavVisible = !this.isNavVisible
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Header.styl">
</style>
