// vuex文件夹
import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        count:1,
        Authorization:localStorage.getItem('Authorization')?localStorage.getItem('Authorization'):''},
    mutations:{
        storeLogin(state,user){
            state.Authorization = user.Authorization
            localStorage.setItem('Authorization',user.Authorization)
    }
}});
export default store
