<template>
  <div style="min-width:1350px">
    <!-- 头部导航栏 -->
    <div class="header">
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
        <span href="" @click="loginout">退出</span>
      </div>
    </div>
    <el-upload
          class="upload-demo"
          action="http://gdut-hqcc.cn:8887/picture/avatar/upload"
          :headers="headers"
          multiple
          :limit=5
          :on-success="newAvatar"
          name="image"
          show-file-list
          :on-change="change"
          :file-list="fileList"
          style="display:none"
          auto-upload
          >
    <el-button size="small" type="primary" id="avatar">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <!-- <input type="file" id="avatar" @change="selectImg"> -->
    <!-- 中间的填写信息框 -->
    <div class="container">
      <div class="top_nav">
        <a href="" @click="uploadImg">上传头像</a>
        <a href="" @click="refreshPassword">密码修改</a>
        <a href="" id="mydata">我的资料</a>
      </div>
      <!-- table填写框 -->
      <div class="from">
        <table id="myfrom">
          <tbody>
            <tr>
              <td class="tr_title"></td>
              <td class="tr_content"></td>
            </tr>
            <tr>
               <td class="tr_title" id="img">用户头像：</td>
              <td class="tr_content" id="img"><el-avatar :size="50" :src="img"></el-avatar></td>
            </tr>
            <tr>
              <td class="tr_title" id="user_name">用户名：</td>
              <td class="tr_content"><input class="td_inM" v-model="baseUserInfo.user_name"></td>
            </tr>
            <tr>
              <td class="tr_title" id="nick_name">昵称：</td>
              <td class="tr_content"><input class="td_inM" v-model="baseUserInfo.nick_name"></td>
            </tr>
            <tr>
              <td class="tr_title" id="gender">性别：</td>
              <td class="tr_content">
                <input class="radio_block" v-model="baseUserInfo.gender" type="radio" value="M" />
                <label for="ctl00_cphMain_radio_gender_0">男</label>
                <input class="radio_block" v-model="baseUserInfo.gender" type="radio" value="F" />
                <label for="ctl00_cphMain_radio_gender_1">女</label>
              </td>
            </tr>
            <tr>
              <td class="tr_title" id="mail">邮箱：</td>
              <td class="tr_content"><input class="td_inM" v-model="baseUserInfo.mail"></td>
            </tr>
           <tr>
              <td class="tr_title" id="phone">电话号：</td>
              <td class="tr_content"><input class="td_inM" v-model="baseUserInfo.phone"></td>
            </tr>
            <tr>
              <td class="tr_title" id="birthday">生日：</td>
              <td class="tr_content">
               <input class="td_inM" v-model="baseUserInfo.birthday">
              </td>
            </tr>
            <tr>
              <td class="tr_title" id="profile">个人简介：</td>
              <td class="tr_content">
                <textarea name="person" id="textarea" cols="33" rows="5" v-model="baseUserInfo.profile"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="save_btn">
          <button class="save" @click="save">保存</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import store from "@/store/index.js";
import { mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
  data(){
    return{
      baseUserInfo:{
        user_name:"",
        nick_name:"",
        gender:"F",
        mail:"",
        phone:"",
        birthday:"",
        profile:"",
      },
      img:'',
      fileList: [],
      headers:{
        token:''
      },
    }
  },
 async created(){
   this.headers.token = localStorage.getItem('token')
   //获取用户数据
   await this.getUserInfo()
   await this.getAvatar()
   console.log(this.img)
 },
 methods:{
   newAvatar(res, file){
      this.imageUrl = URL.createObjectURL(file.raw);
   },
   //获取用户数据
   async getUserInfo(){
     let res = await axios({
     url:'http://gdut-hqcc.cn:8887/my_data/exhibition',
     method:"get",
   })
   this.baseUserInfo = res.data.data
   },
   //获取用户头像
   async getAvatar(){
    let img = await axios({
     url:'http://gdut-hqcc.cn:8887/picture/avatar/get?user_name='+this.baseUserInfo.user_name,
     method:"get"
   })
   let data =img.data 
   this.img = "http://"+data+"?time="+new Date()
   console.log(this.img)
   },
   save(){
      axios({
        url:"http://gdut-hqcc.cn:8887/my_data/alteration",
        method:"put",
        data: this.baseUserInfo
      }).then((res)=>{
        if(res.status == 200){ //状态码200的时候,弹窗提示
          this.$alert('用户信息修改成功', '标题名称', {
            confirmButtonText: '确定'
        });
        }
      })
   },
   loginout(){//注销按钮
       store.commit("storeLoginout")
          this.$alert('注销成功', '标题名称', {
            confirmButtonText: '确定'
        });
        this.$router.push('/login')
   },
   uploadImg(e){//上传头像接口
    e.preventDefault()
    let avatar = document.getElementById('avatar')
    console.log(avatar)
    avatar.click()
    this.getAvatar()
   },
   selectImg(){

   },
   change(file,fileList){

   },
   uploadAvatar(e){

   },
    refreshPassword(e){
     e.preventDefault()
     this.$prompt('请输入密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(async ( {value} ) => {
          let data = { password :value }
          console.log(data)
          let res = await axios({
            url:'http://gdut-hqcc.cn:8887/my_data/pwdAlteration',
            method:'PATCH',
            data:data
            })
           store.commit("storeLoginout")
         this.$message({
          message: '密码重置成功，请重新登录',
          type: 'success'
        });
        this.$router.push('/login')
        }).catch((res)=>{this.$message.error('密码修改失败请稍后重试');})
   }
 }
}

   
 
</script>

<style scoped>
.header{
  height: 130px;
  width: 60%;
  margin: auto;
  border: 1px solid white;
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
  border-top: 1px solid #e5e8ec;
  border-bottom:  1px solid #e5e8ec;
}
.top_nav{
  /* text-align: center; */
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
.from{
  width: 60%;
  margin: auto;
  color: #454545;
  font-size: 15px;
}
.from td{
  border-bottom: 1px dashed #c8d3de;
}

.tr_title{
  height: 40px;
  width: 90px;
  text-align: right;
}
.tr_content{
  width: 300px;
}
.td_inM{
  padding: 2px;
  border: 1px solid #cccccc;
  color: black;
}
#textarea{
  border: 1px solid #cccccc;
  padding: 2px;
}
.save_btn{
  margin-left: 93px;
  margin-top: 5px;
}
.save{
  width: 55px;
  height: 24px;
  font-size: 15px;
  border: 1px solid;
  background-color: #0099FF;
  cursor: pointer;
}
.save a{
  text-decoration: none;
  color: white;
  font-weight: 600;
}
.tr_see{
  width: 100px;
  color:#454545;
}
.footer{
  height: 20px;
  width: 60%;
  margin-left: 250px;
  text-align: center;
}
</style>