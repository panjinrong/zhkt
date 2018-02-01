<template>
  <div class="left">
    <div class="left_list">
      <ul>
        <li><router-link to="/jxpj">评价记录</router-link></li>
        <li><router-link to="/kjzl">课件资料</router-link></li>
        <li><router-link to="/dmjl">点名记录</router-link></li>
        <li><router-link to="/pxsz">评价设置</router-link></li>
        <li><router-link to="/gdsz">更多设置</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
 <script>
 export default {
  name: 'left',
  data:function(){
    return {
    }
  },
 
}
</script>
<style>
.left{
  font-size: .16rem;
  display: flex;
  width: 100%;
}
.left_list{
  width: 1.2rem;
  min-width: 1.2rem;
  height: 100%;
  background:#003086;
  padding-top: .1rem;
  box-shadow: -1px 10px 10px rgb(14, 39, 113) inset;
}
.left_list ul{
  padding:0;
}
.left_list ul li{
  height: .4rem;
  line-height: .4rem;
  text-align: center;
}
.left_list ul li a{
  display: block;
  color: rgba(255,255,255,.8);
  font-size: .14rem;
  font-weight: 600;
  font-family: "MicrosoftYaHei-Bold";
  text-decoration: none;
}
.left_list ul li a:hover{
  background: #0F3A88 !important;
  color: #ffffff !important;
}
.left_list .router-link-active{
  background: #0F3A88 !important;
}
</style>
