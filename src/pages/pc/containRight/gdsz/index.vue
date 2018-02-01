<template>
  <div class="gdsz">
    <div class="gdsz_title">
      <el-breadcrumb separator="|">
        <el-breadcrumb-item class="disactive">更多设置</el-breadcrumb-item>
        <el-breadcrumb separator=">">
          <el-breadcrumb-item v-for="(list,index) in title" :to="list.path" :key="'a'+index">{{list.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-breadcrumb>
    </div>
    <div class="gdsz_header">
      <router-link to="/gdsz/zxsj" :class="{'link-active':show}">作息时间设置</router-link>
      <router-link to="/gdsz/pjsj">评价时间设置</router-link>
      <router-link to="/gdsz/dmsz">点名设置</router-link>
    </div>
    <router-view @childInfo="showFun" @childInfos="hideFun"></router-view>
  </div>
</template>
 <script>
 export default {
  name: 'gdsz',
  data:function(){
    return {
      show:false,
      settime:false,
      title:[{"name":"作息时间设置","path":"/gdsz/breadcrumb"}]
    }
  },
  methods:{
    // 显示面包屑3级
    showFun(mes){
      if(this.title.length < 2){
      this.title.push({"name":"时间设置"})
      }
    },
    // 隐藏面包屑3级
    hideFun(mes){
      this.title.splice(1,1)
    },
  },                                                                                   
}
</script>
<style>
.gdsz{
  font-size: .16rem;
  width: calc(100% - .24rem);
  height: 100% ;
  box-sizing: border-box;
  padding:0 .14rem;
}
.gdsz_title{
  height: .62rem;
  line-height: .62rem;
}
.gdsz_title .el-breadcrumb{
  line-height: .52rem;
}
.el-breadcrumb__item__inner{
  font-size: .14rem;
  font-family: "MicrosoftYaHei-Bold";
  color: #555555;
}
.gdsz_header{
  height: .36rem;  
  clear: both;
  border-bottom: .01rem solid #2184c5;
}
.gdsz_header a{
  display: inline-block;
  width: 1.05rem;
  height: .32rem;
  font-size: .14rem;
  font-family: "MicrosoftYaHei-Bold";
  color: #666666;
  text-decoration: none;
  line-height: .32rem;
  text-align: center;
}
.gdsz_header .router-link-active,.gdsz_header .link-active{
  color: #ffffff !important ;
  background: #2184C5;
  border-radius: .04rem;
}
/*.el-breadcrumb__item__inner{
  cursor: pointer;
}*/
.disactive .el-breadcrumb__item__inner{

}
.disactive .el-breadcrumb__item__inner:hover{
  color: #666666 !important;
  cursor: text;
}
</style>

