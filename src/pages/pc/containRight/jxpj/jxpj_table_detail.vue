<template>
  <div class="tabledetail">
   <div class="tabledetail_title">
      <div class="tabledetail_title_bj">
        <p>班级：<span>机械电子工程专业</span></p>
      </div>
      <div class="tabledetail_title_js">
        <p>授课教师：<span>王小虎</span></p>
      </div>
      <div class="tabledetail_title_bjrs">
        <p>班级人数：<span>45人</span></p>
      </div>
       <div class="tabledetail_title_kcsj">
        <p>课程时间：<span>2017.8.15 第6周 星期二 3~4节</span></p>
      </div>
      <div class="tabledetail_title_pf">
        <p>课程评分：<span><el-rate v-model="value1" disabled :colors="['#E86F6F', '#E86F6F', '#E86F6F']"></el-rate></span></p>
      </div>
    </div>
    <el-table :data="tableData" border style="width:100%">
      <el-table-column  label="类型" prop="lx" width="120"></el-table-column>
      <el-table-column  label="指标内容" >
        <template slot-scope="scope">
          <div class="content_rowspan" v-for="(list,index) in scope.row.zbnr">
            <p>{{list.zbxq}}</p>
          </div>     
        </template>
      </el-table-column>
      <el-table-column  label="综合评分" width="150">
        <template slot-scope="scope"> 
          <div class="content_rowspan" v-for="(item,index) in scope.row.zhpf">
            <el-rate v-model="item.pf" disabled></el-rate>
          </div>                                         
        </template>                               
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1:3,
        tableData:[{
          lx:"班级情况",
          zbnr:[{zbxq:"班级纪律较好，学生学习热度高"},{zbxq:"班级纪律较好，学生学习热度高"},{zbxq:"班级纪律较好，学生学习热度高"},{zbxq:"班级纪律较好，学生学习热度高"}],
          zhpf:[{pf:2},{pf:2},{pf:2},{pf:2}],
        },{
          lx:"班级情况",
          zbnr:[{zbxq:"班级纪律较好，学生学习热度高"},{zbxq:"班级纪律较好，学生学习热度高"},{zbxq:"班级纪律较好，学生学习热度高"}],
          zhpf:[{pf:2},{pf:2},{pf:2}]
        },{
          lx:"班级情况",
          zbnr:[{zbxq:"班级纪律较好，学生学习热度高"},{zbxq:"班级纪律较好，学生学习热度高"}],
          zhpf:[{pf:2},{pf:2}]
        },{
          lx:"班级情况",
          zbnr:[{zbxq:"班级纪律较好，学生学习热度高"},{zbxq:"班级纪律较好，学生学习热度高"},{zbxq:"班级纪律较好，学生学习热度高"},{zbxq:"班级纪律较好，学生学习热度高"},{zbxq:"班级纪律较好，学生学习热度高"}],
          zhpf:[{pf:2},{pf:2},{pf:2},{pf:2},{pf:2}]
        }],
      };
    },
    methods: {
    }
  }
</script>
<style>
.tabledetail{
  font-size: .16rem;
  overflow: auto;
  height: calc(100% - .99rem);
/*  position: fixed;
  top: 0;
  left: 0;
  width: 100%;*/
}
.tabledetail .content_rowspan{
  height: .39rem;
  line-height: .39rem;  
  border-bottom: 1px solid #dfe6ec;
}
.tabledetail div.content_rowspan:last-child{
  border:none !important;
}
.tabledetail .el-table_1_column_2 div{
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
.tabledetail .el-rate__icon,.cell .el-rate__icon{
  font-size: .12rem;
  /*color: #E86F6F !important;*/
}
.tabledetail_title{
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
.tabledetail_title div{
  margin-right: .15rem;
}
.tabledetail_title div p{
  font-family: Microsoft YaHei;
  font-size: .14rem ;
  color:  #555555 ;
}
.tabledetail_title div span{
  color: #2184c5;
}
.tabledetail_title_pf span{
  color: #E86F6F !important;
}
</style>
