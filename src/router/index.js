import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/FrontPage'
import ToDoComponent from '@/components/ToDoComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage
    },
    {
      path: '/ToDo',
      name: 'ToDoComponent',
      component: ToDoComponent
    }
  ]
})
