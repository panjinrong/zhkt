<template>
	<div class="right" style="display:flex;">
    <v-pxszshu></v-pxszshu>
    <div class="pxsz_right">
      <div class="pxsz_right_title">
        <el-breadcrumb separator="|">
           <el-breadcrumb-item style="font-weight: bold;line-height: .52rem;" >评价设置</el-breadcrumb-item>
          <el-breadcrumb separator=">">
            <el-breadcrumb-item  v-for="(value,index) in item" :key="index"><label @click="box_pd_true(index,$event)">{{value.name}}</label></el-breadcrumb-item>
            <!-- <el-breadcrumb-item :to="{ path:'/jxpj/jxpjdetail'}">评教详情</el-breadcrumb-item> -->
          </el-breadcrumb>
        </el-breadcrumb>
      </div>
      <div class="pxsz_right_header"> 
        <router-link to="/pxsz/jspx"><label @click="box_qh_router($event)">教师评学</label></router-link>
        <router-link to="/pxsz/xspx"><label @click="box_qh_router($event)">学生评教</label></router-link>
        <!-- <v-search></v-search> -->
      </div>
      <router-view ref="bz1" v-on:boxshow="box_all"></router-view>
    </div>

	</div>
</template>
 <script>
 import pxszshu from './pxsz_shu.vue'
 export default {
  name: 'right',
  components:{
     'v-pxszshu':pxszshu
  },
  data:function(){
    return {
      item:[
        {name:'课程评学'}
      ],
      // jspx_name:'教师评学',
      // xspx_name:'学生评教'
    }
  },
  created(){
       
  },
  methods:{
      box_pd_true(index,ev){
        if(index==0){
            this.item.splice(1,1);
            this.$refs.bz1.pd_show_indexs();
            // ev.target.style.cursor = "default";
        }
      },
      box_all(){
        if(this.item.length == 1){
          if(document.getElementsByClassName("router-link-exact-active")[0].innerText == "教师评学"){
            this.item.push({
              'name':'课程评学设置'
            });
          }else{
            this.item.push({
              'name':'课程评教设置'
            });
          }
        }
      },
      box_qh_router(event){
            // console.log(event.target);
            if(event.currentTarget.parentElement.attributes.class.value==""){
             
                if(event.explicitOriginalTarget.textContent=="教师评学"){
                  this.item[0].name = '课程评学';
                }else{
                  this.item[0].name = '课程评教';
                }
                this.item.splice(1,1);
            }
      }
  },
  mounted(){
        if(document.getElementsByClassName("router-link-exact-active")[0].innerText == "教师评学"){
            this.item[0].name = '课程评学';
        }else{
             this.item[0].name = '课程评教';
        }
  }
}
</script>
<style>
.right{
  font-size: .16rem;
  width:100%;
}
.right_header{
  height: .52rem;
  border-bottom: .01rem solid #2184C5;
}
.right_header a{
  display: inline-block;
  font-size: .16rem;
  font-family: MicrosoftYaHei-Bold;
  color: #666666;
  width: 1.05rem;
  height: .32rem;
  line-height: .32rem;
  text-align: center;
  border-radius: .04rem;
  text-decoration: none;
  margin:.16rem .08rem .05rem .24rem;
}
.right_header .router-link-active{
  background: #2184C5 !important;
  color: #ffffff !important;
}
.jxpj{
  font-size: .16rem;
  display: flex;
  width: 100%;
  height: 100% ;
  box-sizing: border-box;
}
.pxsz_left{
  width: 2.4rem;
  min-width: 2.3rem;
  height: 100%;
  background: #f7f7f7;
}
.pxsz_right{
  height: 100%;
  width: calc(100% - 2.4rem);
  min-width: 9.47rem;
  /*overflow: auto;*/
  padding:0 .14rem;
  box-sizing: border-box;
}
.pxsz_right_title{
  height: .62rem;
  line-height: .62rem;
}
.right .pxsz_right_title .el-breadcrumb{
  line-height: .52rem;
}
.right .el-breadcrumb__item__inner{
  font-size: .14rem;
  font-family: "MicrosoftYaHei-Bold";
  color: #555555;
  line-height: 10px;
  cursor: default;
}
.pxsz_right_header{
  height: .36rem;  
  clear: both;
  border-bottom: .01rem solid #2184c5;
}
.pxsz_right_header a{
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
.pxsz_right_header .router-link-active{
  color: #ffffff !important ;
  background: #2184C5;
  border-radius: .04rem;
}
.right .el-breadcrumb__item label{
  font-size: .1rem;
}
.pxsz_right_title > .el-breadcrumb > .el-breadcrumb > .el-breadcrumb__item label{
  cursor: pointer;
}
.pxsz_right_title > .el-breadcrumb > .el-breadcrumb > .el-breadcrumb__item:last-child label{
  cursor: auto;
}
</style>
