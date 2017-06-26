import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import addUser from '@/components/addUser'
import personel from '@/components/personel'
import edituser from '@/components/edituser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/addUser',
      name: 'addUser',
      component: addUser
    },
    {
      path: '/personel/:id',
      name: 'personel',
      component: personel
    },
    {
      path: '/edituser/:id',
      name: 'edituser',
      component: edituser
    }
  ]
})
