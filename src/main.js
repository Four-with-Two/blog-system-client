// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {RadioGroup,RadioButton,Menu,Submenu,MenuItemGroup,MenuItem,Container,Header,Aside,Footer,Main} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'; //还需要引入样式表才能使用

Vue.use(Container)//使用use是用来全局注册插件
Vue.use(Header)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Main)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
