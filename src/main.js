// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element'
import axios from 'axios'
console.log(axios)

import './css/global.css'
Vue.config.productionTip = false

//axios接口引用
import Axios from "axios"
Vue.prototype.$axios=Axios
//qs引用
import qs from "qs"	
Vue.prototype.$qs=qs
//vueresourse引用
import VueResourse from 'vue-resource'
Vue.use(VueResourse)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
