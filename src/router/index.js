import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import HomeOne from "../views/Home/HomeOne.vue"
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

    children: [
      {
        path: 'homeone',
        name: "HomeOne",
        component: HomeOne
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  },
  {
    // 会匹配所有路径
    path: '*',
    component: NotFound
  }
]

//导航守卫
// router.beforeEach()

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
