import Vue      from 'vue'
import Router   from 'vue-router'
import Home     from './../pages/Home.vue'
import Act     from './../pages/Act.vue'

Vue.use(Router)

let routerInstance = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/act',
      name: 'Act',
      component: Act
    },

  ]
})

export default routerInstance;
