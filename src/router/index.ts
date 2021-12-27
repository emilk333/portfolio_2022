import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Projects from '../views/Projects.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
