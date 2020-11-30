// vuex文件夹
import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        count:1,
        Authorization:localStorage.getItem('Authorization')?localStorage.getItem('Authorization'):''},
        token:localStorage.getItem('token')?localStorage.getItem('token'):'',
    mutations:{
        storeLogin(state,user){
            state.Authorization = user.Authorization
            localStorage.setItem('Authorization',user.Authorization)
            state.token = user.token
            localStorage.setItem('token',user.token)
    },
    storeLoginout(state){
        state.Authorization = null
        localStorage.setItem('Authorization',null)
        state.token = null
        localStorage.setItem('token',null)
    }
}});
export default store
