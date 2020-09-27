import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: () => import('@/views/Login.vue'),
  //   meta: {
  //     title: '登录界面'
  //   }
  // },
  // {
  //   path: '/login',
  //   redirect: '/'
  // },

  {
    // path: '/',
    path: '/',
    name: 'OneMap',
    component: () => import('@/views/OneMap.vue'),
    meta: {
      title: '天津港水域船舶污染风险智能化动态监控平台'
    }
  },
  {
    path: '/oneMap',
    redirect: '/'
  },
  {
    path: '/test',
    name: 'testPage',
    component: () => import('@/views/testPage.vue'),
    meta: {
      title: 'xx'
    }
  },
  {
    path: '/testZM',
    name: 'testZM',
    component: () => import('@/views/zmPage.vue'),
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router