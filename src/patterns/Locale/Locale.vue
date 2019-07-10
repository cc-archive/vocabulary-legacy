<template>
  <div class="vocab locale">
    <SelectField
      v-model="$i18n.locale"
      color="orange"
      icon="globe"
      :optionList="localeOptions"/>
  </div>
</template>

<script>
  import SelectField from '@/elements/SelectField/SelectField'

  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faGlobe } from '@fortawesome/free-solid-svg-icons'

  library.add(faGlobe)

  /**
   * ## Locale translates Vocabulary to the users' language.
   *
   * When exploring an app that has translations defined, the user can
   * switch between locales using this component.
   */
  export default {
    name: 'Locale',
    components: {
      SelectField
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
        ]
      }
    },
    computed: {
      localeOptions: function () {
        return this.locales.map(locale => ({
          value: locale.code,
          text: locale.nativeName
        }))
      }
    }
  }
</script>
