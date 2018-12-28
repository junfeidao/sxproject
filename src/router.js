import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/lzr',
      name: 'lzr',
      component: () => import('./components/lzr.vue')
    },
    {
      path: '/qsf',
      name: 'qsf',
      component: () => import('./components/qsf.vue')
    },
    {
      path: '/thq',
      name: 'thq',
      component: () => import('./components/thq.vue')
    },
    {
      path: '/wzh',
      name: 'wzh',
      component: () => import('@/pages/wzh/index.js')
    },
    {
      path: '/wxq',
      name: 'wxq',
      component: () => import('./components/wxq.vue')
    },
    {
      path: '/zgl',
      name: 'zgl',
      component: () => import('./components/zgl.vue')
    }
  ]
})