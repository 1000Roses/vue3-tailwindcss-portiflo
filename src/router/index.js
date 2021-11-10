import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Loves from '../views/Loves.vue'
import Contact from '../views/Contact.vue'
import Resume from '../views/Resume.vue'
import DetailLove from '../views/DetailLove.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/loves/:id',
    name: 'detail_love',
    component: DetailLove
  },
  {
    path: '/loves',
    name: 'loves',
    component: Loves
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
