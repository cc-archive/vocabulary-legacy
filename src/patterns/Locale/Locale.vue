<template>
  <div class="vocab locale">
    <SelectField
      v-model="language"
      v-bind="$attrs"
      color="orange"
      icon="globe"
      :option-list="localeOptions"
      @change="setLocale"/>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faGlobe } from '@fortawesome/free-solid-svg-icons'

  import SelectField from '@/elements/SelectField/SelectField'

  library.add(faGlobe)

  /**
   * ### Locale brings the content to you.
   *
   * When exploring an app that has translations defined, the user can
   * switch between locales using this component.
   */
  export default {
    name: 'Locale',
    inheritAttrs: false,
    components: {
      SelectField
    },
    props: {
      /**
       * _an object of locale objects defining the app's supported locales_
       *
       * Each object must contain `direction`, `englishName` and
       * `nativeName` and must be the value for key being the locale `code`.
       *
       * ```js
       * let locales = {
       *   fr: {
       *     direction: 'ltr',
       *     englishName: 'French',
       *     nativeName: 'le Français'
       *   }
       * }
       * ```
       */
      locales: {
        type: Object,
        validator: val =>
          Object.keys(val).every(code => {
            let locale = val[code]
            return [
              'direction',
              'englishName',
              'nativeName'
            ].every(key => key in locale)
          })
      }
    },
    data: function () {
      let defaultLocales = {
        'hi': {
          direction: 'ltr',
          englishName: 'Hindi',
          nativeName: 'हिन्दी'
        },
        'en': {
          direction: 'ltr',
          englishName: 'English',
          nativeName: 'English'
        }
      }
      return {
        language: null,
        localeMap: this.locales || defaultLocales
      }
    },
    computed: {
      localeOptions: function () {
        return Object.keys(this.localeMap).map(code => {
          let locale = this.localeMap[code]
          return {
            value: code,
            text: locale.nativeName
          }
        })
      }
    },
    watch: {
      // Set up a two-way sync between language and $i18n.locale
      language (to, from) {
        if (to !== from) { // Breaks recursion
          this.$i18n.locale = to
        }
      },
      '$i18n.locale': function (to, from) {
        if (to !== from) { // Breaks recursion
          this.language = to
        }
      }
    },
    methods: {
      setLocale () {
        localStorage.setItem('locale', this.language)
        document.documentElement.setAttribute(
          'dir',
          this.localeMap[this.language].direction
        )
      }
    },
    created () {
      this.language = localStorage.getItem('locale') || 'en'
    }
  }
</script>
