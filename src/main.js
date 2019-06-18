import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import {store} from './store/store'
import App from './App.vue'


Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history'
})

router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})