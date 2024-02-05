import { createRouter, createWebHistory } from 'vue-router'

import HomePageVue from '@/pages/HomePage.vue'

const routes = [
  {
    path: '/',
    component: HomePageVue,
    name: 'home'
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
