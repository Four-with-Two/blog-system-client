<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="text item">邮箱:{{ userInfo.mail }}</div>
        <div class="text item">昵称：{{ userInfo.nick_name }}</div>
        <div class="text item">用户名：{{ userInfo.user_name }}</div>
        <div class="text item">性别：{{ userInfo.gender }}</div>
        <div class="text item">用户简述：{{ userInfo.profile }}</div>
      </div>
      <el-card class="box-card" v-for="(item, index) in userBlogs" :key="index">
        <div slot="header" class="clearfix">
          <span>{{ item.title }}</span>
          <el-button
            style="float: right; padding: 3px 0"
            type="text"
            @click="blogDetail"
            :ref="item.id"
            :id="item.id"
            >查看博客</el-button
          >
        </div>
        <div class="text item">{{ item.name }}</div>
        <div class="text item">{{ item.summary }}</div>
        <div class="text item">{{ item.author }}</div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userBlogs: [],
      userInfo: {},
    };
  },
  created(options) {
    console.log(this.$route.query.id);
    axios({
      url: `http://gdut-hqcc.cn:8887/blog/get/personal?id=${this.$route.query.id}&page=1`,
    }).then((res) => {
      console.log(res);
      this.userBlogs = res.data.blogsDTOList;
    });
    console.log(123);
    axios({
      url: "http://gdut-hqcc.cn:8887/my_data/exhibition/htrhtr",
      method: "get",
    }).then((res) => {
      this.userInfo = res.data.data;
      console.log(this.userInfo);
    });
  },
  methods: {
    getUserInfo: function () {},
  },
};
</script>

<style  scoped>
</style>