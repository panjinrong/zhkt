<template>
	<div class="kjzls">
    <v-kjzl></v-kjzl>
	</div>
</template>
 <script>
 import { MessageBox } from 'mint-ui';
 import kjzl from './../kjzl/kjzl_stu'
 export default {
  name: 'kjzl',
  components:{'v-kjzl':kjzl},
  data:function(){
    return {
      // data:[
      //   {"kcmc":"电路基本理论","scsj":"2017.09.26 10:30"},
      //   {"kcmc":"数据结构","scsj":"2017.11.26 05:30"},
      //   {"kcmc":"电磁学","scsj":"2017.10.26 02:40"},
      //   {"kcmc":"面向对象程序设计语言","scsj":"2017.03.26 14:30"}
      // ],
      // showList:[{"show":false},{"show":false},{"show":false},{"show":false}],
    }
  },
}
</script>
<style>
.kjzls{
    height:calc(100% - .7rem);
    font-size: .16rem;
    background: #ffffff;
}
</style>
