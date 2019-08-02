import Vue from 'vue'
import Router from 'vue-router'
import home from "../views/home"
import classfi from "../views/classfi"
import vip from "../views/vip"
import car from "../views/car"
import my from "../views/my"
import multipoint from "../views/children/multipoint"
import selected from "../views/children/selected"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: '/home/multipoint',
          name: 'multipoint',
          component: multipoint
        },
        {
          path: '/home/selected',
          name: 'selected',
          component: selected
        }
      ]
    },
    {
      path: '/classfi',
      name: 'classfi',
      component: classfi
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/',
      redirect: "/home/multipoint"
    }
  ]
})
