<template>
  <div class="vocab definition">
    <div class="heading">
      <h4
        class="word"
        :brand="brand"
        :color="color"
        :shade="shade"
        :indication="indication"
        :level="4">
        <!-- @slot Word goes here -->
        <slot name="word">
          {{ word }}
        </slot>
      </h4>
      <p class="usage">
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
      </p>
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
  import Branded from '@/mixins/branded'
  import Colored from '@/mixins/colored'
  import Indicating from '@/mixins/indicating'

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
    mixins: [
      Branded,
      Colored,
      Indicating
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
          ...this.brandedClasses,
          ...this.coloredClasses,
          ...this.indicatingClasses
        ]
      }
    }
  }
</script>

<style src="@creativecommons/vocabulary/css/patterns/Definition.css">
</style>

<i18n src="./lang.json">
</i18n>
