import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import BlogGround from '@/components/blogGround/BlogGround'
import BlogManage from '@/components/blogManage/BlogManage'
import MyInfo from '@/components/myInfo/MyInfo'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',redirect:'/index'},
    { path: '/index',name:'blog',component:Index,
      children:[
    {path:'/',redirect:'/index/blogGround'},
    {path:'/index/blogGround',name:'blogGround',component:BlogGround},
    {path:'/index/blogManage',name:'blogmanage',component:BlogManage},
    {path:'/index/myInfo',name:'myInfo',component:MyInfo}
    ]
  },
    { path:'/login', name:'login',component:Login },
    { path:'/register', name:'register',component:Register }
  ]
})
