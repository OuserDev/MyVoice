import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StepView from '../views/StepView.vue'
import Community from '../views/Community.vue'
import board_detail from '../components/board_detail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/convert',
    name: 'convert',
    component: StepView
  },
  {
    path: '/community',
    name: 'community',
    component: Community,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router