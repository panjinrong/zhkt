<template>
	<div class="ktpx">
    <!-- <v-preenter></v-preenter> -->
   <!--  <div class="ktpx_empty">
      <h3>还没有评学哦~</h3>
      <p>就课堂情况做一下评价吧！</p>
      <mt-button type="default" @click.stop="linkypf()">去评学</mt-button>
    </div> -->
    <div class="ypf_star" >
      <h3>班级情况</h3>
      <div class="ypf_star_zb">
        <div class="ypf_star_zb_xq">
          <p><label>指标1：</label><span>班级纪律较好，学生学习热情高。</span></p>
          <el-rate disabled v-model="value1"></el-rate>
        </div>
        <div class="ypf_star_zb_xq">
          <p><label>指标2：</label><span>学生学习态度端正，自学能力较强</span></p>
          <el-rate disabled v-model="value2"></el-rate>
        </div>
        <div class="ypf_star_zb_xq">
          <p><label>指标3：</label><span>学生主动地学习课程</span></p>
          <el-rate disabled v-model="value3"></el-rate>
        </div>
      </div>
      <h3>评价</h3>
      <p>该班级学生思维灵活，团结友爱，班风学风良好，我非常喜欢这个班</p>
    </div>
	</div>
</template>
 <script>
 import preenter from './pre_enter'
 export default {
  name: 'ktpx',
  components:{"v-preenter":preenter},
  data:function(){
    return {
      value1:5,
      value2:4,
      value3:3,
    }
  },
  methods:{
    linkypf(){
      var _this=this;
      _this.$router.push({path:'/skxxypf'})
    }
  },
 
}
</script>
<style>
.ktpx{
    height:calc(100% - .7rem);
    font-size: .16rem;
    /*padding-top: .1rem;*/
    background: #ffffff;
}
.ktpx_empty{
  text-align:center;
  padding-top:1.7rem;
}
.ktpx_empty h3{
  font-family: PingFang-SC-Medium;
  font-size: .15rem;
  color: #333333;
}
.ktpx_empty p{
  font-family: PingFang-SC-Medium;
  font-size: .14rem;
  color: #999999;
  margin-top: .1rem;
}
.ktpx_empty button{
  width: 1.25rem;
  height: .4rem;
  background: #ffffff;
  font-family: PingFang-SC-Bold;
  font-size: .15rem;
  font-weight: 600;
  color: #3da8f5;
  border:.01rem solid #3da8f5;
  border-radius: .04rem;
  margin-top: .43rem;
}
.ypf_star{
  padding:.32rem .15rem;
  background: #ffffff;
  margin-bottom: .2rem;
}
.ypf_star > p{
  font-family: PingFang-SC-Medium;
  font-size: .14rem;
  color: #bbbbbb;
}
.ypf_star h3{
  font-family: PingFang-SC-Bold;
  font-size: .16rem;
  color: #555555;
  margin-bottom: .19rem;
}
.ypf_star_zb_xq p label{
  font-family: PingFang-SC-Bold;
  font-weight: 700;
  font-size: .15rem;
  color: #555555;
}
.ypf_star_zb_xq p span{
  font-size: .15rem;
  color: #777777;
}
.ktpx .ivu-el-rate{
  margin:.05rem 0 .05rem .5rem;
  font-size: .24rem !important;

}
.ktpx .ivu-el-rate-star{
  margin-right: .15rem !important;
}
.ktpx .el-rate{
  margin:.07rem 0 .07rem .58rem;
}
.ktpx .el-rate__icon{
  font-size: .24rem !important;
  margin-right: .15rem;
}
.el-icon-star-off:before{
  content: "\E621";
  color: #DDDFE1;
}
</style>
