<template>
  <div>
    <el-card class="box-card" v-for="(item, index) in allBlog" :key="index">
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
      <div class="text item">{{ item.summary }}</div>
      <div class="name">{{ item.name }}</div>
      <div class="date">{{ item.publish_date }}</div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["allBlog"],
  data() {
    return {
      blogDetailContent: {},
    };
  },
  created() {},
  methods: {
    blogDetail(e) {
      this.$router.push({
        path: "/index/blogDetail",
        query: {
          id: e.currentTarget.getAttribute("id"),
        },
      });
    },
  },
};
</script>

<style scoped>
.name{
  color: #0053ad;
  float: left;
  margin-right: 10px;
}
.date{
  color: #bdbdbd;
}
.clearfix{
  color:#005da6;
  font-size: 18px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>