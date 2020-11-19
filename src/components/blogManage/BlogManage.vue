<template>
  <div class="manage-container" >
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="历史博客列表" name="first">
          <showBlogList></showBlogList>
        </el-tab-pane>
        <el-tab-pane label="写新博客" name="second">
          <writeBlog></writeBlog>
        </el-tab-pane>
        <el-tab-pane label="博客管理" name="third">
          <manageBlog></manageBlog>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
  import writeBlog from './writeBlog'
  import manageBlog from './manageBlog'
  import showBlogList from './showBlogList'
  export default {
    components: {writeBlog,manageBlog,showBlogList},
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>
.manage-container{
  width: 100%;
  height: 100%;
}
</style>