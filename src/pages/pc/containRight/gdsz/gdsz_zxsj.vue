<template>
  <div class="zxsj">
    <div class="zxsj_show" v-show="!ifedit">
      <div class="zxsj_summer" style="padding-right:.14rem;">
        <div class="zxsj_title">
        <!-- <router-link to="/gdsz/zxsjedit">编辑时间</router-link> -->
          <p>夏季作息时间修改<span @click="editTime()">编辑时间</span></p>
        </div>
        <el-table :data="data" border style="width:100%" >
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
                 <p>{{item.sj}}{{index}}</p>
              </div>                                         
            </template>                               
          </el-table-column>
        </el-table>
      </div>
      <div class="zxsj_winter" style="padding-left:.14rem;">
        <div class="zxsj_title">
          <p>夏季作息时间修改<span>编辑时间</span></p>
        </div>
        <el-table :data="tableData" border style="width:100%">
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
                 <p>{{item.sj}}{{index}}</p>
              </div>                                         
            </template>                               
          </el-table-column>
        </el-table>
      </div>
    </div>
    <v-edit v-show="ifedit"></v-edit>
  </div>
</template>
<script>
import edit from './gdsz_zxsj_edit'
  export default {
    components:{'v-edit':edit},
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
        data:[],
      };
    },
    methods: {
      // 打开时间设置页面
      editTime(){
        this.$emit('childInfo')
        this.ifedit=true;
      },
      //获取数据
      getDate(){
        var _this=this;
        _this.$axios({
          method: 'get',
          url: './static/gdsz.json',
          // params:{"param":array}
        }).then((res) => {
           // console.log(res.data)
           _this.data=res.data[0].tableData
           console.log(_this.data[0])
           // _this.data.forEach(function(){
           //   _this.showtable.push({"show":false})
           // })
        });
      }
    },
    created(){
      this.$emit('childInfos')  // 隐藏面包屑3级
      this.getDate();
    }
  }
</script>
<style>
.zxsj{
  font-size: .16rem;
  padding-top: .16rem;
  box-sizing: border-box;
  overflow: auto;
  position: relative;
  height: calc(100% - .99rem);
}
.zxsj_show{
  display: flex;
}
.zxsj_show > div{
  flex: 1;
  box-sizing: border-box;
}
.zxsj_title p{
  font-size: .14rem;
  font-family: "MicrosoftYaHei-Bold";
  font-weight:600;
  color: #555555;
  line-height: .38rem;
  background: #ebf2f8;
  padding:0 .14rem;
}
.zxsj_title p span{
  display: inline-block;
  float: right;
  font-size: .12rem;
  font-family: "MicrosoftYaHei";
  color: #999999;
  padding: 0 .05rem;
  cursor: pointer;
}
.zxsj .content_rowspan{
  height: .39rem;
  line-height: .39rem;  
  border-bottom: 1px solid #dfe6ec;
  clear: both;
}
.zxsj .content_rowspan input{
  height: 100%;
  border:none;
  background: #ffffff;
}
.zxsj div.content_rowspan:last-child{
  border:none !important;
}
.zxsj .el-table_1_column_2 div{
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
.zxsj .el-rate__icon,.cell .el-rate__icon{
  font-size: .12rem;
  /*color: #E86F6F !important;*/
}
.table .el-table .cell,.zxsj .el-table th>div{
  padding-right: 0!important;
  padding-left: 0!important;
  padding:0 !important;
}
</style>
