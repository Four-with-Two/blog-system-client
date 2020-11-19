import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import BlogGround from '@/components/blogGround/BlogGround'
import BlogDetail from '@/components/blogGround/BlogDetail'
import UserInfo from '@/components/blogGround/UserInfo'
import BlogManage from '@/components/blogManage/BlogManage'
import BlogEdit from '@/components/blogManage/BlogEdit'
import BlogModify from '@/components/blogManage/BlogModify'
import MyInfo from '@/components/myInfo/MyInfo'

Vue.use(Router)
//先全部设置为需要身份验证
const router = new Router({
  routes: [
    { path: '/',redirect:'/index',meta:{requiresAuth:true}},//想要index页面需要先登录
    { path: '/index',name:'博客园',component:Index,
      children:[
    {path:'/',redirect:'/index/blogGround'},
    {path:'/index/blogGround',name:'博客广场',component:BlogGround,},
    {path:'/index/blogDetail',name:'博客详情',component:BlogDetail},
    {path:'/index/userInfo',name:'用户信息',component:UserInfo},
    {path:'/index/blogManage',name:'博客管理',component:BlogManage},
    {path:'/index/blogEdit',name:'博客编辑',component:BlogEdit},
    {path:'/index/blogModify',name:'博客修改',component:BlogModify},
    {path:'/index/myInfo',name:'我的资料',component:MyInfo}
    ]
  },
    { path:'/login', name:'login',component:Login },
    { path:'/register', name:'register',component:Register }
  ]
})

router.beforeEach((to,from,next)=>{//全局路由守卫，判断用户是不是登录了
  if(to.path === '/login'|| to.path === "/register" ){//
    next()
  }else{
    let token = localStorage.getItem('Authonrizantion')
    if(token=="null"){
      next('/login')
    }else{
      next()
    }
}})
export default router

