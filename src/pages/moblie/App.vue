<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style type="text/css">
#app{
  font-family:"PingFang-SC-Medium";
}
</style>
