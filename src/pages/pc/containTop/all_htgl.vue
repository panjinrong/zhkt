<template>
	<div class="allhtgl">
    <div class="allhtgl_list">
      <a v-for="(list,index) in 9">
        <img src="../../../assets/images/yy.png">
        <p class="actives">用户权限管理</p>
      </a>
    </div>
	</div>
</template>
 <script>
 export default {
  name: 'allhtgl',
  data:function(){
    return {  
    }
  },
 
}
</script>
<style>
.allhtgl{
  font-size: .16rem;
  width:100%;
}
.allhtgl_list{
  padding: .06rem .32rem;
}
.allhtgl_list a{
  text-align: center;
  display: inline-block;
  width: calc(100%/6);
  /*height: 1rem;*/
  padding:  .26rem 0;
}
.allhtgl_list a img{
  width: 1rem;
  height: 1rem;
}
.allhtgl_list p{
  display: inline-block;
  font-size: .16rem;
  font-family: "MicrosoftYaHei";
  color: #668ca3;
}
.actives{
  color: #ffffff !important;
  border-radius: .45rem;
  padding:.05rem .07rem;
  background: linear-gradient(to bottom, #3cb8fd, #458af5 100%);
}
</style>
