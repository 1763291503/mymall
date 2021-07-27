import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('views/home.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('views/category.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('views/cart.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('views/user.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes

})

export default router
