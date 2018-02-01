<template>
  <div class="pjsj">
    <div class="pjsj_content">
      <h4>自定义评教时间设置：</h4>
      <p>学生<span><input type="text" name="" v-model="text"></span>小时内未评教为旷课</p>
      <el-switch v-model="value1" :width="36"  active-color="#13ce66" inactive-color="#ff4949" on-text="" off-text="" @change="changeAuto()"> </el-switch>
    </div>
    <div class="pjsj_edit">
      <h4>暂不设定时间限制：</h4> 
      <el-switch v-model="value2" :width="36"  active-color="#13ce66" inactive-color="#ff4949" on-text="" off-text="" @change="changeFun()"> </el-switch>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
        text:48
      }
    },
    methods: {
      // 自定义设置
      changeAuto(){
        console.log(this.value1)
      },
      // 不设置时间限制
      changeFun(){
        var _this=this;
        if(_this.value2){
          _this.value1=false
        }
        console.log(this.value2)
      }
    },
    created(){
      this.$emit('childInfos') // 隐藏面包屑3级
    }
  }
</script>
<style>
.pjsj{
  font-size: .16rem;
}
.pjsj_content h4,.pjsj_edit h4{
  font-size: .14rem;
  font-family: "MicrosoftYaHei-Bold";
  color: #555555;
  line-height: .5rem;
}
.pjsj_content p{
  font-family: "MicrosoftYaHei-Bold";
  font-size: .14rem;
  color: #999999;
  display: inline-block;
}
.pjsj_content p span{
  color: #2184c5;
  font-size: .16rem;
  font-family: "MicrosoftYaHei";
 /* padding:.02rem .05rem;
  border:.01rem solid #999999;*/
}
.pjsj_content p span input{
  text-align:center;
  width: .2rem;
  color: #2184c5;
  font-size: .16rem;
  font-family: "MicrosoftYaHei";
}
.pjsj_edit{
  margin-top: .2rem;
}
.pjsj_edit h4{
  display: inline-block;
}
</style>
