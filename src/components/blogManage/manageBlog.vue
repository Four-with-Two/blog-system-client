<template>
    <div class="manageBlog-container">
        <!-- 个人博客列表区域 -->
        <el-table :data="blogs" border stripe> 
            <!-- 测试时把data值设为tableData,实测时把data设为blogs -->
            <el-table-column type="index" label="序号" width="80px"></el-table-column>
            <el-table-column label="标题" prop="title"></el-table-column>
            <el-table-column label="发表日期" prop="publish_date" width="150px"></el-table-column>
            <el-table-column label="更新日期" prop="update_date" width="150px"></el-table-column>
            <el-table-column label="操作" width="150px">
                <template slot-scope="scope">
                    <!-- 修改按钮 -->
                    <el-button type="primary" icon="el-icon-edit" size="small" @click="alterPage"></el-button>
                    <!-- 删除按钮 -->
                    <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteItem"></el-button>
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
        //绘制页面用的假数据
        const tableData =
            [
                {title:'凌晨三点仍在苦熬',
                publish_date:'2019-01-31',
                update_date:'2070-01-01'},
                {title:'这是道德的沦丧',
                publish_date:'2018-01-31',
                update_date:'2070-01-01'},
                {title:'还是人性的泯灭',
                publish_date:'2017-01-31',
                update_date:'2070-01-01'},
                {title:'结果敬请期待',
                publish_date:'2020-01-31',
                update_date:'2070-01-01'},
                {title:'http://gdut-hqcc.cn:8887/blog/get/personal 这破接口烦死我了',
                publish_date:'2000-01-31',
                update_date:'2070-01-01'}
            ]
        
        return{
            //绘制页面用的假数据
            tableData,
            //获取个人博客列表的参数
            queryInfo:{
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
            Axios.get("http://gdut-hqcc.cn:8887/blog/count/myBlogs")
            .then((res)=>{
                console.log(res);
                this.count=res;
            },error=>{
                console.log(error);
            })
        },
        //获取用户博客列表信息的事件
        getPersonalBlogList(){
            let data=this.queryInfo //默认从第一页开始请求
            console.log(data)
            Axios.get("http://gdut-hqcc.cn:8887/blog/get/myBlogs",data)
            .then((res)=>{
                    console.log(res);
                    if(res.code==false){
                        //这里不对劲,alert提示为undefined....
                        return alert(res.message)
                    }
                    else{this.blogs=res.blogsDTOList;}
                }
            )
        },
        //点击编辑时,跳转到blogModify页面的事件
        alterPage(){this.$router.push('/index/blogModify')},
        //确认删除弹框的事件
        deleteItem() {
            this.$confirm('此操作将永久删除该博客, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
            }).then(() => {
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });
            });
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