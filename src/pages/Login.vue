<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 登录表单区域 -->
      <el-form
        class="login-form"
        ref="loginForm"
        :model="loginForm"
        label-width="0px"
      >
        <p class="login-head">纯享版博客园登录</p>
        <!-- 邮箱/用户名 -->
        <el-form-item>
          <el-input
            v-model="loginForm.username"
            placeholder="请输入邮箱/用户名"
            @keyup.enter.native="submitForm('loginForm')"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item>
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
          <el-button type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import SIdentify from "../components/sidentify";
export default {
  name: "userLogin",
  components: { SIdentify },
  data() {
    return {
      isDebugLogin: false,
      loginForm: {
        username: "",
        password: "",
        code: "",
      },
      identifyCodes: "1234567890",
      identifyCode: "",
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("授权成功");
        } else {
          return false;
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
  background-color: #385068;
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