import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "",
    isLogin: false,
    //首页table
    dailogobj: {
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    }

  },
  mutations: {
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin;
    }
  },
  actions: {
  },
  modules: {
  }
}) 
