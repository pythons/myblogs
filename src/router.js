import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./components/HomePage.vue')

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
    {
      path: '/blog/:id',
      name: 'singleBlogItem',
      component: () => import('./components/SingleBlogItem.vue'),
    },
    {
      path: '/userpage',
      name: 'userpage',
      component: () => import('./components/UserPage.vue'),
    },
  ],
  mode: "history",
})