import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/muslima',
      name: 'muslima',
      component: () => import('../components/Muslima.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: ()=> import('../components/Product.vue')
    }
  ]
})

export default router
