import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import nft from '../components/nft.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nft',
    name: 'nft',
    component: nft
  },
  {
    path: '/login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Animation_main_wave.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
