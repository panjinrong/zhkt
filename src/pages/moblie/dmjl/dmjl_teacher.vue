<template>
	<div class="dmjlteacher">
    <div class="dmjlteacher_title">
      <h3>点名情况</h3>
      <span>10:20</span>
    </div>
    <div class="dmjlteacher_xq" @click="linkdmxq()">
      <div class="dmjlteacher_xq_tj">
        <h3>应到人数：</h3><span style="color:#55b2f5" v-if="data.ydrs">{{data.ydrs}}</span>
        <h3>实到人数：</h3><span style="color:#18c195" v-if="data.sdrs">{{data.sdrs}}</span>
        <p><span>迟到：{{data.cdrs}}</span><span>早退：{{data.ztrs}}</span></p>
        <p><span>旷课：{{data.kkrs}}</span><span>请假：{{data.qjrs}}</span></p>
      </div>
      <div class="dmjlteacher_xq_circle">
        <i-circle
          :size="89"
          :trail-width="4"
          :stroke-width="5"
          :percent="data.dql"
          stroke-linecap="square"
          stroke-color="#68baf6">
          <div class="demo-Circle-custom">
              <span>{{data.dql}}</span><span>%</span>
              <p>到堂率</p>
          </div>
        </i-circle>
      </div>
    </div>
	</div>
</template>
 <script>
 export default {
  name: 'dmjlteacher',
  data:function(){
    return {
      data:'',
    }
  },
  methods:{
    // 点名详情
    linkdmxq(){
      this.$router.push({path:'/dmxq'})
    },
    // 获取点明结果分析数据
    getData(){
      var _this = this;
      // if(sessionStorage.getItem("userinfo")){
          _this.userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
          console.log(_this.userinfo)
            _this.$axios({
              methods:'post',
              // url:'http://192.168.0.80:8081/zhkt/xsdmjg?zhktid=762bdce965784d238b90a56ed6d67ff4',
              // url:COURSES.url+'/zhkt/hqdmqk?zhktid=762bdce965784d238b90a56ed6d67ff4',
              url:COURSES.url+'/zhkt/hqdmqk',
              params:_this.userinfo,
          }).then(function(res){
            // console.log(res.data)
              var d = res.data;
              if(d.code == "40001"){
                _this.data=d.content
              }
              console.log(_this.data)
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
.dmjlteacher{
    height:calc(100% - .7rem);
    font-size: .16rem;
    padding-top: .1rem;
    background: #ffffff;
}
.dmjlteacher_title{
  height: .34rem;
  padding: 0 .15rem;
  line-height: .34rem;
  border-bottom: .01rem solid #ececec;
}
.dmjlteacher_title h3{
  display: inline-block;
  font-family: PingFang-SC-Medium;
  font-size: .17rem;
  color: #333333;
}
.dmjlteacher_title span{
  float: right;
  font-family: PingFang-SC-Medium;
  font-size: .16rem;
  color: #999999;
}
.dmjlteacher_xq{
  display: flex;
  width: 100%;
  padding: .14rem .15rem;
}
.demo-Circle-custom span:nth-child(1){
  font-size: .26rem;
  color: #55b2f5;
}
.demo-Circle-custom span:nth-child(2){
  font-size: .13rem;
  color: #55b2f5;
}
.dmjlteacher_xq_tj{
  display: inline-block;
  width: calc(100% - .9rem);
}
.dmjlteacher_xq_tj h3{
  display: inline-block;
  font-family: PingFang-SC-Medium;
  font-weight: 700;
  font-size: .15rem;
  color: #555555;
}
.dmjlteacher_xq_tj > span{
  font-family: PingFang-SC-Medium;
  font-size: .21rem;
}
.dmjlteacher_xq_circle{
  display: inline-block;
  width: .9rem;
  /*padding: 0 .15rem;*/
}
.dmjlteacher_xq_tj p > span{
  display: inline-block;
  font-family: PingFang-SC-Medium;
  font-size: .13rem;
  color: #777777;
  width: .8rem;
}
.demo-Circle-custom p{
  font-family:PingFang-SC-Medium;
  font-size: .1rem;
  color: #555555;
  margin-top:.07rem;
}
</style>
