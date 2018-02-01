<template>
  <div class="jxpjtea">
    <div class="jxpjtea_right">
      <!-- <v-table></v-table> -->
      <div class="table">
        <div class="table_list" v-for="(list,index) in data">
          <div class="table_list_title" :class="{'active':showtable[index].show}">
            <div class="table_list_title_bj">
              <p>班级：<span>{{list.xy}}</span></p>
            </div>
            <div class="table_list_title_js">
              <p>授课教师：<span>{{list.js}}</span></p>
            </div>
            <!-- <div class="table_list_title_jd">
              <p>课程进度：<span>17/52课时</span></p>
            </div> -->
            <div class="table_list_title_pf">
              <p>课程评分：<span><el-rate v-model="list.kcpf" disabled  :colors="['#E86F6F', '#E86F6F', '#E86F6F']"></el-rate></span></p>
            </div>
            <div class="table_list_title_btn">
              <span class="table_list_title_btn_sq" v-if="showtable[index].show" @click="openList(index,'收起')">收起</span>
              <span class="table_list_title_btn_zk" v-else @click="openList(index,'展开')">展开</span>
            </div>
          </div>
           <el-collapse-transition>
            <div class="table_list_main" v-show="showtable[index].show">
              <template>
                <el-table :data="list.tableData" style="width: 100%" border>
                  <el-table-column v-for="(title,index) in dataTitle" :prop="title.prop" :label="title.label" :width="title.width" :key="'a'+index"></el-table-column>
                  <el-table-column  label="综合评分">
                  <template slot-scope="scope">
                    <el-rate v-model="value1" disabled :allow-half="true"></el-rate>
                  </template>
                  </el-table-column>
                  <el-table-column  label="详情">
                  <template slot-scope="scope">
                    <el-button  @click.native.prevent="openDetail(scope.$index, scope.row.id)" type="text" size="small">查看</el-button>
                  </template>
                  </el-table-column>
                </el-table>
              </template>
            </div>
          </el-collapse-transition>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
 import table from './jxpj_table'
 import detail from './jxpj_table_detail'
 export default {
  name: 'jxpjtea',
  components:{
    'v-detail':detail,
  },
  data(){
    return {
      value1:3.5,
      data:'',
      activeNames: ['1'],
      dataTitle:[{
        prop:'xh',
        label:'序号',
        width:'45px'
      },{
        prop:'kcmc',
        label:'课程名称',
        /*width:'120px'*/
      },{
        prop:'kcbh',
        label:'课程编号',
        /*width:'120px'*/
      },{
        prop:'skjs',
        label:'授课教师',
        /*width:'120px'*/
      },{
        prop:'kcsj',
        label:'课程时间',
        /*width:'120px'*/
      },{
        prop:'bjpf',
        label:'班级评分',
        /*width:'120px'*/
      },{
        prop:'zhsj',
        label:'综合评分',
        /*width:'120px'*/
      }],
        showtable:[],
    }
  },
   methods: {
    handleChange(val) {
      console.log(val);
    },
    // 展开收起
    openList(index,text){
      if(text == '展开'){
        this.showtable[index].show=true;
      }else{
        this.showtable[index].show=false;
      }
    },
    // 表格查看评价详情
    openDetail(index,row){
      this.$emit('childInfo','t')
      this.$router.push({path:'/jxpj/jxpjdetail',query:{params:index}});
    },
  },
  created(){
    var _this=this;
    _this.$emit('childInfos','t') // 隐藏面包屑3级
    _this.$axios({
      method: 'get',
      url: './../../../static/pjjl.json',
      // params:{"param":array}
    }).then((res) => {
       console.log(res.data)
       _this.data=res.data
       _this.data.forEach(function(){
         _this.showtable.push({"show":false})
       })
    });
  }
}
</script>
<style>
.jxpjtea{
  /*padding:.13rem 0;*/
  font-size: .16rem;
  display: flex;
  width: 100% ;
  height: calc(100% - .99rem);
  box-sizing: border-box;
}
.jxpjtea_right{
  height: 100%;
  width: 100%;
  /*min-width: 8.22rem;*/
  overflow: auto;
  /*padding:0 .14rem;*/
  box-sizing: border-box;
}
.table_list{
  min-width: 9rem;
  border-bottom:.01rem solid #e8ebed;
  margin-bottom: .14rem;
}
.table_list_title{
  background: #F7F9FD;
  height: .38rem;
  line-height: .38rem;
  width: 100%;
  margin: .14rem 0 0;
  padding: 0 .14rem;
  box-sizing: border-box;
  display: flex;
  position: relative;
}
.table_list .active{
  background: #ebf2f8 !important;
}
.table_list_title:hover{
  background: #ebf2f8;
}
.table_list_title div{
  margin-right: .38rem;
}
/*@media screen and (max-width: 14rem){
  .studetail_title div{
    margin-right: .1rem;
  }
}*/
.table_list_title div p{
  font-family: Microsoft YaHei;
  font-size: .14rem ;
  color:  #555555 ;
}
.table_list_title div span{
  color: #2184c5;
}
.table_list_title_pf span{
  color: #E86F6F !important;
}
.el-rate{
  display:inline-block;
  font-size: .12rem;
}
.table_list_title_pf .el-rate__icon,.cell .el-rate__icon{
  font-size: .12rem;
  /*color: #E86F6F !important;*/
}
.table_list_title_btn span{
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  font-family: Microsoft YaHei;
  font-size: .14rem ;
  text-align: center;
  width: .86rem;
  height: .38rem;
  border:none;
  cursor: pointer;
}
.table_list_title_btn_zk{
  color: #666666 !important;
  background: url(../../../../assets/images/zk.png) no-repeat 85% 55%;
}
.table_list_title_btn_sq{
  color: #2184c5;
  background: url(../../../../assets/images/sq.png) no-repeat 85% 55%;
}
.el-table th>.cell,.el-table td>.cell{
  text-align: center !important;
}
.table .el-table .cell,.xxmb_xq .el-table th>div{
  padding-right: 0!important;
  padding-left: 0!important;
}
</style>
