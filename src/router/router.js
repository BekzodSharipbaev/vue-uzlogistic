import { createRouter, createWebHistory } from 'vue-router'

import HomePageVue from '@/pages/HomePage.vue'
import AboutPageVue from '@/pages/AboutPage.vue'

const routes = [
  {
    path: '/',
    component: HomePageVue,
    name: 'home'
  },
  {
    path: '/about',
    component: AboutPageVue,
    name: 'about'
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
