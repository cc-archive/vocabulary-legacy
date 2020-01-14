import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'

require('./icons') // Registers icons in the library

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('div#app')
