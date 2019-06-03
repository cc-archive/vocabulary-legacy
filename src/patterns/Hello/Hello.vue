<template>
  <div class="hello">
    <div v-if="showLogo">
      <img v-if="inverted"
           src="@/assets/logo/wordmark_white.svg"
           alt="Creative Commons logo"
           class="hello--logo">
      <img v-else
           src="@/assets/logo/wordmark_black.svg"
           alt="Creative Commons logo"
           class="hello--logo">
    </div>

    <Heading :level="4" :inverted="inverted">{{ heading }}</Heading>
    <!-- @slot Use this to insert additional content -->
    <slot>
      <Paragraph :inverted="inverted">{{ computedTagline }}</Paragraph>
    </slot>
  </div>
</template>

<script>
  import Heading from '@/elements/Heading/Heading'
  import Paragraph from '@/elements/Paragraph/Paragraph'

  export default {
    name: 'Hello',
    components: {
      Paragraph,
      Heading
    },
    data: () => {
      return {
        taglines: [
          'Welcome to CC Vocabulary!',
          'Meet CC Vocabulary!',
          'CC Vocabulary is here!',
          'Hello, I\'m CC Vocabulary!',
          'Powered by CC Vocabulary!',
          'A new design system for CC!',
          'Or should I say Vue-cabulary!'
        ]
      }
    },
    props: {
      /**
       * whether to show the Creative Commons logo
       */
      showLogo: {
        type: Boolean,
        default: true
      },
      /**
       * the heading displayed by the component
       */
      heading: {
        type: String,
        default: 'CC Vocabulary'
      },
      /**
       * the tagline displayed by the component
       *
       * If not provided, one will be chosen at random.
       */
      tagline: {
        type: String
      },
      /**
       * whether the content is on a dark background
       */
      inverted: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      computedTagline: function () {
        if (this.tagline) {
          return this.tagline
        } else {
          let count = this.taglines.length
          return this.taglines[Math.floor(Math.random() * count)]
        }
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Hello.styl">
</style>
