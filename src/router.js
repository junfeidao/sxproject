import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/lzr',
    name: 'lzr',
    component: () => import('@/pages/lzr/index.js')
  }, {
    path: '/qsf',
    name: 'qsf',
    component: () => import('@/pages/qsf/index.js')
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
    component: () => import('@/components/wxq.vue')
  }, {
    path: '/zgl',
    name: 'zgl',
    component: () => import('@/pages/zgl/index.js')
  }
  ]
})
