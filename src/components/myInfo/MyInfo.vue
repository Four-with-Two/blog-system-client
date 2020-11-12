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
      <!-- 右下方链接 -->
      <div class="head_user_right">
        <a href="">博客广场</a>
        <a href="http://localhost:8080/#/index/blogManage">我的博客</a>
        <a href="">设置</a>
        <a href="">退出</a>
      </div>
    </div>
    <!-- 中间的填写信息框 -->
    <div class="container">
      <div class="top_nav">
        <a href="">上传头像</a>
        <a href="">账户设置</a>
        <a href="" id="mydata">我的资料</a>
        <a href="">个人信息</a>
        <a href="">联系方式</a>
      </div>

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
  margin: auto;
  border: 1px solid ;
}
.header a{
  text-decoration: none;
  margin: 0 0 0 10px;
}
.head_nav{
  margin-top: 10px;
  width: 200px;
  float: left;
}
.head_nav a{
  color: #075db3;
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
  width: 200px;
}
.head_user_right{
  float: right;
  margin-top: -15px;
  margin-right: 10px;
}
.head_user_right a{
  color: #666666;
}
.container{
  height: 500px;
  width: 60%;
  margin: auto;
  background-color: blanchedalmond;
  border: 1px solid ;
}
.top_nav{
  text-align: center;
  width: 60%;
  margin: auto;
  margin-top: 20px;
  padding: 3px;
  border-bottom: 1px solid #c8d3de;
}
.top_nav a{
  text-decoration: none;
  margin-right: 5px;
  padding: 5px 10px 3px;
  font-size: 16px;
  border: 1px solid #c8d3de;
  border-bottom: none;
  color: #333333;
  background-color: #e8edf0;
}
#mydata{
  background-color: #ffffff;
}
.footer{
  height: 20px;
  width: 60%;
  margin: auto;
  background-color: chartreuse;
  border: 1px solid ;
}
</style>