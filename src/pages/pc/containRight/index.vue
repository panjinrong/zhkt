<template>
	<div class="right">
    <div class="right_logo">
  <!--   <v-kjzl></v-kjzl>
    <v-gdsz></v-gdsz> -->
      课件资料
      更多评价
    </div>
	</div>
</template>
 <script>
 import kjzl from './kjzl/index'
 import gdsz from './gdsz/index'
 export default {
  name: 'right',
  components:{'v-kjzl':kjzl,'v-gdsz':gdsz},
  data:function(){
    return {
    }
  },
 
}
</script>
<style>
.right{
  font-size: .16rem;
  width:100%;
}
</style>
