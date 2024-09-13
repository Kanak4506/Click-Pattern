import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'pattern'
    },
    {
      path: '/',
      name: 'default',
      component: () => import('@/layout/AppLayout.vue'),
      children: [
        {
          path: 'pattern',
          name: 'pattern',
          component: () => import('@/views/Pattern.vue'),
        }
      ]

    }
  ]
})

export default router