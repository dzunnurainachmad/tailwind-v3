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
      path: '/category/:productCategory',
      name: 'ProductCategory',
      component: () => import('../views/ProductCategory.vue')
    },
    {
      path: '/product/:productId',
      name: 'ProductDetail',
      component: () => import('../views/ProductDetail.vue')
    }
  ]
})

export default router
