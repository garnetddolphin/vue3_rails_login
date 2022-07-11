import Vue from 'vue'
import Router from 'vue-router'

// components
import Top from './components/top.vue'
import Login from './components/login.vue'
import Logout from './components/logout.vue'
import Error from './components/error.vue'

// store
import Store from './store/index.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
    },
    {
      path: 'error',
      name: 'error',
      component: Error,
    },
    {
      path: '*',
      redirect: '/error'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(page => page.meta.isPublic) || Store.state.auth.token) {
    next()
  } else {
    next('/login')
  }
})

export default router