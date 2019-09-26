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
       * _an array of locale objects defining the app's supported locales_
       *
       * Each object must contain `code`, `englishName` and `nativeName`.
       *
       * ```js
       * let localeList = [
       *   {
       *     code: 'fr',
       *     englishName: 'French',
       *     nativeName: 'le français'
       *   }
       * ]
       * ```
       */
      localeList: {
        type: Array,
        validator: val => val.every(
          locale => ['code', 'englishName', 'nativeName'].every(
            key => key in locale
          )
        )
      }
    },
    data: function () {
      let defaultLocales = [
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
      ]
      return {
        language: 'en',
        locales: this.localeList || defaultLocales
      }
    },
    methods: {
      /**
       * Stores the selected locale in local storage
       */
      setLocale () {
        localStorage.setItem('locale', this.language)
        this.$i18n.locale = this.language
      }
    },
    computed: {
      localeOptions: function () {
        return this.locales.map(locale => ({
          value: locale.code,
          text: locale.nativeName
        }))
      }
    },
    created () {
      this.$i18n.locale = localStorage.getItem('locale') || this.language
    }
  }
</script>
