import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/normalize.css'
import './assets/css/reset.css'

import axios from 'axios'
Vue.prototype.$axios = axios

import {
  Button, Select, Row, Col, Cascader, MenuItem, Menu, MenuItemGroup, Submenu, Table,
  TableColumn, Popover, Tag, MessageBox, Message
} from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Cascader)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Tag)
// Vue.use(Message)
// Vue.use(MessageBox)
Vue.prototype.$message = Message                //vue实例上挂载Message                
Vue.prototype.$messagebox = MessageBox

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
