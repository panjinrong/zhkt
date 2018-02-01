<template>
  <div id="index">
      <div class="contain">
        <div class="contain_top">
          <v-containTop></v-containTop>
        </div>
        <div class="contain_content">
          <v-containLeft></v-containLeft>
        </div>
      </div>
  </div>
</template>

<script>
import containLeft from './../containLeft/index'
import containRight from './../containRight/index'
import containTop from './../containTop/index'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  created:function(){
   
  },
  components:{'v-containTop':containTop,'v-containLeft':containLeft,'v-containRight':containRight}
}
</script>
<style scoped>
#index,.contain{
  font-size: .16rem;
  height: 100%;
}
.contain_top{
  height: .6rem;
  background:#003086;  
  box-shadow: 0px 1px 10px #003086;
}
.contain_content{
  height: calc(100% - .6rem);
  display: flex;
}
/*.contain_content_left{
  width: 1.2rem;
  height: 100%;
  background:#003086;
}
.contain_content_right{
  width: calc(100% - 1.2rem);
  height: 100%;
}*/
</style>
