<template>
	<div class="ktxq">
    <div class="ktxq_fl">
  		<router-link to="/ktxqstu/kjzlstu">课件资料</router-link>
      <router-link to="/ktxqstu/dmjlstu">点名记录</router-link>
      <router-link to="/ktxqstu/ktpxstu">课堂评学</router-link>
    </div>
    <router-view></router-view>
	</div>
</template>
 <script>
 export default {
  name: 'ktxq',
  data:function(){
    return {
    }
  },
 
}
</script>
<style>
.ktxq{
    height:100%;
    font-size: .16rem;
    background: #f7f7f7;
}
.ktxq_fl{
  display: flex;
  text-align: center;
  height: .55rem;
  line-height: .55rem;
  background: #ffffff;
  margin-bottom: .15rem;
}
.ktxq_fl a{
  font-family:PingFang-SC-Medium;
  font-size: .17rem;
  font-weight:700;
  color: #999999;
  flex:1;
}
.ktxq .router-link-active{
  font-family: PingFang-SC-Bold;
  color: #55b2f5 !important;
  font-weight:700 !important;
}
</style>
