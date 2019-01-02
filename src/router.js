import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
<<<<<<< HEAD
      path: '/lzr',
      name: 'lzr',
      component: () => import('./pages/lzr/index.js')
    },
    {
      path: '/qsf',
      name: 'qsf',
      component: () => import('./pages/qsf/index.js')
    },
    {
      path: '/thq',
      name: 'thq',
      component: () => import('@/pages/thq/index.js')
    },
    {
      path: '/wzh',
      name: 'wzh',
      component: () => import('./components/wzh.vue')
    },
    {
      path: '/wxq',
      name: 'wxq',
      component: () => import('./components/wxq.vue')
    },
    {
      path: '/zgl',
      name: 'zgl',
      component: () => import('@/pages/zgl/index.js')
    }
=======
    path: '/lzr',
    name: 'lzr',
    component: () => import('./components/lzr.vue')
  }, {
    path: '/qsf',
    name: 'qsf',
    component: () => import('./pages/qsf/index.js')
  }, {
    path: '/thq',
    name: 'thq',
    component: () => import('@/pages/thq/index.js')
  }, {
    path: '/wzh',
    name: 'wzh',
    component: () => import('@/pages/wzh/index.js')
  },
  {
    path: '/wxq',
    name: 'wxq',
    component: () => import('./components/wxq.vue')
  }, {
    path: '/zgl',
    name: 'zgl',
    component: () => import('@/pages/zgl/index.js')
  }
>>>>>>> 7911e592725c1b21503e48e2e903e5f910b5180b
  ]
})
