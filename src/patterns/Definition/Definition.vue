<template>
  <div class="vocab dictionary">
    <div class="heading">
      <Heading :level="4" class="word">
        <!-- @slot Word goes here -->
        <slot name="word">
          {{ word }}
        </slot>
      </Heading>
      <Paragraph class="usage">
        /{{ pronunciation }}/
        <em><strong>{{ partOfSpeech }}</strong></em>
      </Paragraph>
    </div>

    <div class="definitions">
      <!-- @slot Content goes here -->
      <slot/>
    </div>
  </div>
</template>

<script>
  import Heading from '@/elements/Heading/Heading'
  import Paragraph from '@/elements/Paragraph/Paragraph'

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
    }
  }
</script>

<style lang="stylus" src="./Definition.styl">
</style>
