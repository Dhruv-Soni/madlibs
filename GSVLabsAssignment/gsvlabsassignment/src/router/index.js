import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/authentication/Login.vue'
import Register from '../components/authentication/Register.vue'
import PoemsAll from '../components/poems/PoemsAll.vue'
import CreatePoem from '../components/poems/CreatePoem.vue'
import EditPoems from '../components/poems/EditPoems.vue'
import * as auth from '../services/AuthService'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if(!auth.isLoggedIn()){
        next();
      }
      else{
        next('/');
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if(!auth.isLoggedIn()){
        next();
      }
      else{
        next('/');
      }
    }
  },
  {
    path: '/poems',
    name: 'poems-all',
    component: PoemsAll,
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()){
        next();
      }
      else{
        next('/login');
      }
    }
  },
  {
    path: '/poems/new',
    name: 'poems-create',
    component: CreatePoem,
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()){
        next();
      }
      else{
        next('/login');
      }
    }
  },
  {
    path: '/poems/:edit',
    name: 'poems-edit',
    component: EditPoems,
    beforeEnter: (to, from, next) => {
      if(auth.isLoggedIn()){
        next();
      }
      else{
        next('/login');
      }
    }
  },
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
})

export default router
