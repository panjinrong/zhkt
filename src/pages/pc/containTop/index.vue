<template>
  <div class="top">
    <div class="top_logo">
      <img class="top_logo_yh" src="../../../assets/images/yunh.png">
      <el-popover ref="popover5" placement="top" width="884"   trigger="hover" v-model="visible2">
        <v-all></v-all>
      </el-popover>
      <el-button v-popover:popover5></el-button>
    </div>
    <div class="top_right_h3">
      <h3>智慧课堂管理系统</h3>
    </div>
    <div class="top_right_div">
      <img src="../../../assets/images/photo1.jpg">
      <div>
        <p>李莫瞿</p>
        <span>高级管理员</span>
      </div>
      <div class="top_right_div_img">
        <img src="../../../assets/images/dbx.png">
      </div>
    </div>
  </div>
</template>
 <script>
 import all from './all_htgl'
 export default {
  name: 'top',
  components:{'v-all':all},
  data:function(){
    return {
      visible2: false,
    }
  },
 
}
</script>
<style>
.top{
  font-size: .16rem;
  width:100%;
  height:.6rem; 
  display: flex;
}
.top_logo{
  width: 1.2rem;
  font-size: 0;
}
.top_logo_yh{
  width: .67rem;
  height: .35rem;
  margin:.13rem .11rem .12rem .15rem;
}
.top_logo_more{
  width: .18rem;
  height: .15rem;
  margin:.23rem 0;
}
.top_right_h3{
  width: calc(100% - 3.19rem);
}
.top_right_h3 h3{
  font-size: .18rem;
  font-family: MicrosoftYaHei-Bold;
  color: #FFFFFF;
  margin:.22rem 0 .2rem 0;
  padding-left: .21rem;
  border-left: .01rem solid #DBE3F1;
  border-right: .01rem solid #DBE3F1;
}
.top_right_div{
  width: 1.97rem;
  display: flex;
  color: #ffffff;
}
.top_right_div > img{
  width: .37rem;
  height: .37rem;
  border-radius:50%;
  margin:.14rem .1rem .11rem .11rem;
}
.top_right_div div p{
  font-family: MicrosoftYaHei-Bold;
  font-size: .16rem;
  margin:0;
}
.top_right_div div span{
  font-family: MicrosoftYaHei-Bold;
  font-size: .1rem;
  margin:0;
  display: inline-block;
  margin-top: .05rem;
}
.top_right_div div{
  padding: .17rem 0;
  box-sizing: border-box;
  font-size: 0;
}
.top_right_div_img{
  padding:.2rem .31rem .25rem !important;
}
.top_logo .el-button{
  padding:0;
  width: .18rem;
  height: .15rem;
  margin-top: .25rem;
  vertical-align: top;
  border-radius: 0;
  border:none;
  background: url(../../../assets/images/more.png); 
}
</style>
