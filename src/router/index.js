import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ContactIndex from '../pages/ContactIndex.vue'
import ContactDetails from '../pages/ContactDetails.vue'
import ContactEdit from '../pages/ContactEdit.vue'
import Statistics from '@/pages/Statistics.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'ContactIndex',
      component: ContactIndex
    },
    {
      path: '/contact/:id',
      name: 'ContactDetails',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:id?',
      name: 'ContactEdit',
      component: ContactEdit
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
  ]
})

export default router
