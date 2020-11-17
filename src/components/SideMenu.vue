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
      <el-menu-item index="/index/blogGround" @click="check">
        <i class="el-icon-menu"></i><span slot="title">博客广场</span>
      </el-menu-item>
      <el-menu-item
        index="/index/blogManage"
        route="/index/blogManage"
        @click="check"
      >
        <i class="el-icon-menu"></i> ​<span slot="title" @click="check"
          >博客管理</span
        >
      </el-menu-item>
      <el-menu-item index="/index/myInfo" route="/index/myInfo" @click="check">
        <i class="el-icon-menu"></i> ​
        <span slot="title" @click="check">我的资料</span>
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
    check(msg) {
      console.log();
      this.$emit("checkComponent");
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