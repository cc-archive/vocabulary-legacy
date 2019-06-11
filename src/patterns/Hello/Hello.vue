<template>
  <div class="hello">
    <img v-if="logoType !== 'none'"
         :src="logo"
         alt="Creative Commons logo"
         class="logo"
         :class="logoType">
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
       * which Creative Commons logo to show, if any
       */
      logoType: {
        type: String,
        validator: val => [
          'wordmark',
          'lettermark',
          'letterheart',
          'none' // Hides the logo altogether
        ].includes(val),
        default: 'wordmark'
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
      },
      logo: function () {
        let color = this.inverted ? 'white' : 'black'
        return require(
          `@/assets/logo/${this.logoType}_${color}.svg`
        )
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Hello.styl">
</style>
