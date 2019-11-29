<template>
  <div class="welcome-story">
    <GitHubCorner
      repo="creativecommons/vue-vocabulary"
      position="absolute">
    </GitHubCorner>
    <p>
      <a
        href="https://creativecommons.org/"
        class="readme-cc-logo">
        <img
          alt="Creative Commons logo"
          src="https://raw.githubusercontent.com/creativecommons/vue-vocabulary/master/readme_assets/cc_logo.png"
          height="62px"
        />
      </a>
    </p>
    <p>
      <a
        href="https://creativecommons.github.io/vue-vocabulary/"
        class="readme-vocabulary-logo">
        <img
          alt="Vocabulary logo"
          src="https://raw.githubusercontent.com/creativecommons/vue-vocabulary/master/readme_assets/vocabulary_logo.svg?sanitize=true"
          height="65px"/>
      </a>
    </p>
    <p>
      This is an interactive playground for Vue components implementing the
      Vocabulary design system.
    </p>
  </div>
</template>

<script>
  import GitHubCorner from '@/elements/GitHubCorner/GitHubCorner'

  export default {
    name: 'welcome',
    components: {
      GitHubCorner
    }
  }
</script>

<style lang="stylus" src="./Welcome.styl">
</style>
