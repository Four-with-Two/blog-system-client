<template>
  <div class="register" style="min-width:1350px,min-heigth:500px">
    <div class="head">
      <div class="left">
        <a href="http://localhost:8080/#/index/blogGround"
          >&nbsp&nbsp<<博客广场</a
        >
      </div>
      <div class="right">
        [ <a href="http://localhost:8080/#/login">登录</a> .
        <a href="http://localhost:8080/#/register">注册</a> ]&nbsp&nbsp
      </div>
    </div>
    <div class="box">
      <form  class="register_form">
      <h1 id="title">纯享博客注册页面</h1>
      <div class="user_name">
        <input type="text"   placeholder="请输入中文用户名" name="username" id="username" v-model="register_form.username"/>
      </div>
      <div class="email">
        <div class="ema_in">
          <input type="text"  placeholder="请输入邮箱地址" name="email" id="email" v-model="register_form.mail"/>
        </div>
      </div>
      <div class="password">
        <input type="password"  placeholder="请输入密码" name="password" id="password" v-model="register_form.password"/>
      </div>
      <div class="btn">
        <el-button type="primary" @click="register">注册</el-button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      register_form: {
        username: "",
        mail:"",
        password: "",
      },
    }
  },
  methods:{
    register(){
      let data = {
        user_name:this.register_form.username,
        mail:this.register_form.mail,
        password:this.register_form.password
      }
      console.log(data)
      axios({
        url:"http://gdut-hqcc.cn:8887/user/register",
        method:"post",
        data:data
      }).then((res)=>{
        this.registerform=res.data.registerform;
        console.log(res);
        alert(res.message);
      })
      

    },
 
  
  },
  watch:{
    
  }

};

</script>

<style scoped>
.head {
  height: 40px;
  width: 100%;
  background-color: #c0c0c0;
  border-bottom: 1px solid #484848;
}
.head a {
  text-decoration: none;
  color: #0066ff;
}

.register {
  height: 100%;
  width: 100%;
  float: left;
}
.left {
  float: left;
  margin-top: 8px;
}
.right {
  float: right;
  margin-top: 8px;
}
.box {
  background-color: azure;
  width: 30%;
  height: 370px;
  top: 20%;
  margin: auto;
  position: relative;
  border: 1px solid;
  border-radius: 10px;
}
#title {
  text-align: center;
  margin-top: 10px;
}
.box input {
  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 13px 14px;
  width: 80%;
  height: 20%;
  font-size: 18px;
  margin-left: 7.5%;
  margin-top: 5%;
}
.box input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.btn {
  margin: auto;
  margin-top: 4%;
  text-align: center;
}
.btn a {
  width: 70%;
  color: #fff;
  background: #3b78dd;
  font-size: 22px;
  letter-spacing: 2.2px;
  line-height: 48px;
  display: block;
  border-radius: 3px;
  margin: auto;
  text-decoration: none;
}
</style>