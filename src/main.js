import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Dashboard from './components/Dashboard/Dashboard.vue'
import Map from './components/Map/Map.vue'

import './custom.scss'
import BootstrapVue from 'bootstrap-vue'

import feather from 'vue-icon'

Vue.config.productionTip = false

Vue.use(feather, 'v-icon')
Vue.use(VueRouter)
Vue.use(BootstrapVue)

// Map each route to component
const routes = [
  { path: '/', component: Dashboard },
  { path: '/orders', component: Dashboard },
  { path: '/locate/:addressId', component: Map },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

// Create and mount the root instance
const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
