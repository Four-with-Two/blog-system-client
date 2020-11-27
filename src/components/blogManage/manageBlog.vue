<template>
    <div class="manageBlog-container">
        <!-- 个人博客列表区域 -->
        <el-table :data="blogs" border stripe> 
            <!-- 测试时把data值设为tableData,实测时把data设为blogs -->
            <el-table-column type="index" label="序号" width="80px"></el-table-column>
            <el-table-column label="标题" prop="title" width="620px"></el-table-column>
            <el-table-column label="发表日期" prop="publish_date" width="170px"></el-table-column>
            <el-table-column label="更新日期" prop="update_date" width="170px"></el-table-column>
            <el-table-column label="操作" width="150px">
                <template slot-scope="scope">
                    <!-- 修改按钮 -->
                    <el-button type="primary" icon="el-icon-edit" size="small" @click="alterPage(scope.row.id)"></el-button>
                    <!-- 删除按钮 -->
                    <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteItem(scope.row.id)"></el-button>
                    <!-- {{scope.row}} -->
                </template>
            </el-table-column>

        </el-table>

        <!-- 分页区域 -->
        <div class="manage-nextpage" >
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="cpage"
                layout="total, prev, pager, next, jumper"
                :total="cnt">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
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
            cpage:1,    //默认初始化时在第1页
            //获取个人博客数量和页数
            cnt:'',
            page:'',
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
            console.log("当前所在页面:"+newPage)
            this.cpage=newPage
            this.getPersonalBlogList()
        },
        //获取用户博客总数量和总页码数的事件
        getPersonalBlogCount(){
            Axios({url:"http://gdut-hqcc.cn:8887/blog/count/myBlogs",method:"get"})
            .then((res)=>{
                console.log("获取博客总量信息成功!"+res.data);
                this.cnt=res.data.cnt;
                this.page=res.data.page;
            },error=>{
                console.log("报错啦!"+error);
            })
        },
        //获取用户博客列表信息的事件
        getPersonalBlogList(){
            let data=this.cpage //默认从第一页开始请求
            console.log("当前的cpage:"+data)
            Axios({url:"http://gdut-hqcc.cn:8887/blog/get/myBlogs",method:"get",params:{page:data}})
            .then((res)=>{
                console.log("获取博客列表数据成功!"+res.data);
                this.blogs=res.data.blogsDTOList;
                console.log("赋值成功");
                }
                // if(res.code==false){
                //     //这里不对劲,alert提示为undefined....
                //     console.log("code=false啦!");
                //     return alert(res.message);
                // }
                // else{
                //     console.log("code=true,赋值成功");
                //     this.blogs=res.blogsDTOList;}
                // }
            )
        },
        //点击编辑时,跳转到blogModify页面的事件
        alterPage(idc){
            console.log("当前获取的博客id:"+idc);
            this.$router.push({
                path: "/index/blogModify",
                query: {
                    //获取当前作用域插槽内的博客id
                    id: idc
                }
            });
        },
        //确认删除弹框的事件
        deleteItem(idc) {
            let data=idc;
            console.log("测试当前行为"+idc);
            Axios({url:"http://gdut-hqcc.cn:8887/blog/delete",method:"get",params:{id:data}})
            .then((res)=>{
                console.log("测试有无删除返回值"+res.data);
                if(res.data.code==true){
                    this.$message({
                        type:'success',
                        message:'删除成功！'
                    });
                    this.$router.go(0);
                }
                else if(res.data.code==false){
                    this.$message({
                        type:'error',
                        message:'删除失败'
                    });
                    console.log("post成功，删除失败"+res.data.message);
                }
            })
            .catch(error=>{
                console.log("post失败"+res.data.message);
            })
            // this.$confirm('此操作将永久删除该博客, 是否继续?', '提示', {
            // confirmButtonText: '确定',
            // cancelButtonText: '取消',
            // type: 'warning',
            // center: true
            // })
            // .then(() => {
            //     console.log("测试当前行为"+idc);
            //     Axios.get("http://gdut-hqcc.cn:8887/blog/delete",idc)
            //     .then((res)=>{
            //         console.log("测试有无删除返回值"+res.data);
            //         if(res.data.code==true){
            //             this.$message({
            //                 type: 'success',
            //                 message: '删除成功!'
            //             });                          
            //         }
            //         else if(res.data.code==false){
            //             this.$message({
            //                 type: 'error',
            //                 message: '删除失败!'
            //             });
            //             console.log("post成功，删除失败"+res.data.message);                     
            //         }
            //     })
            //     .catch(error=>{
            //         console.log("post方法error"+res.data.message);                       
            //     })
            // // this.$message({
            // //     type: 'success',
            // //     message: '删除成功!'
            // // });
            // })
            // .catch(() => {
            // this.$message({
            //     type: 'info',
            //     message: '取消删除'
            // });
            // });
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