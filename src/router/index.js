import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import Main from '@/components/Main'

Vue.use(Router)
Vue.use(Vuex)
Vue.use(ElementUI)

const store = new Vuex.Store({
  state: {
    test: 'this is test statement for vuex'
  }
})
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    }
  ]
})
