import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 设置属性
  state: {
    username: "",
    isLogin: false,
  },

  // 获取属性的状态
  getters: {
    //获取用户名
    //获取登录状态
    username: state => state.username,
    isLogin: state => state.isLogin,
  },

  // 设置属性状态
  mutations: {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag
    },
    usernameStatus(state, flag) {
      state.username = flag
    }
  },

  // // 应用mutations
  // actions: {
  //   //获取登录状态
  //   setUser({
  //     commit
  //   }, flag) {
  //     commit("userStatus", flag)
  //   },
  // }
})