import Locale from '../src/patterns/Locale/Locale'

import i18n from '../src/i18n'

export default previewComponent => {
  return {
    i18n,
    render (createElement) {
      return createElement(
        'v-app',
        {
          props: {
            id: 'v-app'
          }
        },
        [
          createElement(Locale), // Show the locale switcher in every preview
          createElement(Object.assign(previewComponent))
        ]
      )
    }
  }
}
