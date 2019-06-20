<template>
  <!-- TODO Use dropdown -->
  <div class="locale">
    <label :for="id">
      <FontAwesomeIcon :icon="['fas', 'language']" size="2x" class="icon"/>
    </label>
    <select v-model="$i18n.locale" :id="id">
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
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faLanguage } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faLanguage)

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
        id: null
      }
    },
    mounted: function () {
      this.id = this._uid // Replace with UUID in case things go south
    }
  }
</script>

<style scoped lang="stylus" src="./Locale.styl">
</style>
