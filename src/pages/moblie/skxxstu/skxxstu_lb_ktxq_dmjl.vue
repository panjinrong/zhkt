<template>
	<div class="dmjl">
    <v-preenter v-show="false"></v-preenter>
    <v-dmjl></v-dmjl>
    <!-- <div class="dmjl_title">
      <h3>点名情况</h3>
      <span>10:20</span>
    </div>
    <div class="dmjl_xq" @click="linkdmxq()">
      <div class="dmjl_xq_tj">
        <h3>应到人数：</h3><span style="color:#55b2f5">72</span>
        <h3>实到人数：</h3><span style="color:#18c195">70</span>
        <p><span>迟到：3</span><span>早退：0</span></p>
        <p><span>旷课：0</span><span>请假：2</span></p>
      </div>
      <div class="dmjl_xq_circle">
        <i-circle
          :size="89"
          :trail-width="4"
          :stroke-width="5"
          :percent="87"
          stroke-linecap="square"
          stroke-color="#68baf6">
          <div class="demo-Circle-custom">
              <span>87</span><span>%</span>
              <p>到堂率</p>
          </div>
        </i-circle>
      </div>
    </div> -->
	</div>
</template>
 <script>
 import preenter from './pre_enter'
 import dmjl from './../dmjl/dmjl_stu'
 export default {
  name: 'dmjl',
  components:{"v-preenter":preenter,'v-dmjl':dmjl},
  data:function(){
    return {
    }
  },
  methods:{
    linkdmxq(){
      this.$router.push({path:'/dmxq'})
    },
  }
}
</script>
<style>
.dmjl{
    height:calc(100% - .7rem);
    font-size: .16rem;
    /*padding-top: .1rem;*/
    background: #ffffff;
}
.dmjl_title{
  height: .34rem;
  padding: 0 .15rem;
  line-height: .34rem;
  border-bottom: .01rem solid #ececec;
}
.dmjl_title h3{
  display: inline-block;
  font-family: PingFang-SC-Medium;
  font-size: .17rem;
  color: #333333;
}
.dmjl_title span{
  float: right;
  font-family: PingFang-SC-Medium;
  font-size: .16rem;
  color: #999999;
}
.dmjl_xq{
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
.dmjl_xq_tj{
  display: inline-block;
  width: calc(100% - 1.19rem);
}
.dmjl_xq_tj h3{
  display: inline-block;
  font-family: PingFang-SC-Medium;
  font-weight: 700;
  font-size: .15rem;
  color: #555555;
}
.dmjl_xq_tj > span{
  font-family: PingFang-SC-Medium;
  font-size: .21rem;
}
.dmjl_xq_circle{
  display: inline-block;
  width: 1.19rem;
  padding: 0 .15rem;
}
.dmjl_xq_tj p > span{
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
