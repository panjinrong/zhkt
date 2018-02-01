<template>
	<div class="kjzl">
		<div class="kjzl_ts">
      <img src="../../../assets/images/tz.png"> 
      <h4>去PC端上传课件吧~</h4> 
    </div>
    <div class="kjzl_lb">
      <ul>
        <li>
          <div class="kjzl_lb_xq">
            <div class="kjzl_lb_xq_img">
              <img src="../../../assets/images/word.png">
            </div>
            <div class="kjzl_lb_xq_nr">
              <span><img src="../../../assets/images/open.png"></span>
              <h3>电路基本理论</h3>
              <p>长传时间：2017.09.26 10:30</p>
            </div>
          </div>
          <div class="kjzl_lb_cz">
            <p @click.stop="range()">
              <img src="../../../assets/images/download.png" style="margin-top:.14rem">
              <span>下载</span>
            </p>
            <p>
              <img src="../../../assets/images/cmm.png">
              <span>重命名</span>
            </p>
            <p>
              <img src="../../../assets/images/del.png">
              <span>删除</span>
            </p>
          </div>
        </li>
        <li v-for="(list,index) in data">
          <div class="kjzl_lb_xq">
            <div class="kjzl_lb_xq_img">
              <img src="../../../assets/images/excel.png">
            </div>
            <div class="kjzl_lb_xq_nr">
              <span  @click.stop="showCzXq(index)"><img src="../../../assets/images/open.png"></span>
              <h3>{{list.kcmc}}</h3>
              <p>长传时间：{{list.scsj}}</p>
            </div>
          </div>
          <transition-group name="slide-fade" >
            <div class="kjzl_lb_cz" v-show="showList[index].show" :key="'a'+index">
              <a href="../../../assets/images/download.png" download="w3logo">
                <img src="../../../assets/images/download.png" style="margin-top:.14rem">
                <span>下载</span>
              </a>
              <p @click.stop="rename(index)">
                <img src="../../../assets/images/cmm.png">
                <span>重命名</span>
              </p>
              <p @click.stop="deletedata(index)">
                <img src="../../../assets/images/del.png">
                <span>删除</span>
              </p>
              <!-- <a download="w3logo" :href="require('src')">ss</a> -->
            </div>
          </transition-group>
        </li>
      </ul>
    </div>
    
      <div class="xzjd" v-show="xzjd" @click.stop="closeXzjd()">
      <transition name="myfade">
        <div class="xzjd_circle" v-show="xzjds">
          <i-circle
            :size="89"
            :trail-width="4"
            :stroke-width="5"
            :percent="87"
            stroke-linecap="square"
            stroke-color="#68baf6">
            <div class="xzjd_circle_custom">
                <span>87</span><span>%</span>
                <p>已下载</p>
            </div>
          </i-circle>
          <p>正在下载请耐心等待~</p>
        </div>
    </transition>
      </div>
	</div>
</template>
 <script>
 import { MessageBox } from 'mint-ui';
 export default {
  name: 'kjzl',
  data:function(){
    return {
      data:[
        {"kcmc":"电路基本理论","scsj":"2017.09.26 10:30"},
        {"kcmc":"数据结构","scsj":"2017.11.26 05:30"},
        {"kcmc":"电磁学","scsj":"2017.10.26 02:40"},
        {"kcmc":"面向对象程序设计语言","scsj":"2017.03.26 14:30"}
      ],
      showList:[{"show":false},{"show":false},{"show":false},{"show":false}],
      xzjd:false,
      xzjds:false,
    }
  },
  mounted(){
    // this.data.forEach(function(res,i){
    //   this.showList.puch({"show":false});
    // })
  },
  methods:{
    // 是否显示操作详情（下载，重命名，删除）
    showCzXq(index){
      var _this=this;
      if(_this.showList[index].show==false){
        _this.showList[index].show=true;
      }else{
        _this.showList[index].show=false;
      }
    },
    // 重命名
    rename(index){
      var _this=this;
      MessageBox.prompt('',{message:'请输入姓名'}).then(({ value, action }) => {
        _this.data[index].kcmc=value;
      },() => {

      });
    },
    // 删除课件资料
    deletedata(index){
      var _this=this;
      MessageBox.confirm('确定删除课件?').then(action => {
        console.log(action)
        if(action == 'confirm'){
          console.log(1)
            _this.showList.splice(index,1);
            _this.data.splice(index,1);
        }
      },() => {
      });
    },
    //下载进度
    range(){
      var _this=this;
      _this.xzjd=true;
      _this.xzjds=true;
    },
    closeXzjd(){
      var _this=this;
        _this.xzjds=false;
      setTimeout(() =>{
        _this.xzjd=false;
      },200)
    }

  },
  computed:{
  },
}
</script>
<style>
.kjzl{
    height:calc(100% - .7rem);
    font-size: .16rem;
    /*padding-top: .1rem;*/
    background: #ffffff;
}
.kjzl_ts{
  height:.36rem;
  line-height: .36rem;
  background: #F0F9FF; 
  padding:0 .15rem;
}
.kjzl_ts img{
  width: .15rem;
  height: .15rem;
  vertical-align: top;
  margin-top: .11rem;
}
.kjzl_ts h4{
  display: inline-block;
  font-family: PingFang-SC-Bold;
  font-weight: 700;
  font-size: .13rem;
  color: #55b2f5;
}
.kjzl_lb ul li{
  border-bottom: .01rem solid #ececec;
  padding:0 .15rem;
}
.kjzl_lb_xq{
  display: flex;
  height: .7rem;
  width: 100%;
}
.kjzl_lb_xq > div{
  display: inline-block;
}
.kjzl_lb_xq_img img{
  width: .33rem;
  height: .33rem;
  vertical-align: top;
  margin-top: .18rem;
}
.kjzl_lb_xq_nr{
  width: calc(100% - .33rem);
  padding: .16rem 0 .16rem .12rem;
}
.kjzl_lb_xq_nr h3{
  font-size: .16rem;
  font-family: PingFang-SC-Medium;
  color: #333333;
  height: .2rem;
  line-height: .2rem;
}
.kjzl_lb_xq_nr p{
  font-size: .11rem;
  font-family: PingFang-SC-Medium;
  color: #999999;
  height: .22rem;
  line-height: .22rem;
}
.kjzl_lb_xq_nr > span{
  float: right;
  vertical-align: top;
  display: inline-block;
  height: 100%;
  line-height: 100%;
  padding: .09rem 0 0 .1rem;
} 
.kjzl_lb_xq_nr > span > img{
  width: .15rem;
}
.kjzl_lb_cz {
  height: .43rem;
  line-height: .43rem;
  padding-left: .45rem;
}
.kjzl_lb_cz p,.kjzl_lb_cz a{
  display: inline-block;
  margin-right: .34rem;
}
.kjzl_lb_cz p img,.kjzl_lb_cz a img{
  width: .15rem;
  vertical-align: top;
  margin-top: .13rem;
}
.kjzl_lb_cz p span,.kjzl_lb_cz a span{
  font-family: PingFang-SC-Medium;
  font-size: .14rem;
  color: #999999;
}
.slide-fade-enter-active,.slide-fade-leave-active{
    transition: all .2s ease;
}
.slide-fade-enter,.slide-fade-leave{
  opacity: 0;
  transform: translateY(-10px);
}
.mint-msgbox{
  width: 2.67rem;
  border-radius: .1rem !important;
}
.mint-msgbox-message{
  font-family: PingFang-SC-Medium;
  font-size:.14rem;
  color: #333333;
}
.mint-msgbox-cancel{
  background: #f2f2f2;
}
.mint-msgbox-confirm{
  background: #3da8f5;
  color: white;
}
.mint-msgbox-content{
  padding: 8px 20px;
}
.mint-msgbox-title{
  color: transparent;
  height: .54rem;
  background: url(../../../assets/images/kdelete.png) no-repeat center bottom;
  background-size: .45rem .45rem;
}

.xzjd{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding-top: 50%;
  padding-left: calc(50% - 1.35rem);
  background: rgba(0,0,0,.5);
}
.xzjd_circle{
  width: 2.7rem;
  height: 1.62rem;
  background: #ffffff;
  border-radius: .1rem;
  text-align: center;
}
.xzjd_circle > p{
  font-size: .14rem;
  color: #999999;
}
.xzjd .ivu-chart-circle{
  margin:.22rem 0 .15rem;
}
.xzjd_circle_custom span{
  color: #55b2f5;
}
.xzjd_circle_custom span:nth-child(1){
  font-size: .26rem;
}
.xzjd_circle_custom span:nth-child(2){
  font-size: .13rem;
}
.xzjd_circle_custom p{
  font-size: .1rem;
  color: #555555;
  margin-top: .03rem;
}
.myfade-enter,.myfade-leave{
  opacity: 0;
}
.myfade-enter-active {
  animation: myfade-in .2s;
}
.myfade-leave-active {
  animation: myfade-in .2s reverse;
}
@keyframes myfade-in {
  0% {
    transform: scale(.8);
  }
  100% {
    transform: scale(1);
  }
}
</style>
