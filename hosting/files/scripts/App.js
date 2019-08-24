const html = String.raw

const template = html`<div id="app">
  <nav>
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'settings'}">Settings</router-link>
    <router-link to="/bar">Bar</router-link>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</div>`

export default {
  template
}
