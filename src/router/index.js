import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Curriculum from '@/components/Curriculum'
import Portafolio from '@/components/Portafolio'
import Contacto from '@/components/Contacto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/curriculum',
      name: 'Curriculum',
      component: Curriculum
    },
    {
      path: '/portafolio',
      name: 'Portafolio',
      component: Portafolio,
      props: true
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    },
    {
      path: '*', component: Home
    }

  ]
})
