import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

import Storages from './utils/Storage'

import './plugin/element'

import './assets/css/normalize.css'
import './assets/css/reset.css'

import axios from 'axios'

Vue.prototype.$axios = axios
Vue.prototype.$api = api

// if(Storages.getItem("token")){
//   store.commit("setToken",Storages.getItem("token"));
// }



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
