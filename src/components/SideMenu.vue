<template>
  <div>
    <el-menu
      default-active="/index/blogGround"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#333951"
      text-color="#fff"
      active-text-color="#b9c8d5"
      router="true"
    >
      <el-menu-item index="/index/blogGround">
        <i class="el-icon-menu"></i><span slot="title">博客广场</span>
      </el-menu-item>
      <el-menu-item index="/index/blogGround" route="/index/blogManage">
        <i class="el-icon-menu"></i> ​<span slot="title">博客管理</span>
      </el-menu-item>
      <el-menu-item index="/index/blogGround" route="/index/myInfo">
        <i class="el-icon-menu"></i> ​ <span slot="title">我的资料</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //实现实现页面的跳转
    checkPage() {
      console.log(23);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
</style>