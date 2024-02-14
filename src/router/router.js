import { createRouter, createWebHistory } from 'vue-router'

import HomePageVue from '@/pages/HomePage.vue'
import AboutPageVue from '@/pages/AboutPage.vue'
import MultiTransPageVue from '@/pages/MultiTransPage.vue'
import AutoTransPageVue from '@/pages/AutoTransPage.vue'
import DangerousTransPageVue from '@/pages/DangerousTransPage.vue'
import ManagementTransPageVue from '@/pages/ManagementTransPage.vue'
import TerminalServicePageVue from '@/pages/TerminalServicePage.vue'
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
    path: '/multimodal-transportation',
    component: MultiTransPageVue,
    name: 'multi_trans'
  },
  {
    path: '/auto-transportation',
    component: AutoTransPageVue,
    name: 'auto_trans'
  },
  {
    path: '/dangerous-transportation',
    component: DangerousTransPageVue,
    name: 'danger_trans'
  },
  {
    path: '/management-transportation',
    component: ManagementTransPageVue,
    name: 'manage_trans'
  },
  {
    path: '/terminal-services',
    component: TerminalServicePageVue,
    name: 'terminal_service'
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
