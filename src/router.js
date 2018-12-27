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
  ]
})