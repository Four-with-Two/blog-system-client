<template>
<div class="login-container">
    
    <div class="login-box">

      <!-- 登录表单区域 -->
      <el-form label-width="0px" class="login-form">
        <p class="login-head">纯享版博客园登录</p>
        <!-- 邮箱/用户名 -->
        <el-form-item>
          <el-input v-model="inputUserName" placeholder="请输入邮箱/用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input v-model="inputPassword" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item>
          <el-input v-model="inputExam" placeholder="请输入验证码"></el-input>
          <!-- <img src="" alt="验证码"> -->
        </el-form-item>        
        <!-- 按钮 -->
        <el-form-item  class="btns">
          <el-button type="primary">登录</el-button>
          <el-button type="primary">注册</el-button>
        </el-form-item>        
      </el-form>
      
    </div>

</div>

</template>

<script>
  export default {
    data(){
      return{
        inputUserName:'',
        inputPassword:'',
        inputExam:'',
        code:''
      }
    }
  }
</script>

<style scoped >
   
   .login-container{
     background-color: #385068;
     height: 100%;
     }
    .login-box{
      width: 450px;
      height: 300px;
      background-color: #fff;
      border-radius: 5px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
    .login-form{
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .login-head{
      text-align: center;
      font-weight: bold;
      font-size: 30px;
      margin: 10px;
    }
    .btns{
      display: flex;
      justify-content: center;
      margin: 15px;
    }  
</style>