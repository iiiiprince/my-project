import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Main from '@/pages/Main'
import OrderList from '@/pages/Order/OrderList'
import TicketsList from '@/pages/Order/TicketsList'
// import Order from '@/pages/Order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      redirect: '/main/orderList',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'orderList',
          component: OrderList
        },
        {
          path: 'ticketsList',
          component: TicketsList
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Login',
      redirect: '/'
    }
  ]
})
