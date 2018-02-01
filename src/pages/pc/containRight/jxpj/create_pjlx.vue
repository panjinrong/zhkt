<template>
 <transition name="el-fade-in-linear">
	<div class="create" v-show="detail">
    <div class="create_box">
      <div class="create_box_title">
        <h4>评学详情</h4>
        <span @click.stop="close()"><img src="../../../../assets/images/cha.png"></span>
      </div>
      <div class="create_box_main">
        <div class="create_box_main_content">
          <label>评价内容描述：</label>
          <input type="text" name="" v-model="content">
          <p>您还可以输入<a>2</a>个字符~</p>
        </div>
        <div class="create_box_main_btn">
          <button>取消</button>
          <button>确认</button>
        </div>
      </div>
    </div>
	</div>
</transition>
</template>
 <script>
 export default {
  name: 'create',
  data:function(){
    return {
      content:'',
      value1:5,
      value2:4,
      value3:3,
      detail:false
    }
  },
  methods:{
    open(){
      this.detail=true;
    },
    close(){
      this.detail=false;
    }
  }
 
}
</script>
<style>
.create{
  font-size: .16rem;
  position: fixed;
  background: rgba(0,0,0,.5);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 2;
}
.create_box{
  width:8.64rem;
  height:5.96rem; 
  background: #ffffff;
  border-radius: .06rem; 
  margin: 8% auto 0;
  overflow: hidden;
}
.create_box_main{
  height: calc(100% - .44rem);
  padding:2rem 1.7rem 0;
  box-sizing: border-box;
}
.create_box_title{
  height: .44rem;
  line-height: .44rem;
  background:#F6F8F9;
  padding: 0 .18rem 0 .33rem;
}
.create_box_title h4{
  display: inline-block;
  font-family: "MicrosoftYaHei-Bold";
  font-size: .14rem;
  color: #2184C5 ;
}
.create_box_title span{
  float: right;
  display: inline-block;
  padding:0 .15rem;
}
.create_box_title span img{
  width: .1rem;
  height: .1rem;
}
.create_box_main_content{
  margin-bottom: 2.5rem;
}
.create_box_main_content label{
  font-family: "MicrosoftYaHei-Bold";
  font-size: .14rem;
  color: #555555;
}
.create_box_main_content input{
  width: 3.65rem;
  border:none;
  border-bottom: .01rem solid #DCDCDC ;
}
.create_box_main_content p{
  font-family: "Microsoft YaHei";
  font-size: .12rem;
  color: #bbbbbb;
  text-indent: 8em;
}
.create_box_main_btn {
  text-align:center;
}
.create_box_main_btn button{
  width: .9rem ;
  height: .26rem;
  border-radius: .13rem;
  margin: 0 .37rem;
}
.create_box_main_btn button:nth-child(1){
  color: #999999;
  border:.01rem solid #999999;
  background: #ffffff;
}
.create_box_main_btn button:nth-child(2){
  color: #ffffff;
  border:.01rem solid #2184C5;
  background: #2184C5;
}
</style>
