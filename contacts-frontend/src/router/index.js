import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Contacts.vue'

const routes = [ 
    {
        path: '/',
        name: 'Contacts Page',
        component: Home
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router