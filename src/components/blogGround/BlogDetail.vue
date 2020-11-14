<template>
  <div>博客详情页面</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogDetailContent: {
        code: false,
        message: "6@x!",
        author: 1956873140251868,
        avatar_url: "xpW",
        name: "khzvnp",
        bio: "Dn#",
        title: "Ql9",
        content: "bQ[^h1",
        publish_date: "CSkOYW",
        update_date: "2TT2c",
      },
    };
  },
  created() {
    axios({
      url: `https://www.easy-mock.com/mock/5fad499aa12a7e2dea86ee90/blog/get/${this.$route.query.id}`,
    }).then((res) => {
      this.blogDetailContent = res.data;
      console.log(this.blogDetailContent);
      console.log(res);
    });
    console.log(this.$route.query.id);
  },
};
</script>

<style  scoped>
</style>