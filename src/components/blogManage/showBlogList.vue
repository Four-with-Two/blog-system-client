<template>
    <div class="showBlogList-container">
        <el-timeline>
            <el-timeline-item :timestamp="2018/4/12" placement="top" :for="blog in blogs">
            <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
            </el-timeline-item>
        </el-timeline>
        
        <!-- 分页区域 -->
        <div class="historyblog-nextpage">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="queryInfo.page"
                layout="total, prev, pager, next, jumper"
                :total="count.cnt">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    name:'show-blog-list',
    data(){
        return{
            //获取个人博客列表的参数
            queryInfo:{
                //id:userID,//尚未获得，假定为userID,后面用token了,不用这个了
                page:1    //默认初始化时在第1页
            },
            //获取个人博客数量和页数
            count:[],
            //获取个人博客列表
            blogs:[]
        }
    },
    created(){
        this.getPersonalBlogList()
        this.getPersonalBlogCount()
    },
    methods:{
        //监听页码值改变的事件
        handleCurrentChange(newPage){
            console.log(newPage)
            this.queryInfo.page=newPage
            this.getPersonalBlogList
        },
        //获取用户博客总数量和总页码数的事件
        getPersonalBlogCount(){
            //有了token之后无需提供作者id,直接获取页码等数据
            Axios.get("http://gdut-hqcc.cn:8887/blog/count/personal").then(
                (res)=>{
                    console.log(res);
                    this.count=res;}
            )
        },
        //获取用户博客列表信息的事件
        getPersonalBlogList(){
            //this.$http.get("http://gdut-hqcc.cn:8887/blog/get/personal",{blogsDTOList})
            let data=this.queryInfo
            console.log(data)
            Axios(
                {
                    url:"http://gdut-hqcc.cn:8887/blog/get/personal",
                    method:"post",
                    data:data
                }
            ).then(
                (res)=>{
                    console.log(res);
                    if(res.code!==true){
                        //这里不对劲,alert提示为undefined....
                        return alert(res.message)
                    }
                    else{this.blogs=res.blogsDTOList;}
                }
            )
        }
    }
}
</script>

<style scoped>
.historyblog-nextpage{
margin-top: 10px; 
}
</style>