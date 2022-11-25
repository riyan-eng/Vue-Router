import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import NotFound from '../components/NotFound'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user/:name',
        component: User,
        props: true
    },

    {
        path: '/:catchAll(.*)',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router