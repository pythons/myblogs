import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./components/HeaderItem.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/LoginItem.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./components/SignUpItem.vue')
    },
  ],
  mode: "history",
})