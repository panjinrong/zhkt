<template>
 <transition name="el-fade-in-linear">
  <div class="zxsjedit" v-show="">
    <div class="zxsjedit_summer">
      <div class="zxsjedit_title">
        <p>夏季作息时间修改<span>（双击鼠标右键，对时间进行修改）</span></p>
      </div>
      <el-table :data="tableData" border style="width:100%" @row-click="editCell">
        <el-table-column  label="时段" prop="sd" width="120"></el-table-column>
        <el-table-column  label="课程节数" >
          <template slot-scope="scope">
            <div class="content_rowspan" v-for="(list,index) in scope.row.kcjs">
              <p>{{list.djj}}</p>
            </div>     
          </template>
        </el-table-column>
        <el-table-column  label="课程时间" width="150">
          <template slot-scope="scope"> 
            <div class="content_rowspan" v-for="(item,index) in scope.row.kcsj">
              <!-- <input type="text" name="sj" v-model="item.sj" :disabled="ifedit"> -->
               <p :contenteditable="ifedit?'true':'false'">{{item.sj}}{{index}}</p>
            </div>                                         
          </template>                               
        </el-table-column>
      </el-table>
    </div>
    <div class="zxsjedit_btn">
      <button>取消设置</button>
      <button>确认修改</button>
    </div>
  </div>
</transition>
</template>
<script>
  export default {
    data() {
      return {
        tableData:[{
          sd:"上午",
          kcjs:[{djj:"第一节"},{djj:"第二节"},{djj:"第三节"},{djj:"第四节"}],
          kcsj:[{sj:"8:30-9:15"},{sj:"9:25-10:15"},{sj:"10:30-11:15"},{sj:"11:25-12:10"}],
        },{
          sd:"中午",
          kcjs:[],
          kcsj:[]
        },{
          sd:"下午",
          kcjs:[{djj:"第五节"},{djj:"第六节"},{djj:"第七节"},{djj:"第八节"}],
          kcsj:[{sj:"14:30-15:15"},{sj:"15:25-16:10"},{sj:"16:30-17:15"},{sj:"17:25-18:10"}]
        },{
          sd:"晚上",
          kcjs:[{djj:"第九节"},{djj:"第十节"},{djj:"第十一节"}],
          kcsj:[{sj:"19:10-19:55"},{sj:"20:05-20:50"},{sj:"21:00-21:45"}]
        }],
        edit:[{"editd":[{"show":true},{"show":true},{"show":true},{"show":true}]},
          {"editd":[{"show":true},{"show":true},{"show":true},{"show":true}]},
          {"editd":[{"show":true},{"show":true},{"show":true}]},
        ],
        ifedit:false,
        pageshow:true
      }
    },
    methods: {
      // 双击修改
      // row, column, cell, event
      editCell(row, event, column){
        event.stopPropagation();
        if(column.label == "课程时间"){
          this.ifedit=true;
        }
      },
    }
  }
</script>
<style>
.zxsjedit{
  font-size: .16rem;
  /*padding-top: .16rem;*/
  box-sizing: border-box;
  overflow: auto;
  position: absolute;
  width: 100%;
  top: .16rem;
  left: 0;
}
.zxsjedit_title p{
  font-size: .14rem;
  font-family: "MicrosoftYaHei-Bold";
  font-weight:600;
  color: #555555;
  line-height: .38rem;
  padding:0 .14rem;
}
.zxsjedit_title p span{
  font-size: .12rem;
  font-family: "MicrosoftYaHei";
  color: #999999;
}
.zxsjedit .content_rowspan{
  height: .39rem;
  line-height: .39rem;  
  border-bottom: 1px solid #dfe6ec;
  clear: both;
}
.zxsjedit .content_rowspan input{
  height: 100%;
  border:none;
  background: #ffffff;
}
.zxsjedit div.content_rowspan:last-child{
  border:none !important;
}
.zxsjedit .el-table_1_column_2 div{
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
.zxsjedit .el-rate__icon,.cell .el-rate__icon{
  font-size: .12rem;
  /*color: #E86F6F !important;*/
}
.table .el-table .cell,.zxsjedit .el-table th>div{
  padding-right: 0!important;
  padding-left: 0!important;
  padding:0 !important;
}
.zxsjedit_btn button{
  width: 1rem;
  height: .3rem;
  font-size: .14rem;
  font-family: "MicrosoftYaHei";
  border-radius: .15rem;
}
.zxsjedit_btn{
  margin: .52rem 0;
  text-align: center;
}
.zxsjedit_btn button:nth-child(1){
  color: #999999;
  border:.01rem solid #aaaaaa;
  background: #ffffff;
  margin-right: .2rem;
}
.zxsjedit_btn button:nth-child(2){
  color: #ffffff;
  border:.01rem solid #2184c5;
  background: #2184c5;
  margin-left: .2rem;
}
</style>
