<template>
  <div class="vocab locale">
    <span class="icon globe is-small is-left">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path d="M20.186 9.375C19.335 4.143 17.332.469 15 .469s-4.336 3.674-5.186 8.906h10.372zM9.375 15c0 1.3.07 2.549.193 3.75h10.858a36.74 36.74 0 00.193-3.75c0-1.3-.07-2.549-.193-3.75H9.568A36.725 36.725 0 009.375 15zM28.4 9.375a14.562 14.562 0 00-9.257-8.297c1.43 1.98 2.414 4.963 2.93 8.297H28.4zM10.852 1.078A14.552 14.552 0 001.6 9.375h6.328c.51-3.334 1.494-6.316 2.924-8.297zM29.027 11.25h-6.72c.123 1.23.193 2.49.193 3.75 0 1.26-.07 2.52-.193 3.75h6.715c.322-1.201.503-2.45.503-3.75 0-1.3-.181-2.549-.498-3.75zM7.5 15c0-1.26.07-2.52.193-3.75H.973A14.66 14.66 0 00.469 15c0 1.3.187 2.549.504 3.75h6.715A39.675 39.675 0 017.5 15zm2.314 5.625c.85 5.232 2.854 8.906 5.186 8.906s4.336-3.674 5.186-8.906H9.814zm9.334 8.297a14.576 14.576 0 009.258-8.297h-6.328c-.515 3.334-1.5 6.316-2.93 8.297zM1.6 20.625a14.562 14.562 0 009.257 8.297c-1.43-1.98-2.414-4.963-2.93-8.297H1.6z" fill="currentColor"/></svg>
    </span>
    <div class="select">
      <select ref="select" aria-labelledby="locale-label" @change="updateLanguage">
        <option disabled id="locale-label">Language</option>
        <option v-for="language in languages"
                :key="language.name"
                :value="language.name">
          {{language.nativeName}}
        </option>
      </select>
    </div>
    <span class="icon caret-down is-small is-right">
      <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M7.45896 11.25H22.5351c1.043 0 1.5645 1.2598.8262 1.998l-7.5352 7.5411c-.457.457-1.2011.457-1.6582 0L6.63279 13.248c-.73828-.7382-.2168-1.998.82617-1.998z" fill="currentColor"/></svg>
    </span>
  </div>
</template>

<script>
  /**
   * ### VLocale brings the content to you.
   *
   * When exploring an app that has translations defined, the user can
   * switch between locales using this component.
   */
  export default {
    name: 'VLocale',
    props: {
      languages: {
        type: Array,
        default: () => ([
          { name: 'English', nativeName: 'English' },
          { name: 'Japanese', nativeName: '日本語' },
          { name: 'Russian', nativeName: 'Русский' },
          { name: 'Spanish', nativeName: 'Español' }
        ])
      },
      selectedLanguage: {
        type: String,
        default: 'English'
      }
    },
    mounted: function () {
      if (this.selectedLanguage !== 'English') {
        this.$refs.select.value = this.selectedLanguage
      }
    },
    methods: {
      updateLanguage () {
        this.$emit('update', { selectedLanguage: this.$refs.select.value })
      }
    }
  }
</script>
