import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Contacts.vue'
import SingleContact from '../components/SingleContact.vue'

const routes = [ 
    {
        path: '/',
        name: 'ContactsPage',
        component: Home,
        children: [
            {
                path: '/single-contact/:id',
                name: 'SingleContact',
                component: SingleContact
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router