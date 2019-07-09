<template>
  <div class="vocab hello">
    <img v-if="logoType !== 'none'"
         :src="logo"
         alt="Creative Commons logo"
         class="logo"
         :class="logoType">
    <!-- @slot Content goes here -->
    <slot>
      <Heading :level="4" :is-inverted="isInverted">
        {{ computedHeading }}
      </Heading>
      <Paragraph :is-inverted="isInverted">
        {{ computedTagline }}
      </Paragraph>
    </slot>
  </div>
</template>

<script>
  import Heading from '@/elements/Heading/Heading'
  import Paragraph from '@/elements/Paragraph/Paragraph'

  import Invertible from '@/mixins/invertible'

  /**
   * ## Hello greets visitors.
   *
   * Visitors coming to meet CC Vocabulary are greeted with a friendly message
   * chosen at random from a predefined list of messages or a custom one.
   */
  export default {
    name: 'Hello',
    mixins: [
      Invertible
    ],
    components: {
      Paragraph,
      Heading
    },
    data: () => {
      return {
        taglines: [
          'welcome',
          'meet',
          'here',
          'iam',
          'powered',
          'new',
          'vue'
        ]
      }
    },
    props: {
      /**
       * _which Creative Commons logo to show, if any_
       *
       * ∈ {`'wordmark'`, `'lettermark'`, `'letterheart'`, `'none'`}
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
       * _the heading displayed by the component_
       *
       * If not provided, 'CC Vocabulary' is shown in the locale language.
       */
      heading: {
        type: String
      },
      /**
       * _the tagline displayed by the component_
       *
       * If not provided, one will be chosen at random.
       */
      tagline: {
        type: String
      }
    },
    computed: {
      computedHeading: function () {
        if (this.heading) {
          return this.heading
        } else {
          return this.$t('ccvocabulary')
        }
      },
      computedTagline: function () {
        if (this.tagline) {
          return this.tagline
        } else {
          let count = this.taglines.length
          return this.$t(this.taglines[Math.floor(Math.random() * count)])
        }
      },
      logo: function () {
        let color = this.isInverted ? 'white' : 'black'
        return require(
          `@/assets/logo/${this.logoType}_${color}.svg`
        )
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Hello.styl">
</style>

<i18n src="./lang.json">
</i18n>
