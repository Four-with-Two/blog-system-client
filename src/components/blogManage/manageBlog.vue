<template>
    <div class="manageBlog-container">
        <div class="manage-head">
            <el-row type="flex" justify="center">
                <el-col :span="10"><div class="blog-title">博客标题</div></el-col>
                <el-col :span="4"><div class="op">修改操作</div></el-col>
                <el-col :span="4"><div class="op">删除操作</div></el-col>
            </el-row>
        </div>
        <div class="manage-list">
            <!-- 这里是博客列表。格式是：标题+修改、删除，两个操作为按钮 -->
            <div class="single-blog" >
                <h2>{{blogs.title}}</h2>
            </div>
        </div>
        <div class="manage-nextpage">
            <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name:'manage-peasonal-blogs',
    data(){
        return{
            //获取个人博客列表的参数
            blogsDTOList:[]
        }
    },
    created(){
        //我们的地址：http://gdut-hqcc.cn:8887/blog/get/personal
        //测试地址：https://jsonplaceholder.typicode.com/posts
        this.getPersonalBlogList()
        
        .then(function(data){
            //console.log(data);
            this.blogs=data.body.slice(0,10);
            console.log(this.blogs);
        })
    },
    methods:{
        getPersonalBlogList(){
            this.$http.get("http://gdut-hqcc.cn:8887/blog/get/personal",{blogsDTOList})
        }
    }
}
</script>

<style scoped>
.blog-title{
    text-align: left;
}
.op{
    text-align: right;
}
.manage-nextpage{
    position: relative;
    
}
</style>