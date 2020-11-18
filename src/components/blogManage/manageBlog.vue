<template>
    <div class="manageBlog-container">
        <!-- 个人博客列表区域 -->
        <el-table :data="blogs" border stripe>
            <el-table-column type="index"></el-table-column>
            <el-table-column label="标题" prop="title"></el-table-column>
            <el-table-column label="操作"  width="280px">
                <template slot="scope">
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
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
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
            //获取个人博客数量和页数
            
            //获取个人博客列表的参数
            queryInfo:{
                id:userID,//尚未获得，假定为userID
                page:1    //默认初始化时在第1页
            },
            count:[],
            blogs:[]
        }
    },
    created(){
        this.getPersonalBlogList()
        
        .then(function(data){
            //console.log(data);
            this.blogs=data.body.slice(0,10);
            console.log(this.blogs);
        })
    },
    methods:{
        //监听pagesize改变的事件
        handleSizeChange(newSize){
            console.log(newSize)
        },
        //监听页码值改变的事件
        handleCurrentChange(newPage){
            console.log(newPage)
        },
        getPersonalBlogCount(){
            let data={
                id:this.userID,//尚未定义
            }
            console.log(data)
            Axios(
                {
                    url:"http://gdut-hqcc.cn:8887/blog/count/personal",
                    method:"post",
                    data:data
                }
            ).then(
                (res)=>{
                    console.log(res);
                    this.count=res;
                }
            )
        },
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
.manage-nextpage{
    position: relative;
    
}
</style>