<template>
	<div class="kjzl_right" style="">
    <div class="kjzl_right_logo">
        <v-kjzl></v-kjzl>
    </div>
	</div>
</template>
 <script>
import vueZtree from './kjzl_content.vue'
 export default {
  components:{
      'v-kjzl':vueZtree
  },
  name: 'kjzl_right',
  data:function(){
    return {
    }
  },
 
}
</script>
<style>
.kjzl_right{
  font-size: .16rem;
  width:100%;
  display: flex;
}
.kjzl_right_logo{
  font-size: .16rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  z-index: -9;
}
</style>
