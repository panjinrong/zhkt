<template>
	<div class="preenter">
    <div class="preenter_empty">
      <h3>您来早啦~</h3>
      <p>待课程结束后再来评价吧！</p>
    </div>
	</div>
</template>
 <script>
 export default {
  name: 'preenter',
  data:function(){
    return {
    }
  },
 
}
</script>
<style>
.preenter{
  height:100%;
  font-size: .16rem;
}
.preenter_empty{
  text-align:center;
  padding-top:1.7rem;
}
.preenter_empty h3{
  font-family: "PingFang-SC-Medium";
  font-size: .15rem;
  color: #333333;
}
.preenter_empty p{
  font-family: "PingFang-SC-Medium";
  font-size: .14rem;
  color: #999999;
  margin-top: .1rem;
}
</style>
