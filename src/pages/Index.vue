<template>
  <div style="width: 100%; height: 100%">
    <!-- 页面容器 -->
    <el-container id="bigContainer">
      <el-header id="header"
        ><div style="line-height: 60px">纯享版博客园</div></el-header
      >
      <el-container id="underContent">
        <el-aside id="aside" style="width: 200px">
          <side-menu @checkComponent="checkComponent"></side-menu>
        </el-aside>
        <el-container style="display: flex; flex-direction: column">
          <el-main
            style="
              width: 100%;
              height: 100%;
              flex-grow: 1;
              display: flex;
              flex-direction: column;
            "
          >
            <el-breadcrumb
              separator-class="el-icon-arrow-right"
              style="margin-top: 15px; margin-left: 15px"
            >
              <el-breadcrumb-item
                to="/index"
                v-for="(item, index) in breadcrumbArr"
                :key="index"
                :to="{ path: `/index/` + item.path }"
                :replace="replace"
                >{{ item.name }}</el-breadcrumb-item
              >
            </el-breadcrumb>
            <router-view
              style="
                margin: 15px;
                flex-grow: 1;
                height: 200px;
                overflow-y: scroll;
              "
              :allBlog="allBlog"
            ></router-view>
          </el-main>
          <el-footer
            style="background-color: #212844; color: #fffffe; height: 30px"
            >参与成员：四带二队</el-footer
          >
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import SideMenu from "../components/SideMenu";
export default {
  data() {
    return {
      isCollapse: true,
      routes: [], //页面包含的路由
      current: [],
      breadcrumbArr: [{ path: "blogGround", name: "博客广场" }],
      replace: true,
      allBlog: [],
    };
  },
  created() {
    //初始化的时候获取index页面下面的路由数组
    this.routes = this.$router.options.routes[1].children.map((item, index) => {
      let path = item.path.split("/").reverse()[0];
      return {
        path,
        name: item.name,
      };
    });
    this.getAllBlog();
  },
  methods: {
    //获取主页的所有博客
    getAllBlog() {
      axios({
        url:
          // "https://result.eolinker.com/fd19Qdzad6924ac154dd557d6145500001b68d1eedda6b8?uri=/blog/get/all",
          "http://gdut-hqcc.cn:8887/blog/get/all?page=1",
        methods: "get",
      }).then((res) => {
        this.allBlog = res.data.blogsDTOList;
        console.log(res);
      });
    },
    //切换side组件的时候对面包屑进行置空
    checkComponent() {
      this.current = [];
    },
    //监听页面路由切换
    getPath() {
      let length = this.$route.path.split("/").length;
      this.current.push(this.$route.path.split("/")[length - 1]); //将路由路径保存到current中
      console.log(this.current);
      this.breadcrumbArr = this.current.map((item, index) => {
        for (let routesItem of this.routes) {
          console.log(routesItem);
          if (item == routesItem.path) {
            return {
              path: routesItem.path,
              name: routesItem.name,
            };
          }
        }
      });
      console.log(this.breadcrumbArr);
    },
  },
  watch: {
    //监听路由切换
    $route: "getPath",
  },
  computed: {},
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
el-aside ul {
  width: 100%;
}
</style>