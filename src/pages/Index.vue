<template>
  <div style="width: 100%; height: 100%">
    <!-- 页面容器 -->
    <el-container id="bigContainer">
      <el-header id="header"
        ><div style="line-height: 60px">纯享版博客园</div></el-header
      >
      <el-container id="underContent">
        <el-aside id="aside" style="width: 200px">
          <side-menu></side-menu>
        </el-aside>
        <el-container>
          <el-main>
            <el-breadcrumb
              separator-class="el-icon-arrow-right"
              style="margin-top: 15px; margin-left: 15px"
            >
              <el-breadcrumb-item :to="{ path: '/index' }"
                >首页</el-breadcrumb-item
              >
            </el-breadcrumb>
            <router-view
              style="margin-top: 15px; margin-left: 15px"
            ></router-view>
          </el-main>
          <el-footer style="background-color: #212844; color: #fffffe"
            >参与成员：四带二队</el-footer
          >
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
#aside {
  height: 100%;
  background-color: #333951;
}
</style>