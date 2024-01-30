import { createRouter, createWebHistory } from 'vue-router'

import HomePageVue from '@/pages/HomePage.vue'
import temp from '@/pages/temp.vue'

const routes = [
  {
    path: '/',
    component: HomePageVue,
    name: 'home'
  },
  {
    path: '/temp',
    component: temp,
    name: 'temp'
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
