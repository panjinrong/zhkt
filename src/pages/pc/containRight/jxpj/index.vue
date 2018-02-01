<template>
  <div class="jxpj">
    <div class="jxpj_left">
      <v-tree></v-tree>
    </div>
    <div class="jxpj_right">
      <div class="jxpj_right_title">
        <el-breadcrumb separator="|">
          <el-breadcrumb-item>评价记录</el-breadcrumb-item>
          <el-breadcrumb separator=">">
            <!-- <el-breadcrumb-item :to="{ path: '/jxpj/jxpjtea' }">课程评教记录</el-breadcrumb-item> -->
            <el-breadcrumb-item v-for="(list,index) in title" :key="'a'+index"><span @click="linkto(index)">{{list.name}}</span></el-breadcrumb-item>
          </el-breadcrumb>
        </el-breadcrumb>
      </div>
      <div class="jxpj_right_header">
        <router-link to="/jxpj/jxpjtea" :class="{'activess':text == 't'}">教师评学</router-link>
        <router-link to="/jxpj/jxpjstu" :class="{'activess':text == 's'}">学生评学</router-link>
        <v-search></v-search>
      </div>
      <router-view @childInfo="showFun" @childInfos="hideFun"></router-view>
    </div>
  </div>
</template>
<script>
import tree from './jxpj_tree'
import search from './../search'
import bus from '../../eventBus.js'
 export default {
  name: 'jxpj',
  components:{
    'v-tree':tree,
    'v-search':search
  },
  data(){
    return {
      title:[{"name":"课程评学记录","path":"/jxpj/jxpjtea"}],
      num:0,
      text:'s'
    }
  },
  methods:{
   // 显示面包屑3级
    showFun(mes){
      this.text=mes
      this.title.push({"name":"评价详情","path":"/jxpj/studetail"})
    },
    // 隐藏面包屑3级
    hideFun(mes){
      this.text=mes
      // this.title.splice(1,1)
      this.title=[{"name":"课程评学记录","path":"/jxpj/jxpjtea"}]
    },
    linkto(index){
      if(this.text == 't'){
        this.$router.push('/jxpj/jxpjtea'); 
        this.title.splice(1,1)
      }else if(this.text == 's'){
        if(index == 0){
          this.$router.push('/jxpj/jxpjstu'); 
          this.title=[{"name":"课程评学记录","path":"/jxpj/jxpjtea"}]
        }else if(index == 1){
          this.$router.push('/jxpj/studetail');
          this.title.splice(2,1)
        }else{
          this.$router.push('/jxpj/studetail');
          this.title.splice(1,1)
        }
      }
    }
 },
 created(){
    var _this=this;
    bus.$on('breadcrumb',function(mes){
        _this.title.push({"name":"个人详情"})
    })
 }
}
</script>
<style>
.jxpj{
  font-size: .16rem;
  display: flex;
  width: calc(100% - 1.2rem);
  height: 100% ;
  box-sizing: border-box;
}
.jxpj_left{
  width: 2.4rem;
  min-width: 2.3rem;
  height: 100%;
  background: #f7f7f7;
  z-index: -9;
}
.jxpj_right{
  height: 100%;
  width: calc(100% - 2.4rem);
  min-width: 9.47rem;
  overflow: auto;
  padding:0 .14rem;
  box-sizing: border-box;
  position: relative;
}
.jxpj_right_title{
  height: .62rem;
  line-height: .62rem;
}
.jxpj_right_title .el-breadcrumb{
  line-height: .52rem;
}
.jxpj_right_title .el-breadcrumb__item__inner{
  font-size: .14rem;
  font-family: "MicrosoftYaHei-Bold";
  color: #555555;
}
.jxpj_right_header{
  height: .36rem;  
  clear: both;
  border-bottom: .01rem solid #2184c5;
}
.jxpj_right_header a{
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
.jxpj_right_header .router-link-active{
  color: #ffffff !important ;
  background: #2184C5;
  border-radius: .04rem;
}
.jxpj_right_header .activess{
  color: #ffffff !important ;
  background: #2184C5;
  border-radius: .04rem;
}
.el-breadcrumb__item__inner{
  cursor: pointer;
}
</style>
