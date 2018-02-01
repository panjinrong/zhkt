<template>
	<div class="table" style="height: 100%;">
    <div class="table_title">
      <el-breadcrumb separator="|">
        <el-breadcrumb-item style="font-weight:bold;font-size: .14rem;" >点名记录</el-breadcrumb-item>
          <el-breadcrumb separator=">">
            <!-- <el-breadcrumb-item  v-for="(value,index) in item" :key="index"><label @click="box_pd_true(index)">{{value.name}}</label></el-breadcrumb-item> -->
                <el-breadcrumb-item  v-for="(value,index) in item" :key="index" style="font-size: .1rem;" :to="{ path:array[index]}" ><label @click="box_dmjl(index)">{{value.name}}</label></el-breadcrumb-item>
          </el-breadcrumb>
      </el-breadcrumb>
    </div>
    <P class="dmjl_title_qh">
      <img :src="img1">
      <span style="color:#555555;font-weight:bold;">{{title_name}}</span>
      <div class="Search_box">
            <el-input v-model="input" placeholder="请输入教师/班级"></el-input><label><img :src="img_ss" @click="Search_boxs"></label>
      </div>
    </P>
    <router-view ref="dmjl_cc" v-on:dmjl-box="bod_cc"></router-view>
	</div>
</template>
<script>
import img1 from '../../../../assets/images/pjsz_name.png'
import img_ss from '../../../../assets/images/tab_ss_dmjl.png'
import bus from '../../eventBus.js'
export default {
props:['valuein'],
  data:function(){
    return {
      img1:img1,
      img_ss:img_ss,
      input:'',
      pd_dao:'',//判断导航是否有值
      title_name:'暂无课程',
      array:['/dmjl/swith','/dmjl/details'],
      item:[
        {name:'课程点名记录'}
      ]
    }
  },
  methods: {
      bod_cc(){  //面包削  name
        this.item.push({
          'name':'课程点名记录详情'
        })
      },
      box_dmjl(index){  //路由连接 切换
          if(index == 0){
              this.item.splice(1,1);
          }
          if(this.pd_dao!= ""){
            this.$axios(COURSES.url+'/cms/zhkt/sssjjk?id='+this.pd_dao.id+'&type='+this.pd_dao.type+'').then((res) => {
                if(res.data.code =="40001"){
                    bus.$emit('Searchboxs',res.data.content);
                }

            });
          }

      },
      Search_boxs(){  //搜索
        // if(this.input != ''){
        //     this.$axios({
        //       method: 'get',
        //       url: './static/dmjl_int.json',
        //       params:{"Search":this.input}
        //     }).then((res) => {
        //         bus.$emit('Searchboxs',res.data);
        //     });
        // }
      }
  },
  watch: {
      valuein(){
          this.title_name = this.valuein;
      }
  },
  created(){  
      
  },
  mounted(){
        var self = this;
        if(document.getElementsByClassName("swith").length == 0){
            this.bod_cc();
        }
        bus.$on('userDefinedEvent',function(msg,msg2){
          self.title_name = msg;
        });
        bus.$on('dmjl-table-tz',function(msg){
          self.pd_dao = msg;
          // self.array = self.array[1]
          self.item.splice(1,1);//清空数组 
        })
        
  }
}
</script>
<style>
.jspj{
  font-size: .16rem;
  display: flex;
  width: 100%;
  height: calc(100% - .53rem);
}
.jspj_left{
  width: 2.4rem;
  height: 100%;
  background: #f7f7f7;
}
.jspj_right{
  height: 100%;
  width: calc(100% - 2.4rem);

}
.table_title{
  height: .52rem;
  line-height: .52rem;
  /*border-bottom: .02rem solid #2184c5;*/
   display: inline;
}
.table_title .el-breadcrumb{
  line-height: .52rem;
}
.dmjl_title_qh{
  font-size: .14rem;
  border-bottom: .02rem solid #2184c5;
  padding-bottom: .1rem;
  line-height: 27px;
}
.dmjl_title_qh img:hover{
  opacity: 0.7;
}
.dmjl_title_qh img{
  margin-left: .14rem;
  margin-right: .1rem;
  vertical-align: sub;

}
.Search_box{
  display: inline-block;
  float: right;
  height: .3rem;
}
.Search_box .el-input{
  width: 2.29rem;
}
.Search_box img{
  /*vertical-align: -moz-middle-with-baseline;*/
  margin-top: 6px;
}
.Search_box label{
  background: #2184c5;
  height: .3rem;
  float: right;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
}
.Search_box input{
  height: .3rem;
  border: 1px solid #2184c5;
  border-radius: 4px 0px 0px 4px;
}
.table .el-breadcrumb__item__inner a:hover,.table .el-breadcrumb__item__inner:hover {
    color: #555555;
    cursor: default;
}
.table_title > .el-breadcrumb > .el-breadcrumb > .el-breadcrumb__item label{
  cursor: pointer;
}
.table_title > .el-breadcrumb > .el-breadcrumb > .el-breadcrumb__item:last-child label{
  cursor: auto;
}
</style>
