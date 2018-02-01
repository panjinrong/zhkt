<template>
	<div class="table">
    <div ref="img1" style="z-index: 1;position: absolute;display:none;">123</div>
    <div class="table_list" v-for="(list,index) in 3">
      <div class="table_list_title" :class="{'active':showtable[index].show}">
        <div class="table_list_title_bj">
          <p>班级：<span>2015级 机械电子工程专业 1班</span></p>
        </div>
        <div class="table_list_title_js">
          <p>搜客教师：<span>何木耀</span></p>
        </div>
        <div class="table_list_title_jd">
          <p>课程进度：<span>17/52课时</span></p>
        </div>
        <!-- <div class="table_list_title_pf">
          <p>课程评分：<span>71分</span></p>
        </div> -->
        <div class="table_list_title_btn">
          <span class="table_list_title_btn_sq" v-if="showtable[index].show" @click="openList(index,'收起')">收起</span>
          <span class="table_list_title_btn_zk" v-else @click="openList(index,'展开')">展开</span>
        </div>
      </div>
       <el-collapse-transition>
        <div class="table_list_main" v-show="showtable[index].show" style="text-align: center;">
          <template>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="序号"
                width="100" 
                height = "82">
              </el-table-column>
              <el-table-column
                prop="name"
                label="课时"
                width="270" 
                height = "82">
              </el-table-column>
              <!-- <el-table-column
                <!-- prop="address"
                label="课件资料"
                height = "82"> -->
              <!-- </el-table-column>  -->
              <el-table-column label="操作">
                <template slot-scope="scope">
                    <p class="img_hover" v-for="(site,key,index) in scope.row.address"><span style="display:block;line-height: 0px"><img  @dblclick="img_box(scope.row)" @contextmenu.prevent="show1($event)" :src="word" style="height:40px;width:40px;"></span><span>{{site.name}}</span></p>
                   
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
 import word from '../../../../assets/images/word_kjzl.png'
 export default {
  name: 'jspj',
  data:function(){
    return {
      word:word,
      activeNames: ['1'],
      tableData: [{
            date: '1',
            name: '2017.09.22第六周 星期2 1~2节',
            address: [
                {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'},
                {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'},
                {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'},
                {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'},
                {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'},
                {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'},
                {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'},
                {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'},
                {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'}
            ]
          }, {
            date: '2',
            name: '2017.09.22第六周 星期2 1~2节',
            address: [
               {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'},
                {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'}
            ]
          }, {
            date: '3',
            name: '2017.09.22第六周 星期2 1~2节',
            address: [
                {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'},
                {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'}
            ]
          }, {
            date: '4',
            name: '2017.09.22第六周 星期2 1~2节',
            address: [
               {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'},
                {'name':'word文件','type':'../../../../assets/images/word_kjzl.png'}
            ]
          }],
          showtable:[{"show":false},{"show":false},{"show":false}],
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    openList(index,text){
      if(text == '展开'){
        this.showtable[index].show=true;
      }else{
        this.showtable[index].show=false;
      }
    },
    img_box(data){
      console.log(data)
    },
    show1(ev){
      ev.preventDefault();
      console.log(ev)
    }
  },
  created(){
      
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
.table_list_title_pf span{
  color: #E86F6F !important;
}
.table_list_title_btn{
  /*position: relative;*/
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
.table .el-table .caret-wrapper, .el-table th > .cell {
  text-align: center;
}
.table .el-table td{
  height:80px;
}
.table .el-table th{
  height:38px;
}
.table .cell p button{
  display: block;
  vertical-align: bottom;
  /*margin-left: .15rem;*/
}
.table .cell p{
  float: left;
  text-align: center;
  margin-right: .5rem;
  padding: .05rem;
  margin-top: .05rem;
  margin-bottom: .05rem;

}
.table .cell p button span{
  display: block;
}
.img_hover:hover{
  cursor: pointer;
  background: #EFF6FB;
 /* opacity: 0.8;
  box-shadow: 0px 3px 5px #aa9f9f;*/
}

</style>
