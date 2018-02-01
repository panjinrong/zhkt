<template>
  <div class="swith" style="overflow: auto;height: calc(100% - .52rem);width: 100%;">
    <div class="table_list" v-for="(list,index) in item">
      <div class="table_list_title" :class="{'active':showtable[index].show}">
        <div class="table_list_title_xy">
          <p>学院：<span>{{list.bmmc}}</span></p>
        </div>
        <!-- <div class="table_list_title_zy">
          <p>专业：<span>{{list.zy}}</span></p>
        </div> -->
        <div class="table_list_title_bj">
          <p>班级：<span v-for="(val,index) in list.bjlb">{{val}},</span></p>
        </div>
        <div class="table_list_title_js">
          <p>教师：<span>{{list.jsxm}}</span></p>
        </div>
        <div class="table_list_title_dql">
          <p>到勤率：<span>{{list.dql}}</span></p>
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
              <el-table-column v-for="(title,indexs) in dataTitle" :prop="title.prop" :label="title.label" :width="title.width" :key="'a'+indexs"></el-table-column>
              <el-table-column  label="详情">
                <template slot-scope="scope">
                  <el-button  @click.native.prevent="openDetail(scope.$index, scope.row)" type="text" size="small">查看</el-button>
              </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
      </el-collapse-transition>
    </div>
   </div>
</template>
 <script>
 import bus from '../../eventBus.js'
 export default {
  data:function(){
    return {
      activeNames: ['1'],
      item:[],
      pd_cz:'',
      index_cd :'',
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
            prop:'jsxm',
            label:'授课教师',
            /*width:'120px'*/
          },{
            prop:'dmsj',
            label:'点名时间',
            /*width:'120px'*/
          },{
            prop:'bjrs',
            label:'班级人数',
            /*width:'120px'*/
          },{
            prop:'dql',
            label:'学生到勤率',
            /*width:'120px'*/
          }],
          showtable:[],
    }
  },
  methods: {
    openList(index,text){
      if(text == '展开'){
        this.showtable[index].show=true;
      }else{
        this.showtable[index].show=false;
      }

    },
    // 表格查看评价详情
    openDetail(index,row){
      // row.id
      // var param ={'id':row.zhktid}; 
      this.$axios({
        method: 'get',
        url: COURSES.url+'/cms/zhkt/dmxq',
        params:{"zhktid":row.zhktid}
        }).then((res) => {
          if(res.data.code ==40001){
              bus.$emit('dmjlswit',res.data.content);

              // bus.$emit('dmjl-table-tz',param);
          }
      });
        // console.log(row.parent)
      this.$emit('dmjl-box');
      var bjzd=this.item[0].bjlb;
      this.$router.push({path:'/dmjl/details',query:{row:row,bj:bjzd}});
    }
  },
  created(){  
        // this.$axios('./static/dmjl_int.json').then((res) => {
        //            this.item = res.data;
        // });
    },
  mounted(){
        var self = this;
        bus.$on('userDefinedEvent',function(msg,msg2){
          if(msg2.code =='40001'){
              self.item = msg2.content;
              self.item.forEach(function(r,i){
              self.showtable.push({"show":false})
              });
          }
          
        });
        bus.$on('Searchboxs',function(msg){
          self.item = msg;
          self.item.forEach(function(r,i){
          self.showtable.push({"show":false})
          })
        });
        bus.$on('dmjl-tree-switer',function(msg3){
          self.pd_cz = msg3;
        });
  }
}
</script>
<style>
.table_list{
  /*height: .64rem;*/
  border-bottom:.01rem solid #e8ebed;
}
.table_list_title{
  background: #F7F9FD;
  height: .38rem;
  line-height: .38rem;
  width: 100%;
  margin: .14rem 0;
  padding-left: .14rem;
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
.table_list_title div p{
  font-family: Microsoft YaHei;
  font-size: .14rem ;
  color:  #555555 ;
}
.table_list_title div span{
  color: #2184c5;
}
.table_list_title_dql span{
  color: #E86F6F !important;
}
.table_list_title_btn{
  /*position: relative;*/
}.table_list_title_btn span{
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
