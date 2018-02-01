<template>
	<div class="wpjl">
		<ul>
			<li v-for="(list,index) in 5">
				<div class="wpjl_kcmc">
					<h3>计算机科学基础</h3>
					<span class="float">未评学</span>
					<a>2017年9月26日</a>
				</div>
				<div class="wpjl_time">
					<a>第四周  星期二  1~2节</a>
					<span class="float" @click.stop="linkPf()">评学</span>
				</div>

			</li>
		</ul>
	</div>
</template>
 <script>
 export default {
  name: 'wpjl',
  data:function(){
    return {
    }
  },
  methods:{
  	linkPf(){
      var _this=this;
      _this.$router.push({path:'/skxxpf'})
  	}
  },
 
}
</script>
<style>
.wpjl{
    height:100%;
    font-size: .16rem;
}
.float{
	float: right;
}
.wpjl ul li{
	height: 1rem;
	padding:.17rem .15rem .1rem;
	box-sizing: border-box;
	border-bottom: .01rem solid #ececec;
}
.wpjl_kcmc h3{
	font-family: PingFang-SC-Bold;
	font-weight: 600;
	font-size: .17rem;
	color: #555555;
}
.wpjl_kcmc > span{
	font-family: PingFang-SC-Medium;
	font-size: .13rem;
	color: #999999;
    margin-top: -.22rem;
}
.wpjl_kcmc a,.wpjl_time a{
	font-family: PingFang-SC-Medium;
	font-size: .13rem;
	color: #777777;
}
.wpjl_time > span{
	display: inline-block;
	width: .64rem;
	height: .25rem;
	line-height: .21rem;
	border:.02rem solid #55b2f5;
	border-radius: .06rem;
	text-align: center;
	color: #55b2f5;
	font-size: .15rem
}
</style>
