import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/HomePage.vue')

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
      path: '/job/:id',
      name: 'singleJobItem',
      component: () => import('./components/SingleJobItem.vue'),
    },
    {
      path: '/userpage',
      name: 'userpage',
      component: () => import('./components/UserPage.vue'),
      children: [{
        path: '/resume',
        name: 'resume',
        component: () => import('./components/Resume.vue'),
      }, {
        path: '/addjob',
        name: 'addjob',
        component: () => import('./components/AddJob.vue'),
      },{
        path: '/entmain',
        name: 'entmain',
        component: () => import('./components/entMain.vue'),
      },{
        path: '/entjob',
        name: 'entjob',
        component: () => import('./components/entJob.vue'),
      }, ]
    },
    {
      path: '/check',
      name: 'check',
      component: () => import('./components/checkEnterprise.vue'),
    },
    // {
    //   path: '/addjob',
    //   name: 'addjob',
    //   component: () => import('./components/AddJob.vue'),
    // },
    // {
    //   path: '/resume',
    //   name: 'resume',
    //   component: () => import('./components/Resume.vue'),
    // },
  ],
  mode: "history",
})