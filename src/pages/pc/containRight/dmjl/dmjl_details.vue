<template>
  <div class="details" style="overflow-y: auto;height: calc(100% - .91rem);" sv-modle="item">
        <div class="details_one">
            <div class="det_1">
              <p><label>授课教师</label>：<span>{{items_get.jsxm}}</span></p>
              <p><label>课时</label>：<span>{{items_get.dmsj}}</span></p>
              <p><label>授课班级</label>：<span>{{items_get2}}</span></p>
              <p><label>班级人数</label>：<span>{{items_get.bjrs}}</span></p>  
            </div>
            <div class="det_2">
                  <p><label>{{items_get.dql}}</label><span>到勤率</span></p>
                  <p><label style="color:#62d1b3">{{item.dqrs}}</label><span>到勤人数</span></p>
                  <p><label style="color:#75a8e1">{{item.cdrs}}</label><span>迟到人数</span></p>
                  <p><label style="color:#fbd2a1">{{item.ztrs}}</label><span>早退人数</span></p>
                  <p><label style="color:#eb7b7b">{{item.kkrs}}</label><span>旷课人数</span></p>
            </div>
        </div>
        <div class="details_two">
            <p>旷课学生：</p>
            <el-tag v-for="(value1,index1) in item.kkxs" type="danger" :key="index1">{{value1}}</el-tag>
        </div>
        <div class="details_three">
            <p>早退学生：</p>
            <el-tag v-for="(value2,index2) in item.ztxs" type="danger" :key="index2">{{value2}}</el-tag>
        </div>
        <div class="details_four">
            <p>迟到学生：</p>
            <el-tag v-for="(value3,index3) in item.cdxs" type="danger" :key="index3">{{value3}}</el-tag>
        </div>
        <div class="details_five">
            <p>到勤学生：</p>
            <el-tag v-for="(value4,index4) in item.dqxs" type="danger" :key="index4">{{value4}}</el-tag>
        </div>
        
   </div>
</template>
 <script>
import bus from '../../eventBus.js'
 export default {
  data:function(){
    return {
          item:'',
          // items_get:[],
          items_get:this.$route.query.row,
          items_get2:this.$route.query.bj
    }
  },
  methods: {
  
  },
  mounted(){
        var self = this;
        bus.$on('dmjlswit',function(msg,msg2){
          self.item = msg;

          this.items_get = msg2;
        })
        console.log(this.$route.query.bj)
  }
 
}
</script>
<style>
.details_one{
  height: 2.16rem;
  font-size: .14rem;
  border-bottom: 1px solid #FAFBFB;
}
.det_1{
    padding-left: .14rem;
    display: flex;
    width: 100%;
    color: #555555;
}
.det_1 p{
  float: left;
  margin-right: .34rem;
  margin-top: 30px;

}
.det_2 p:nth-child(1){
  margin-left: .44rem;
  margin-top: .22rem;
  margin-right: 1.26rem;
  padding-right: 0rem;
}
.det_2 p:nth-child(1) label{
  font-size: .6rem;
  color: #2184c5;
  font-weight: bold;
}
.det_2 p:nth-child(1) span{
  color: #555555;
}
.det_2 p{
  float: left;
  text-align: center;
  margin-top: 0.67rem;
  padding-right: .44rem;
  margin-left: .44rem;
}
.det_2 p label{
  display: block;
  font-size: .3rem;
}
.det_2 p span{
  display: block;
  color: #555555;
}
.details_two{
  min-height: 1rem;
  border-bottom: 1px solid #FAFBFB;
  border-top: 1px solid #F2F4F5;
}
.details_two p{
  margin-left: .16rem;
  margin-top: .1rem;
  font-size: .14rem;
  font-weight: bold;
  color: #777777;
}
.details_two span{
  margin-left: .16rem;
  margin-top: .1rem;
  color: #eb7b7b;
  border-radius: 30px;
  background-color: #fff;
  padding: 0 10px;
}
.details_three{
  min-height: 1rem;
  border-bottom: 1px solid #FAFBFB;
  border-top: 1px solid #F2F4F5;
}
.details_three p{
  margin-left: .16rem;
  margin-top: .1rem;
  font-size: .14rem;
  font-weight: bold;
  color: #777777;
}
.details_three span{
  margin-left: .16rem;
  margin-top: .1rem;
  color: #fbd2a1;
  border-radius: 30px;
  background-color: #fff;
  padding: 0 10px;
  border: 1px solid #fbd2a1;
}
.details_four{
  min-height: 1rem;
  border-bottom: 1px solid #FAFBFB;
  border-top: 1px solid #F2F4F5;
}
.details_four p{
  margin-left: .16rem;
  margin-top: .1rem;
  font-size: .14rem;
  font-weight: bold;
  color: #777777;
}
.details_four span{
  margin-left: .16rem;
  margin-top: .1rem;
  color: #75a8e1;
  border-radius: 30px;
  background-color: #fff;
  padding: 0 10px;
  border: 1px solid #93BED4;
}
.details_five{
  border-bottom: 1px solid #FAFBFB;
  border-top: 1px solid #F2F4F5;
  margin-bottom: .2rem;
}
.details_five p{
  margin-left: .16rem;
  margin-top: .1rem;
  font-size: .14rem;
  font-weight: bold;
  color: #777777;
}
.details_five span{
  margin-left: .16rem;
  margin-top: .1rem;
  color: #909399;
  border-radius: 30px;
  background-color: #fff;
  border: 1px solid #909399;
  padding: 0 10px;
}
</style>
