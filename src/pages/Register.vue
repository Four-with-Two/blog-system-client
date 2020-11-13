<template>
  <div class="register">
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
      <h1 id="title">纯享博客注册页面</h1>
      <div class="user_name">
        <input type="text" required placeholder="请输入中文用户名" />
      </div>
      <div class="email">
        <div class="ema_in">
          <input type="text" required placeholder="请输入邮箱地址" />
        </div>
      </div>
      <div class="password">
        <input type="text" required placeholder="请输入密码" />
      </div>
      <div class="btn">
        <a href="">立刻注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  height: 40%;
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
  font-size: 18px;
  font-weight: 300;
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