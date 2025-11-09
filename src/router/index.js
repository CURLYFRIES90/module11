import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../views/About.vue'
import Quotes from '../views/Quotes.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'About', component: About },
  { path: '/quotes', name: 'Quotes', component: Quotes },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound } // catch-all 404
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

