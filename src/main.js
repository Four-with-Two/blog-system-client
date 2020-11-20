// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element'
import axios from 'axios'

import './css/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
axios.interceptors.request.use(
  //配置请求头
  config=>{
    if(localStorage.getItem('Authorization')){
      config.headers.Authorization = localStorage.getItem('Authorization')
      config.headers.token = localStorage.getItem('token')
    }
    return config
  },
  error=>{}
  )
 
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
