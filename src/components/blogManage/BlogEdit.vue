<template>
<div class="writeBlog-container">
    <!-- <div class="submit" v-if="!submitted"> -->
    <div class="submit">
    <div class="blog-title">
        <el-row>
            <div class="post-lable">标题</div>
        </el-row>
        <el-row>
            <el-input
            type="text"
            autosize
            placeholder="请输入博客标题"
            v-model="blog.title"
            ref="title">
            </el-input>
        </el-row>
    </div>
    
    <div class="blog-summary">
        <el-row>
            <div class="post-lable">摘要</div>
        </el-row>
        <el-row>
            <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入博客摘要"
            v-model="blog.summary"
            ref="summary">
            </el-input>
        </el-row>        
    </div>
    
    <div class="blog-text">
        <el-row>
            <div class="post-lable">正文</div>
        </el-row>
        <!-- markdown格式组件 -->
        <el-row>
            <div class="editor">
                <mavon-editor v-model="blog.content" ref="content" @change="change"></mavon-editor>
            </div>
        </el-row>      
    </div>
    
    <div class="btn">
        <el-row>
            <el-button type="primary" @click="postBlog">添加博客</el-button>
            <el-button type="primary" @click="cancleBtn">取消</el-button>
        </el-row>
    </div>


    </div>


    <!-- <div class="succeed" v-if="submitted">
        <h3>预览如下</h3>
        <div class="preview">
            <p>标题：{{blog.title}}</p>
            <p>摘要：</p>
            <p>{{blog.summary}}</p>
            <p>正文：</p>
            <p>{{blog.content}}</p>
        </div>
    </div> -->

</div>

</template>

<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import Axios from 'axios'
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
        //提交博客时的事件
        postBlog(){
            let data ={
                    title:this.blog.title,
                    summary:this.blog.summary,
                    content:this.blog.content
                }
            this.$confirm('确认保存博客?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true})
            .then(()=>{
                Axios.post('http://gdut-hqcc.cn:8887/blog/newBlog',data)
                .then((res)=>{
                    console.log(res);
                    if(res.data.code==false){
                    this.$message({
                        type: 'error',
                        message: '保存失败'
                    });
                    console.log(res.data.message);
                    }else if(res.data.code==true){
                    this.submitted=true;
                    this.$message({
                        type: 'success',
                        message: '保存成功'
                    });
                    //清空内容的功能
                    location.reload();
                    // this.$router.push(0)
                    // this.$refs[title].resetFields();
                    // this.$refs[summary].resetFields();
                    // this.$refs.content.value='';
                    }
                },error=>{
                console.log('错误!',error.message);
                });
            })
            
        },
        //取消按钮后的事件
        cancleBtn(){
            this.$message({
                type:"info",
                message:"取消保存"
            });
            location.reload();
            // this.$router.push("/index/blogManage");
        }
    }
}
</script>

<style scoped>
.blog-title{
    margin-bottom: 20px;
}
.blog-summary{
    margin-bottom: 20px;
}
.blog-text{
    margin-bottom: 20px;
}
.post-lable{
    margin-bottom: 10px;
}
.btn{
    margin-top: 20px;
}
</style>