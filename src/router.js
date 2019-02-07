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
    {
      path: '/check',
      name: 'check',
      component: () => import('./components/checkEnterprise.vue'),
    },
    {
      path: '/addjob',
      name: 'addjob',
      component: () => import('./components/AddJob.vue'),
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('./components/Resume.vue'),
    },
  ],
  mode: "history",
})