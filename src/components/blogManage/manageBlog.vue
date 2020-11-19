<template>
    <div class="manageBlog-container">
        <!-- 个人博客列表区域 -->
        <el-table :data="blogs" border stripe>
            <el-table-column type="index" label="序号" width="80px"></el-table-column>
            <el-table-column label="标题" prop="title"></el-table-column>
            <!-- <el-table-column label="操作test">
                <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            </el-table-column> -->
            <!-- column内部组件不显示,不知道为何,一开始我还以为是scope的原因,后来发现不是,就很难受 -->
            <el-table-column label="操作"  width="280px">
                <template :slot-scope="scope">
                    <!-- 修改按钮 -->
                    <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                    <!-- 删除按钮 -->
                    <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
                    <!-- {{scope.row}} -->
                </template>
            </el-table-column>

        </el-table>

        <!-- 分页区域 -->
        <div class="manage-nextpage">
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
    name:'manage-peasonal-blogs',
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
.el-table{
    margin-top: 15px;
}
.op{
    text-align: right;
}
.el-pagination{
    margin-top: 15px;
}
</style>