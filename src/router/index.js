import Vue from 'vue'
import VueRouter from 'vue-router'
// import Storages from '../utils/Storage'
import store from '../store/index';
Vue.use(VueRouter)


const Login = () => import('@/views/Login/Login.vue');
const Home = () => import('@/views/Home/Home.vue');
const HomeOne = () => import('@/views/Home/HomeOne.vue');
const About = () => import('@/views/About/About.vue');
const NotFound = () => import('@/views/notFound.vue');

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/homeone",
    meta: {
      logined: true,
      title: "首页"
    },
    children: [
      {
        path: 'homeone',
        name: "HomeOne",
        component: HomeOne,
        meta: {
          logined: true,
          title: ""
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // component: () => import('../views/Login/login.vue')
    // component: resolve => (require(["@/views/Login/Login.vue"], resolve)),
    component: Login,
    meta: {
      logined: false,
      title: "登录"
    }

  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      logined: true,
      title: ""
    }
  },
  {
    path: '*', // 会匹配所有路径
    name: "NotFound",
    component: NotFound,
    meta: {
      logined: false,
      title: '404'
    }
  }
]

//加上这个页面刷新就不会丢失store里的值
if (window.localStorage.getItem('user')) {
  store.commit('setIsLogin', window.localStorage.getItem('user'));
}


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.logined) { // 判断页面是否需要登陆
    // let info = JSON.parse(Storages.getItem("user"))
    // console.log(store.state.name) 页面一刷新store的内容会丢失
    if (store.state.isLogin) {
      next()
    } else {
      next({
        path: "/login"
      })
    }
  } else {
    next()
  }
})

export default router
