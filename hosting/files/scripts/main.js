import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js'
import Vuex from 'https://unpkg.com/vuex@3.1.1/dist/vuex.esm.browser.js'
import VueRouter from 'https://unpkg.com/vue-router@3.1.2/dist/vue-router.esm.browser.js'

Vue.use(Vuex)
Vue.use(VueRouter)

import App from './App.js'

new Vue({
  render: h => h(App)
}).$mount('#app')
