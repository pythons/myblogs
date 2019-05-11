import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
import axios from 'axios'
axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')