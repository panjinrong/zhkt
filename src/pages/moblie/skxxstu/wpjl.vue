<template>
	<div class="wpjlstu">
		<ul>
			<li v-for="(list,index) in 5">
				<div class="wpjlstu_kcmc">
					<h3>第四周  星期二  1~2节</h3>
					<span>2017年9月26日</span>
				</div>
				<div class="wpjlstu_pj">
					<span class="float" @click.stop="linkPf()">评教</span>
				</div>
			</li>
		</ul>
	</div>
</template>
 <script>
 export default {
  name: 'wpjlstu',
  data:function(){
    return {
    }
  },
  methods:{
  	linkPf(){
      var _this=this;
      _this.$router.push({path:'/skxxpfstu'})
  	}
  },
 
}
</script>
<style>
.wpjlstu{
    height:100%;
    font-size: .16rem;
}
.float{
	float: right;
}
.wpjlstu ul li{
	height: .65rem;
	padding:.16rem .15rem;
	box-sizing: border-box;
	border-bottom: .01rem solid #ececec;
	display: flex;
}
.wpjlstu ul li>div{
	display: inline-block;
}
.wpjlstu_kcmc{
	width: calc(100% - .66rem)
}
.wpjlstu_kcmc h3{
	font-family: PingFang-SC-Bold;
	font-weight: 600;
	font-size: .17rem;
	color: #555555;
}
.wpjlstu_kcmc span{
	display: inline-block;
	font-family: PingFang-SC-Medium;
	font-size: .13rem;
	color: #777777;
    vertical-align: top;
    margin-top: -.04rem;
}
.wpjlstu_pj{
	width: .66rem;
	/*height: .27rem*/
}
.wpjlstu_pj > span{
	display: inline-block;
	width: .64rem;
	height: .25rem;
	line-height: .21rem;
	border:.02rem solid #55b2f5;
	border-radius: .06rem;
	text-align: center;
	color: #55b2f5;
	font-size: .15rem;
    margin-top: .04rem;
}
</style>
