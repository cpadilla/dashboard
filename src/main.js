import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Dashboard from './components/Dashboard/Dashboard.vue'

import './custom.scss'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)

// 1. Define route components.
// These can be imported from other files
//const Orders = { template: '<div>foo</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Dashboard },
  { path: '/orders', component: Dashboard },
  { path: '/api/message', component: Dashboard }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// Now the app has started!

/*
new Vue({
  render: h => h(App),
}).$mount('#app')
*/
