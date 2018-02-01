<template>
  <div class="studetail">
   <div class="studetail_title">
      <div class="studetail_title_bj">
        <p>班级：<span>机械电子工程专业</span></p>
      </div>
      <div class="studetail_title_js">
        <p>授课教师：<span>王小虎</span></p>
      </div>
      <div class="studetail_title_bjrs">
        <p>班级人数：<span>45人</span></p>
      </div>
       <div class="studetail_title_kcsj">
        <p>课程时间：<span>2017.8.15 第6周 星期二 3~4节</span></p>
      </div>
      <div class="studetail_title_pf">
        <p>课程评分：<span><el-rate v-model="value1" disabled :colors="['#E86F6F', '#E86F6F', '#E86F6F']"></el-rate></span></p>
      </div>
    </div>
    <el-table :data="tableData" border style="width:100%">
      <el-table-column  label="学号" prop="xh" ></el-table-column>
      <el-table-column  label="姓名" prop="xm" ></el-table-column>
      <el-table-column v-for="(title,index) in dataTitle" :prop="title.prop" :label="title.label" :width="title.width" :key="'a'+index" v-if="title.prop != 'xh' && title.prop != 'xm' && title.prop != 'pjnr' && title.prop != 'zhpf'">
        <template slot-scope="scope" v-if="title.prop == 'lx' || title.prop == 'lx1'"> 
          <div class="content_rowspan">
            <el-rate v-if="title.prop == 'lx' " v-model="scope.row.lx" disabled></el-rate>
            <el-rate v-else v-model="scope.row.lx1" disabled></el-rate>
          </div>                                         
        </template> 
      </el-table-column>
      <el-table-column  label="评价内容" prop="pjnr" ></el-table-column>
      <el-table-column  label="综合评分" >
        <template slot-scope="scope"> 
          <div class="content_rowspan">
            <el-rate v-model="scope.row.zhpf" disabled></el-rate>
          </div>                                         
        </template>                               
      </el-table-column>
      <el-table-column  label="详情">
        <template slot-scope="scope">
          <el-button  @click.native.prevent="openDetail(scope.$index, scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <router-view></router-view>
  </div>
</template>
<script>
import bus from '../../eventBus.js'
  export default {
    data() {
      return {
        value1:5,
        dataTitle:[{
        prop:'xh',
        label:'学号',
        // width:'45px'
      },{
        prop:'xm',
        label:'姓名',
        /*width:'120px'*/
      },{
        prop:'lx',
        label:'班级情况',
        /*width:'120px'*/
      },{
        prop:'lx1',
        label:'班级情况1',
        /*width:'120px'*/
      },{
        prop:'pjnr',
        label:'评价内容',
        width:'300px'
      },{
        prop:'zhpf',
        label:'综合评分',
        /*width:'120px'*/
      }],
        tableData:[{
          xh:"12345647",
          xm:"李静",
          lx:2,
          lx1:2,
          pjnr:"班级纪律较好，学生学习热度高",
          zhpf:4,
        },{
          xh:"12345647",
          xm:"李静",
          lx:3,
          lx1:2,
          pjnr:"班级纪律较好，学生学习热度高",
          zhpf:4,
        },{
          xh:"12345647",
          xm:"李静",
          lx:4,
          lx1:2,
          pjnr:"班级纪律较好，学生学习热度高",
          zhpf:5,
        },{
          xh:"12345647",
          xm:"李静",
          lx:3,
          lx1:2,
          pjnr:"班级纪律较好，学生学习热度高",
          zhpf:4,
        }],
      };
    },
    methods: {
      openDetail(index,data){
        this.$router.push({path:'/jxpj/stugrdetail'})
        bus.$emit('breadcrumb','s')
      }
    },
    created(){
      
    }
  }
</script>
<style>
.studetail{
  font-size: .16rem;
  height: 80%;
  overflow: auto;
  position: relative;
}
.studetail .content_rowspan{
  height: .39rem;
  line-height: .39rem;  
  border-bottom: 1px solid #dfe6ec;
}
.studetail div.content_rowspan:last-child{
  border:none !important;
}
.studetail .el-table_1_column_2 div{
  padding:0 !important;
}
.el-table .cell, .el-table th>div{
  padding:0 !important;
}
.el-table th>.cell,.el-table td>.cell{
  text-align: center !important;
}
.el-rate{
  display:inline-block;
  font-size: .12rem;
}
.studetail .el-rate__icon,.cell .el-rate__icon{
  font-size: .12rem;
  /*color: #E86F6F !important;*/
}
.studetail_title{
  background: #ebf2f8;
  height: .38rem;
  line-height: .38rem;
  width: 100%;
  /*min-width: 11rem;*/
  margin: .14rem 0 0;
  padding: 0 .14rem;
  box-sizing: border-box;
  display: flex;
  position: relative;
}
.studetail_title div{
  margin-right: .15rem;
}
@media screen and (max-width: 1300px){
  .studetail_title div{
    margin-right: .1rem;
  }
}
.studetail_title div p{
  font-family: Microsoft YaHei;
  font-size: .14rem ;
  color:  #555555 ;
}
.studetail_title div span{
  color: #2184c5;
}
.studetail_title_pf span{
  color: #E86F6F !important;
}
</style>
