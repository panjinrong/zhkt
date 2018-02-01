<template>
  <div class="dmxq">
    <div class="dmxq_header">
      <div class="dmxq_header_left">
        <div class="dmxq_header_left_title">
          <img src="../../../assets/images/dmxq_kc.png">
          <h3 v-if="topdata.kcmc">《<span>{{topdata.kcmc}}</span>》</h3><span>共{{topdata.ydrs}}人</span>
        </div>
        <div class="dmxq_header_left_nr">
          <div>
            <p><span style="background:#55b2f5"></span>到勤：{{topdata.sdrs}}人</p>
            <p><span style="background:#fe9860"></span>早退：{{topdata.ztrs}}人</p>
          </div>
          <div>
            <p><span style="background:#4ee5c3"></span>请假：{{topdata.qjrs}}人</p>
            <p><span style="background:#ff8e8e"></span>旷课：{{topdata.kkrs}}人</p>
          </div>
          <p><span style="background:#ffd763"></span>迟到：{{topdata.cdrs}}人</p>
        </div>
      </div>
      <div class="dmxq_header_right">
        <p>{{topdata.dql}}<span>%</span></p>
        <span>到勤率</span>
      </div>
    </div>
    <div class="dmxq_rcxq">
      <h3>人员详情</h3>
      <div class="dmxq_rcxq_lb">
        <div class="dmxq_rcxq_lb_btn" v-for="(list,index) in data" :class="kqborder(list.state)">
          <div class="dmxq_rcxq_lb_btn_left" :class="kqbackground(list.state)">
            <p v-if="list.state == 0">到勤</p>
            <p v-if="list.state == 1">请假</p>
            <p v-if="list.state == 2">旷课</p>
            <p v-if="list.state == 3">迟到</p>
            <p v-if="list.state == 4">早退</p>
            <p v-if="list.state == 5">未到</p>
          </div>
          <div class="dmxq_rcxq_lb_btn_right">
            <p>{{list.name}}</p>
            <span>{{list.xh}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
 export default {
  name: 'dmxq',
  data:function(){
    return {
      data:'',
      topdata:''
    }
  },
  methods:{
    //考勤的背景颜色
    kqbackground(text){
      if(text == 0){
        return 'dq'
      }else if(text == 4){
        return 'zt'
      }else if(text == 1){
        return 'qj'
      }else if(text == 2){
        return 'kk'
      }else if(text == 3){
        return 'cd'
      }else if(text == 5){
        return 'wd'
      }
    },
    // 考勤的边框颜色
    kqborder(text){
      if(text == 0){
        return 'dqs'
      }else if(text == 4){
        return 'zts'
      }else if(text == 1){
        return 'qjs'
      }else if(text == 2){
        return 'kks'
      }else if(text == 3){
        return 'cds'
      }else if(text == 5){
        return 'wds'
      }
    },
    //获取点名结果表
     getData(){
      var _this = this;
      // if(sessionStorage.getItem("userinfo")){
          _this.userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
          // console.log(_this.userinfo)
            _this.$axios({
              methods:'post',
              // url:'http://192.168.0.80:8081/zhkt/xsdmjg?zhktid=762bdce965784d238b90a56ed6d67ff4',
              url:COURSES.url+'/zhkt/xsdmjg',
              // url:COURSES.url+'/zhkt/xsdmjg?zhktid=762bdce965784d238b90a56ed6d67ff4',
              params:_this.userinfo,
          }).then(function(res){
            // console.log(res.data)
              var d = res.data;
              if(d.code == "40001"){
                _this.data=res.data.content
              }
          })
      // }
    },
    // 获取顶部详情数据
    getTopData(){
      var _this = this;
      // if(sessionStorage.getItem("userinfo")){
          _this.userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
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
                _this.topdata=d.content
              }
              // console.log(_this.data)
          })
      // }
    },
  },
  created(){
    this.getData()
    this.getTopData()
  }
}
</script>
<style>
.dmxq{
    height:100%;
    font-size: .16rem;
}
.dmxq_header{
  width: 100%;
  height: 1.5rem;
  display: flex;
  color: white;
  padding:.22rem .1rem;
  background: url(../../../assets/images/dmxq_banner.png) no-repeat;
  background-size: 100% 100%;
  margin-bottom: .15rem;
  box-sizing: border-box;
}
.dmxq_header_left{
  display: inline-block;
  width: calc(100% - .8rem)
}
.dmxq_header_right{
  display: inline-block;
  width: .8rem;
  text-align: right;
  padding-right: .14rem;
}
.dmxq_header_right p{
  font-family:"PingFang-SC-Bold";
  font-size: .24rem;
}
.dmxq_header_right p > span{
  font-family:"PingFang-SC-Bold";
  font-size: .12rem;
}
.dmxq_header_right > span{
  display: inline-block;
  font-size: .1rem;
  vertical-align: top;
  margin-top: -.06rem;
}
.dmxq_header_left_title img{
  width: .15rem;
  height: .15rem;
}
.dmxq_header_left_title h3{
  display: inline-block;
  width: 70%;
}
.dmxq_header_left_title h3>span{
  display: inline-block;
  font-family:"PingFang-SC-Bold";
  font-size: .16rem;
  width: 75%;
  padding-top: .02rem;
  vertical-align: top;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.dmxq_header_left_title span{
  font-size: .12rem;
  font-family:"PingFang-SC-Medium";
}
.dmxq_header_left_nr p{
  display: inline-block;
  font-size: .13rem;
  font-family:"PingFang-SC-Medium";
  width: 1.1rem;
  min-width: .9rem;
}
.dmxq_header_left_nr span{
  display: inline-block;
  width: .1rem;
  height: .1rem;
  border-radius: .02rem;
  margin-right:.08rem;
}
.dmxq_rcxq{
  padding: 0 .15rem;
  height: calc(100% - 1.65rem);
}
.dmxq_rcxq h3{
  font-family:"PingFang-SC-Bold";
  font-size: .15rem;
  color: #555555;
  padding:.17rem 0 .09rem 0;
}
.dmxq_rcxq_lb{
  text-align: left;
  border-top:.01rem solid #ececec;
  padding-top: .15rem;
  height: calc(100% - .48rem);
}
.dmxq_rcxq_lb > div:nth-child(2n){
  margin-left: .1rem;
}
.dmxq_rcxq_lb_btn{
  display: inline-block;
  text-align: center;
  height: .45rem;
  width: calc(100%/2 - .05rem);
  border-radius: .06rem;
  border:.01rem solid #dbdbdb;
  overflow: hidden;
  /*display: flex;*/
}
.dmxq_rcxq_lb_btn_left{
  display: inline-block;
  float: left;
  width: .27rem;
  background: #ff8e8e;
  box-sizing: border-box;
  padding:.04rem .04rem;
  vertical-align: top;
  height: 100%;
  box-sizing: border-box;
 /* border-bottom-left-radius: .06rem;
  border-top-left-radius: .06rem;*/
}
.dmxq_rcxq_lb_btn_left p{
  font-size: .12rem;
  font-family:"PingFang-SC-Medium";
  color: #ffffff;
  writing-mode:tb-rl;
}
.dmxq_rcxq_lb_btn_right{
  width: calc(100% - .27rem);
  display: inline-block;
  height: 100%;
  overflow: hidden;
  padding-top:.05rem;
}
.dmxq_rcxq_lb_btn_right p{
  font-family: PingFang-SC-Medium;
  font-size: .17rem;
  color: #555555;
  line-height: .18rem;
}
.dmxq_rcxq_lb_btn_right span{
  font-family: PingFang-SC-Medium;
  font-size: .12rem;
  color: #999999;
  vertical-align: top;
}
.dq{
  background: #55b2f5;
}
.zt{
  background: #fe9860;
}
.qj{
  background: #4ee5c3;
}
.kk{
  background: #ff8e8e;
}
.cd{
  background: #ffd763;
}
.wd{
  background: #dbdbdb;
}
.wd p{
  color: #ffffff !important;
}
.dqs{
  border:.01rem solid #55b2f5;
}
.zts{
  border:.01rem solid #fe9860;
}
.qjs{
  border:.01rem solid #4ee5c3;
}
.kks{
  border:.01rem solid #ff8e8e;
}
.cds{
  border:.01rem solid #ffd763;
}
.wds{
  border:.01rem solid #dbdbdb;
}
.wds .dmxq_rcxq_lb_btn_right p,.wds .dmxq_rcxq_lb_btn_right span{
  color: #d2d2d2 !important;
}
</style>
