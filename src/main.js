import Vue from 'vue'
import App from './App.vue'

require('./icons') // Registers icons in the library

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('div#app')
