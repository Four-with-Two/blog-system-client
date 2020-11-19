<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div
          style="
            font-size: 30px;
            margin: 0 auto;
            display: inline-block;
            align-item: center;
            width: 200px;
          "
        >
          {{ blogDetailContent.title }}
        </div>
        <div>
          <!-- <img :src="blogDetailContent.avatar_url" alt="" class="avatar"/> -->
          <div>
            <el-avatar
              :src="blogDetailContent.avatar_url"
              @click="toUserInfo"
              :id="blogDetailContent.author"
            ></el-avatar>
          </div>
          <div
            :id="blogDetailContent.author"
            style="color: blue"
            @click="toUserInfo"
          >
            {{ blogDetailContent.name }}
          </div>
        </div>
        <div></div>
      </div>
      <div class="text item">
        {{ blogDetailContent.content }}
      </div>
      <div class="text item">
        {{ blogDetailContent.publish_date }}
      </div>
      <div class="text item"></div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogDetailContent: {},
    };
  },
  created() {
    axios({
      url: `https://mockapi.eolinker.com/fd19Qdzad6924ac154dd557d6145500001b68d1eedda6b8/blog/get/{this.$route.query.id}`,
      // `https://www.easy-mock.com/mock/5fad499aa12a7e2dea86ee90/blog/get/${this.$route.query.id}`,
    }).then((res) => {
      console.log(res.data);
      this.blogDetailContent = res.data;
    });
  },
  methods: {
    toUserInfo: function (e) {
      console.log(e.currentTarget.getAttribute("id"));
      console.log(123);
    },
  },
};
</script>

<style  scoped>
.avatar {
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
  width: 100%;
  height: 100%;
}
</style>