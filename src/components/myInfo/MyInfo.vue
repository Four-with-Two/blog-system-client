<template>
  <div>
    <!-- 头部导航栏 -->
    <div class="header">
      <!-- 左侧四个链接 -->
      <div class="head_nav">
        <a href="">园子</a>
        <a href="">关注</a>
        <a href="">粉丝</a>
        <a href="">消息</a>
      </div>
      <!-- 右侧博客logo -->
      <div class="logo">
        <a href="">
          <img src="../../../static/bogLogo.png">
        </a>
      </div>
      <!-- 左下方欢迎使用者 -->
      <div class="head_user">
        <h3 id="head_user_left">欢迎你</h3>
      </div>
    </div>
    <!-- 中间的填写信息框 -->
    <div class="container">

    </div>
    <!-- 底部友情链接 -->
    <div class="footer"></div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header{
  height: 130px;
  width: 60%;
  background-color: aquamarine;
  margin: auto;
  border: 1px solid ;
}
.head_nav{
  margin-top: 10px;
  width: 200px;
  float: left;
}
.head_nav a{
  margin:0 0 0 10px;
  text-decoration: none;
}
.logo{
  float: right;
}
.logo img{
  height: 90px;
}
.head_user{
  margin-left: 10px;
  margin-top: 90px;
}
.container{
  height: 500px;
  width: 60%;
  margin: auto;
  background-color: blanchedalmond;
  border: 1px solid ;
}
.footer{
  height: 20px;
  width: 60%;
  margin: auto;
  background-color: chartreuse;
  border: 1px solid ;
}
</style>