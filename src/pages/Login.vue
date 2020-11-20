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
        <div>{{}}</div>
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
                v-model="loginForm.code"
                placeholder="请输入验证码"
                @keyup.enter.native="submitForm('loginForm')"
              ></el-input>
            </el-col>
            <el-col :span="12">
              <div class="login-code" @click="refreshCode">
                <!--验证码组件-->
                <s-identify :identifyCode="identifyCode"></s-identify>
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

    <div class="aler-box">
      <!-- 账号密码匹配结果提示框 -->
    </div>
  </div>
</template>

<script>
import SIdentify from "../components/sidentify";
import axios from "axios";
import store from "@/store/index.js";
console.log(store);
import { mapMutations } from "vuex";
import { mapState } from "vuex";
console.log(mapMutations);
export default {
  name: "userLogin",
  components: { SIdentify },
  data() {
    // 用户名自定义验证规则?
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入正确的用户名"));
      } else {
        console.log("user", value);
        callback();
      }
    };
    // 验证码自定义验证规则
    const validateVerifycode = (rule, value, callback) => {
      if (this.identifyCode !== value) {
        this.loginForm.code = "";
        this.refreshCode();
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      isDebugLogin: false,
      loginForm: {
        username: "",
        password: "",
        code: "",
      },
      identifyCodes: "1234567890",
      identifyCode: "",
      loginRules: {
        // 绑定在form表单中的验证规则，此处对应的是prop，而非return的data
        username: [
          { required: true, message: "用户名/邮箱不能为空", trigger: "blur" },
          { validator: validateUsername, trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, message: "密码长度最少为6位", trigger: "blur" },
        ],
        code: [
          { required: true, trigger: "blur" },
          { validator: validateVerifycode, trigger: "blur" },
        ],
      },
    };
  },
  watch: {
    isDebugLogin(v) {
      if (v) {
        this.loginForm.password = "123";
        this.refreshCode();
      }
    },
    identifyCode(v) {
      this.isDebugLogin && (this.loginForm.code = v);
    },
  },
  methods: {
    ...mapMutations(["storeLogin"]),
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    // 点击登录按钮/按回车后
    submitForm(formName) {
      console.log(this.storeLogin);
      let data = {
        user_name: this.loginForm.username,
        password: this.loginForm.password,
      };
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
          console.log(token);
          // this.storeLogin({ Authorization: token });
          store.commit("storeLogin", { Authorization: token, token: res.data });
          // store.commit("storeLogin", { token: res.data });
          console.log(store.state.Authorization);
          console.log(store.state.token);
          this.$router.push("/");
        }
      });
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
  created() {
    this.refreshCode();
  },
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