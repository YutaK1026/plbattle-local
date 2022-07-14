import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import FieldPage from '../views/FieldPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      forVisitors: true
    }
  },
  {
    path: '/field',
    name: 'field',
    component: FieldPage,
    meta: {
      forVisitors: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
