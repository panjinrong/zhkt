<template>
	<div class="dmjlstu">
    <div class="dmjlstu_title">
      <h3>点名详情</h3>
      <!-- <span>迟到</span> -->
      <span v-if="data.state == '0'">到勤</span>
      <span v-if="data.state == '1'">请假</span>
      <span v-if="data.state == '2'">旷课</span>
      <span v-if="data.state == '3'">迟到</span>
      <span v-if="data.state == '4'">早退</span>
      <span v-if="data.state == '5'">未到</span>
    </div>
 
	</div>
</template>
 <script>
 export default {
  name: 'dmjlstu',
  data:function(){
    return {
      data:'',
    }
  },
  methods:{
     //考勤的背景颜色
    // kqbackground(text){
    //   if(text == '到勤'){
    //     return 'dq'
    //   }else if(text == '早退'){
    //     return 'zt'
    //   }else if(text == '请假'){
    //     return 'qj'
    //   }else if(text == '旷课'){
    //     return 'kk'
    //   }else if(text == '迟到'){
    //     return 'cd'
    //   }else if(text == '未到'){
    //     return 'wd'
    //   }
    // },
    
    // 获取点明结果分析数据
    getData(){
      var _this = this;
      // if(sessionStorage.getItem("userinfo")){
          _this.userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
          console.log(_this.userinfo)
            _this.$axios({
              methods:'post',
              // url:COURSES.url+'/zhkt/xsckdmjg?zhktid=762bdce965784d238b90a56ed6d67ff4',
              url:COURSES.url+'/zhkt/xsckdmjg',
              params:_this.userinfo,
          }).then(function(res){
            // console.log(res.data)
              var d = res.data;
              if(d.code == "40001"){
                _this.data=d.content[0]
              }
              console.log(_this.data.state)
          })
      // }
    },
  },
  created(){
    this.getData();
  }
 
}
</script>
<style>
.dmjlstu{
    height:calc(100% - .7rem);
    font-size: .16rem;
    background: #ffffff;
}
.dmjlstu_title{
  height: .45rem;
  padding: 0 .15rem;
  line-height: .45rem;
  border-bottom: .01rem solid #ececec;
}
.dmjlstu_title h3{
  display: inline-block;
  font-family: PingFang-SC-Medium;
  font-size: .17rem;
  color: #333333;
}
.dmjlstu_title span{
  float: right;
  font-family: PingFang-SC-Medium;
  font-size: .16rem;
  color: #ff8e8e;
}
/*.dq{
  color: #55b2f5;
}
.zt{
  color: #fe9860;
}
.qj{
  color: #4ee5c3;
}
.kk{
  color: #ff8e8e;
}
.cd{
  color: #ffd763;
}
.wd{
  color: #dbdbdb;
}*/
</style>
