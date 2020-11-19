<template>
<div class="writeBlog-container">
    <div class="submit" v-if="!submitted">

    <div class="blog-title">
        <el-row>
            <div class="post-lable">标题</div>
        </el-row>
        <el-row>
            <el-input
            type="text"
            autosize
            placeholder="请输入博客标题"
            v-model="blog.title">
            </el-input>
        </el-row>
    </div>
    <!-- <div style="margin: 20px 0;"></div> -->
    <div class="blog-summary">
        <el-row>
            <div class="post-lable">摘要</div>
        </el-row>
        <el-row>
            <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入博客摘要"
            v-model="blog.summary">
            </el-input>
        </el-row>        
    </div>
    <!-- <div style="margin: 20px 0;"></div> -->
    <div class="blog-text">
        <el-row>
            <div class="post-lable">正文</div>
        </el-row>
        <!-- markdown格式组件 -->
        <el-row>
            <div class="editor">
                <mavon-editor v-model="blog.content" @change="change"></mavon-editor>
            </div>
        </el-row>      
    </div>
    <!-- <div style="margin: 20px 0;"></div> -->
    <div class="btn">
        <el-row>
            <el-button type="primary" v-on:click.prevent="post">添加博客</el-button>
            <el-button type="primary">取消</el-button>
        </el-row>
    </div>


    </div>


    <div class="succeed" v-if="submitted">
        博客发表成功！
        <h3>预览如下</h3>
        <div class="preview">
            <p>标题：{{blog.title}}</p>
            <p>摘要：</p>
            <p>{{blog.summary}}</p>
            <p>正文：</p>
            <p>{{blog.content}}</p>
        </div>
    </div>
    <!-- 测试数据获取 -->
    <!-- <div class="show">
        showvie
        <p>title:{{blog.title}}</p>
        <p>summary:{{blog.summary}}</p>
        <p>content:{{blog.content}}</p>
    </div> -->
</div>

</template>

<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    name:'writeBlog',
    components:{
        mavonEditor
    },
    data(){
        return{
            blog:{
                title:'',
                summary:'',
                content:''
            },
            submitted:false
        }
    },
    methods:{
        change(value,render){
            //实时获取转成html的数据
            this.html=render;
            console.log(this.html)
        },
        post:function(){
            //post数据库的地址链接为：http://gdut-hqcc.cn:8887/blog/newBlog
            //此为测试网站链接，后续再替掉
            this.$http.post("https://jsonplaceholder.typicode.com/posts",
            {
                title:this.blog.title,
                summary:this.blog.summary,
                content:this.blog.content,
                author:1   //作者id，不知道该咋办……这里搞成默认1
            })
            .then(function(data){
                console.log(data);
                this.submitted=true;
            });
        }
    }
}
</script>

<style scoped>
.blog-title{
    margin-top: 20px;
}
.blog-summary{
    margin-top: 20px;
}
.blog-text{
    margin-top: 20px;
}
.btn{
    margin-top: 25px;
}
</style>