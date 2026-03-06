import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Activities from '../views/Activities.vue'
import Projets from '../views/Projets.vue'
import Join from '../views/Join.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/activities', name: 'Activities', component: Activities },
  { path: '/projets', name: 'Projets', component: Projets },
  { path: '/join', name: 'Join', component: Join },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
