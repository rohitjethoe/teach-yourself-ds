import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Page from '@/views/Page.vue'
import MoreResources from '@/views/MoreResources.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/:slug', name: 'Page', component: Page },
  { path: '/more-resources', name: 'More Resources', component: MoreResources }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router