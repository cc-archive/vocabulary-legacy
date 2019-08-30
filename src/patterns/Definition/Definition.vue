<template>
  <div class="vocab definition">
    <div class="heading">
      <Heading
        class="word"
        :color="color"
        :shade="shade"
        :level="4">
        <!-- @slot Word goes here -->
        <slot name="word">
          {{ word }}
        </slot>
      </Heading>
      <Paragraph class="usage">
        <span
          v-if="pronunciation"
          class="pronunciation">
          /{{ pronunciation }}/
        </span>
        <span
          v-if="partOfSpeech"
          class="part-of-speech">
          {{ partOfSpeech }}
        </span>
      </Paragraph>
    </div>

    <div class="definitions">
      <!-- @slot Content goes here -->
      <slot/>
    </div>

    <div
      v-if="$slots.seeAlso"
      class="see-also">
      <span class="ornament">{{ $t('seealso') }}:</span>
      <!-- @slot Content to also see goes here -->
      <slot name="seeAlso"/>
    </div>
  </div>
</template>

<script>
  import Heading from '@/elements/Heading/Heading'
  import Paragraph from '@/elements/Paragraph/Paragraph'

  import Colored from '@/mixins/colored'

  /**
   * ### Definitions explain words with words.
   *
   * A definition lists the word, its syllabus, how it is to be
   * pronounced, the part of speech it acts as and the meanings of the word in
   * alternative, preferably simpler words. The dictionary entry has a
   * remarkable, visually distinct structure.
   */
  export default {
    name: 'Definition',
    components: {
      Heading,
      Paragraph
    },
    mixins: [
      Colored
    ],
    props: {
      /**
       * _the word being defined_
       */
      word: {
        type: String
      },
      /**
       * _IPA representation of the word hinting at pronunciation_
       */
      pronunciation: {
        type: String
      },
      /**
       * _the part of speech that this word will be used as_
       */
      partOfSpeech: {
        type: String
      }
    },
    computed: {
      headingClasses: function () {
        return [
          ...this.coloredClasses
        ]
      }
    }
  }
</script>

<style lang="stylus" src="./Definition.styl">
</style>

<i18n src="./lang.json">
</i18n>
