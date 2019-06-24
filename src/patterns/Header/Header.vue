<template>
  <header :class="gradientColor">
    <Container class="flex">
      <div class="section" id="branding">
        <!-- @slot Branding imagery or site title go here -->
        <a :href="homeLink" class="homelink">
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
        </a>
      </div>
      <div
        v-if="$slots.default"
        v-on:click="toggleDropdown"
        class="section"
        id="hamburger">
        <FontAwesomeIcon :icon="['fas', isContentVisible ? 'times' : 'bars']"/>
      </div>
      <div class="section" id="content" :style="contentStyle">
        <!-- @slot Content goes here -->
        <slot/>
      </div>
    </Container>
  </header>
</template>

<script>
  import Container from '@/elements/Container/Container'

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faBars, faTimes)

  export default {
    name: 'Header',
    components: {
      Container,
      FontAwesomeIcon
    },
    data: function () {
      return {
        isContentVisible: true
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
       * the background gradient for the header
       *
       * ∈ {`'blue'`, `'green'`, `'magenta'`, `'olive'`, `'orange'`, `'purple'`,
       * `'red'`, `'sand'`, `'yellow'`, `'grey-dark'`, `'grey-darker'`}
       */
      gradientColor: {
        type: String,
        default: 'orange'
      },
      /**
       * the link that the branding should point to
       */
      homeLink: {
        type: String,
        default: '/'
      }
    },
    computed: {
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

<style scoped lang="stylus" src="./Header.styl">
</style>
