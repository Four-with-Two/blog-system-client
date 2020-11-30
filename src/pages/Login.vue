<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 登录表单区域 -->
      <el-form
        class="login-form"
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
      >
        <p class="login-head">纯享版博客园登录</p>
        <!-- 邮箱/用户名 -->
        <!-- <div>{{}}</div> -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入邮箱/用户名"
            @keyup.enter.native="submitForm('loginForm')"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code">
          <el-row :span="24">
            <el-col :span="12">
              <el-input
                ref="veriCode"
                v-model="loginForm.code"
                placeholder="请输入验证码"
                @keyup.enter.native="submitForm('loginForm')"
              ></el-input>
            </el-col>
            <el-col :span="12">
              <div class="login-code" @click="getCode">
                <!--验证码组件-->
                <img :src="this.imgCode"
                  style="width: 122px;height: 38px;cursor: pointer;" />
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm('loginForm')"
            >登录</el-button
          >
          <el-button type="primary" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store/index.js";
import { mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
  name: "userLogin",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        code: ""      //输入的验证码
      },
      imgCode:"",//获取的图片url,example:gdut-hqcc.cn:8887/avatar/2020/11/27/b7a12c5bb4e746a58b714bc034450878.jpg
      imgUUID:"",
      loginRules: {
        // 绑定在form表单中的验证规则，此处对应的是prop，而非return的data
        username: [
          { required: true, message: "用户名/邮箱不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 2, message: "密码长度最少为2位", trigger: "blur" },
        ],
        code: [
          { required: true, message: "验证码不能为空",trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    ...mapMutations(["storeLogin"]),
    getCode(){
      //获取验证码图片url事件
      axios({
      url: `http://gdut-hqcc.cn:8887/picture/captcha`,
      method: "get",
      })
      .then((res)=>{
        if(res.data.code=='6666'){
          this.imgCode=res.data.data.url;
          this.imgCode='http://'+this.imgCode;
          this.imgUUID=res.data.data.uuid;
        }else{
          console.log("获取验证码信息失败"+res.data.message);
        }
      })
    },
    // 点击登录按钮/按回车后
    submitForm(formName) {
      console.log(this.storeLogin);
      let data = {
        user_name: this.loginForm.username,
        password: this.loginForm.password,
      };
      let codedata=this.imgUUID;
      console.log("UUID传参："+codedata);
      let vericodedata=this.loginForm.code;
      console.log("获取的验证码输入传参："+vericodedata);
      //验证码验证post部分
      axios({
        url:"http://gdut-hqcc.cn:8887/picture/verification",
        method:"post",
        headers:{
          simpleUUID:codedata
        },
        data:{
          verification_code:vericodedata
        }
      })
      .then((res)=>{
        if(res.data.code==true){
          console.log("验证码验证成功"+res.data);
          //验证码成功后才登录
          axios({
              url: "http://gdut-hqcc.cn:8887/user/login",
              method: "post",
              data: data,
            }).then((res) => {
              if (res.data.code == false) {
                //status不存在，说明返回的是token，直接存下来
                console.log("登录失败");
              } else {
                let token = "Bearer " + res.data;
                store.commit("storeLogin", { Authorization: token, token: res.data });
                this.$router.push("/");
              }
            });
        }
        else {
          console.log("验证码验证失败");
          console.log(res.data);
          this.$message({
            type:"error",
            message:"验证码错误"
          });
          this.$refs[veriCode].resetFields();
        }
      })
 
    },
    // 点击注册按钮 ==?待定?==
    register() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          //this.$router.push('/login')
        } else {
          this.$router.push("/register");
        }
      });
    },
  },
  created(){
    //生成验证码事件,即获取图片url事件
    this.getCode();
  }
};
</script>

<style scoped >
.login-container {
  background-color: #212844;
  height: 100%;
}
.login-box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login-form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.login-head {
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin: 10px;
}
.btns {
  display: flex;
  justify-content: center;
  margin: 15px;
}
.login-code {
  display: flex;
  justify-content: center;
  margin: 0px;
}
</style>