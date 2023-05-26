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
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/clothes/:id/:slug',
      name: 'clothes',
      component: () => import('@/views/Clothes.vue'),
      // beforeEnter: (to, from) => {
      //     // Checks if ID passed from client is equal to any other in the 'database'
      //     const exists = destinations.find(destination => destination.id === parseInt(to.params.id))
      //     if (!exists) return { name: 'NotFound' }
      // },
    },
    {
      path: '/clothes/:id/:slug/:productId/:productSlug',
      name: 'product',
      component: () => import('@/views/Product.vue'),
    },
  ]
})

export default router
