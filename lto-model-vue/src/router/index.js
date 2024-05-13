import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('../views/LayoutPage.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
  } else {
    const userStore = useUserStore()
    const info = userStore.userInfo
    if (info) {
      next()
    } else {
      next({ name: 'login' })
    }
  }
})

export default router
