import { createRouter, createWebHistory } from 'vue-router'

import HomePageVue from '@/pages/HomePage.vue'
import AboutPageVue from '@/pages/AboutPage.vue'
import TestPageVue from '@/pages/TestPage.vue'

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
  },
  {
    path: '/test',
    component: TestPageVue,
    name: 'test'
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
