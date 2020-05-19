import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/house',
    name: 'House',
    component: () => import('@/views/house.vue')
  },
  {
    path: '/vehicle',
    name: 'Vehicle',
    component: () => import('@/views/vehicle.vue')
  },
  {
    path: '/recruit',
    name: 'Recruit',
    component: () => import('@/views/recruit.vue')
  },
  {
    path: '/lieIdle',
    name: 'LieIdle',
    component: () => import('@/views/lieIdle.vue')
  },
  {
    path: '/partTimeJob',
    name: 'PartTimeJob',
    component: () => import('@/views/partTimeJob.vue')
  },
  {
    path: '/pets',
    name: 'Pets',
    component: () => import('@/views/pets.vue')
  },
  {
    path: '/jobWanted',
    name: 'JobWanted',
    component: () => import('@/views/jobWanted.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import('@/views/friends.vue')
  },
  {
    path: '/jiaoche',
    name: 'Jiaoche',
    component: () => import('@/views/jiaoche.vue')
  },
  {
    path: '/lieIdlePage',
    name: 'LieIdlePage',
    component: () => import('@/views/lieIdlePage.vue')
  }
]
const router = new VueRouter({
  routes
})

export default router
