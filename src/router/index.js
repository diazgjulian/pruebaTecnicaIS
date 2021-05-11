import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('../views/People.vue')
  },
  {
    path: '/starships',
    name: 'Starships',
    component: () => import('../views/Starships.vue')
  },
  {
    path: '/planets',
    name: 'Planets',
    component: () => import('../views/Planets.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
