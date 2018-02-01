<template>
  <div class="pf">
    <div class="pf_star" v-show="showstar">
      <h3>班级情况</h3>
      <div class="pf_star_zb">
        <div class="pf_star_zb_xq">
          <p><label>指标1：</label><span>班级纪律较好，学生学习热情高。</span></p>
          <el-rate v-model="value1"></el-rate>
        </div>
        <div class="pf_star_zb_xq">
          <p><label>指标2：</label><span>学生学习态度端正，自学能力较强</span></p>
          <el-rate v-model="value2" disabled></el-rate>
        </div>
        <div class="pf_star_zb_xq">
          <p><label>指标3：</label><span>学生主动地学习课程</span></p>
          <el-rate v-model="value2"></el-rate>
        </div>
      </div>
    </div>
    <div class="pf_pl" v-show="!showstar">
      <h3>就班级上课情况给一点评价吧！</h3>
      <textarea placeholder="请输入您对课堂情况的评价"></textarea>
    </div>
    <div class="pf_btn">
      <mt-button size="large" v-show="showstar" @click="next()">下一项</mt-button>
      <mt-button size="large" v-show="!showstar" @click="handup()">提交评价</mt-button>
    </div>
  </div>
</template>
 <script>
 export default {
  name: 'pf',
  data:function(){
    return {
      value1:0,
      value2:5,
      value3:0,
      // score:0,
      showstar:true,
    }
  },
  methods:{
    // 下一页
    next(){
      this.showstar=false;
    },
    handup(){
      this.$router.go(-1);
    },
  },
}
</script>
<style>
.pf{
  height:100%;
  font-size: .16rem;
  background: #f7f7f7;
}
.pf_star,.pf_pl{
  padding:.4rem .15rem;
  background: #ffffff;
  margin-bottom: .2rem;
  border-bottom: .01rem solid #ececec;
}
.pf h3{
  font-family: PingFang-SC-Bold;
  font-size: .16rem;
  color: #555555;
  margin-bottom: .19rem;
}
.pf_star_zb_xq p{
  display: flex;
}
.pf_star_zb_xq p label{
  font-family: PingFang-SC-Bold;
  font-weight: 700;
  font-size: .15rem;
  color: #555555;
  width: .6rem;
}
.pf_star_zb_xq p span{
  display: inline-block;
  width: calc(100% - .6rem);
  font-size: .15rem;
  color: #777777;
}
.pf_pl textarea{
  width:100%;
  height: 1.73rem;
  padding:.15rem;
  border-radius: .04rem;
  border:.01rem solid #dfe1e3;
  background: #f8fafc;
  resize: none;
  font-size: .14rem;
  font-family: PingFang-SC-Medium;
}
input::-webkit-input-placeholder {
  font-family: PingFang-SC-Medium;
　color: #bbbbbb !important; /* WebKit browsers*/
}
input:-moz-placeholder {
  font-family: PingFang-SC-Medium;
　color: #bbbbbb !important; /* Mozilla Firefox 4 to 18 */
}
input::-moz-placeholder {
  font-family: PingFang-SC-Medium;
　color: #bbbbbb !important; /* Mozilla Firefox 19+*/ 
}
input:-ms-input-placeholder {
  font-family: PingFang-SC-Medium;
　color: #bbbbbb !important;  /*Internet Explorer 10+ */
}
/*修改插件样式*/
.pf .el-rate{
  margin:.07rem 0 .07rem .58rem;
}
.pf .el-rate__icon{
  font-size: .24rem !important;
  margin-right: .15rem;
}
.el-icon-star-off:before{
  content: "\E621";
  color: #DDDFE1;
}
.pf_btn{
  padding: 0 .15rem;
}
.pf_btn button{
  width: 100%;
  height: .46rem;
  background: #55b2f5;
  color: #ffffff;
  font-size: .17rem;
  font-family: PingFang-SC-Medium;
  border-radius: .06rem;
  border:none;
}
</style>
