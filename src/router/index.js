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
      path: '/shafikul-text',
      name: 'shafikul-text',
      component: () => import('../views/Shafikul.vue')
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
    },
    {
      path: '/testwork',
      name: 'testwork',
      component: ()=> import('../components/Test.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../components/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: ()=> import('../components/SignUp.vue')
    }
  ]
})

export default router
