import Vue from 'https://unpkg.com/vue@2.6.10/dist/vue.esm.browser.js'
import Vuex from 'https://unpkg.com/vuex@3.1.1/dist/vuex.esm.browser.js'
import VueRouter from 'https://unpkg.com/vue-router@3.1.2/dist/vue-router.esm.browser.js'

import App from './App.js'

Vue.use(Vuex)
Vue.use(VueRouter)


const html = String.raw

const homeTemplate = html`<div>
  <h1>Rendered with <strong>Vue</strong></h1>
  <h3>Backend powered by <strong>mongoDB Atlas</strong></h3>
</div>`


const Home = {
  template: homeTemplate
}

const Settings = {
  template: html`<div>
  <h1>Settings Page</h1>
</div>`
}
const Bar = { template: html`<div>bar</div>` }

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/settings', component: Settings, name: 'settings' },
    { path: '/bar', component: Bar }
  ]
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
