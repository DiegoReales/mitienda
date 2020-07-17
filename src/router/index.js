import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/categorias',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "categories" */ '../views/Categories.vue')
  }, {
    path: '/carrito',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "categories" */ '../views/Categories.vue')
  }, {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
