<template>
  <div style="width: 100%; height: 100%">
    <!-- 页面容器 -->
    <el-container id="bigContainer">
      <el-header>纯享版博客园</el-header>
      <el-container id="underContent">
        <el-aside style="width: 200px; height: 100%; background-color: #545c64">
          <side-menu></side-menu>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideMenu from "../components/SideMenu";
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {},
  components: { SideMenu },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
#bigContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#underContent {
  flex-grow: 1;
}
</style>