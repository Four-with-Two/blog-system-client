<template>
  <div style="width: 100%; height: 100%">
    <!-- 页面容器 -->
    <el-container id="bigContainer">
      <el-header id="header"><div>纯享版博客园</div></el-header>
      <el-container id="underContent">
        <el-aside style="width: 200px; height: 100%; background-color: #333951">
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
/* 取消内外边距 */
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
#header {
  background-color: #212844;
  color: #fffffe;
  text-align: center;
  align-items: center;
}
#underContent {
  flex-grow: 1;
}
aside ui {
  width: 100%;
}
</style>