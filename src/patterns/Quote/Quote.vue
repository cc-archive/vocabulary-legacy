<template>
  <div class="vocab quote" :class="quoteClasses">
    <blockquote class="blockquote">
      <FontAwesomeIcon
        class="icon opening"
        :icon="['fas', 'quote-left']"
        size="lg"
        fixed-width/>
      <!-- @slot Content goes here -->
      <slot/>
      <FontAwesomeIcon
        class="icon closing"
        :icon="['fas', 'quote-right']"
        size="lg"
        fixed-width/>
    </blockquote>
    <cite
      v-if="attribution"
      class="cite">
      &mdash; {{ attribution }}
    </cite>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import Section from '@/layouts/Section/Section'

  import Branded from '@/mixins/branded'
  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'

  import Invertible from '@/mixins/invertible'

  library.add(faQuoteLeft, faQuoteRight)

  /**
   * ### Quotes are paraphrased content.
   *
   * A quote is content taken from another source. Famous sayings, citations,
   * words of wisdom, koans, speech excerpts, results of a study or lyrics from
   * a song, whatever it may be, if you didn't compose it, you better attribute
   * it.
   */
  export default {
    name: 'Quote',
    components: {
      Section,
      FontAwesomeIcon
    },
    mixins: [
      Branded,
      Colored,
      Indicating,

      Invertible
    ],
    props: {
      /**
       * _the entity to which the quote is ascribed_
       */
      attribution: {
        type: String
      },
      /**
       * _whether the quote appears as a part of a collection in a grid_
       */
      isAnalected: {
        type: Boolean,
        default: false
      },
      /**
       * _whether the quotation comes with a line along the side_
       */
      isLined: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      quoteClasses: function () {
        return [
          ...this.brandedClasses,
          ...this.coloredClasses,
          ...this.indicatingClasses,

          ...this.invertibleClasses,

          {
            'lined': this.isLined,
            'analected': this.isAnalected
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" src="./Quote.styl">
</style>
