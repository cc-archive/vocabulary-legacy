<template>
  <!-- TODO Use dropdown -->
  <div class="locale">
    <FontAwesomeIcon :icon="['fas', 'language']" size="2x" class="icon"/>
    <select v-model="i18n.locale">
      <option
        v-for="(locale, index) in locales"
        :key="index"
        :value="locale.code">
        {{ locale.nativeName }}
      </option>
    </select>
  </div>
</template>

<script>
  import i18n from '@/i18n'

  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  export default {
    name: 'Locale',
    components: {
      FontAwesomeIcon
    },
    data: function () {
      return {
        locales: [
          {
            code: 'hi',
            englishName: 'Hindi',
            nativeName: 'हिन्दी'
          },
          {
            code: 'en',
            englishName: 'English',
            nativeName: 'English'
          }
        ],
        i18n: i18n
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Locale.styl">
</style>
