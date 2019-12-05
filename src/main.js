import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Dashboard from './components/Dashboard/Dashboard.vue'
import Orders from './components/Orders/Orders.vue'
import Map from './components/Map/Map.vue'

// import custom styling to overwrite bootstrap theme
import './custom.scss'
import BootstrapVue from 'bootstrap-vue'
import feather from 'vue-icon'

Vue.config.productionTip = false

Vue.use(feather, 'v-icon')  // icons
Vue.use(Vuex)               // state management
Vue.use(VueRouter)          // front-end routing
Vue.use(BootstrapVue)       // bootstrap theme

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count(state) {
      return state.count
    },
  },
  mutations: {
    increment (state) {
      state.count++;
    }
  }
})

// Map each route to component
const routes = [
  { path: '/', redirect: '/orders'},
  { path: '/orders', component: Dashboard, name: 'orders' },
  { path: '/locate/:addressId', component: Map },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

// Create and mount the root instance
const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export default store;
