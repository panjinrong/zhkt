<template>
  <div class="dmjl">
    <div class="dmjl_left">
       <div v-show="show"  class="alert_ss_typ">
          <transition name="el-zoom-in-top">
            <div class="transition-box alert_ss_p">
                <p :title="val.name" @click="alert_ss_box(val,index)" v-for="(val,index) in item" :class="{'alert_ss_ative':sum == index}">{{val.name}}</p>
            </div>
          </transition>
          
        </div>
      <v-tree v-on:dmhl-alrt="a"></v-tree>
    </div>
    <div class="dmjl_right">
      <v-table :valuein="valuein"></v-table>
    </div>
  </div>
</template>
 <script>
 import table from './dmjl_table'
 import tree from './dmjl_tree'
 import bus from '../../eventBus.js'
 export default {
  name: 'dmjl',
  components:{
    'v-table':table,
    'v-tree':tree
  },
  data:function(){
    return {
      show:false,
      item:[],
      valuein:'',
      sum:-1,
    }
  },
  methods: {  
        a(val){
          if(val != ''){
            this.show = true;
            this.$axios(COURSES.url+'/cms/zhkt/ssjk?sstj='+val+'').then((res) => {
              if(res.data.code =="40001"){
                    this.item = res.data.content;
              }else{
                this.$message({
                  message: res.data.message,
                  type: 'warning'
                });
              }
            });
          }else{
            this.show = false;
          }
          if(document.getElementsByClassName("active")[0]){
            document.getElementsByClassName("active")[0].classList.remove("active");
          }
          this.sum=-1;
        },
        alert_ss_box(val,index){
            this.sum=index;
            var param ={'id':val.id,'type':val.type}; 
            this.$axios(COURSES.url+'/cms/zhkt/sssjjk?id='+val.id+'&type='+val.type+'').then((res) => {
                  if(res.data.code =="40001"){
                      bus.$emit('Searchboxs',res.data.content);
                      this.valuein = val.name;
                  }else{
                    bus.$emit('Searchboxs',[]);
                  }
                  bus.$emit('dmjl-table-tz',param);
            });
            this.$router.push('/dmjl/swith');
        }
  }
 
}
</script>
<style>
.dmjl{
  font-size: .16rem;
  display: flex;
  width: 100%;
  height: calc(100%);
  box-sizing: border-box;
}
.dmjl_left{
  width: 2.4rem;
  min-width: 2.3rem;
  height: 100%;
  background: #f7f7f7;
  z-index: -9;
}
.dmjl_right{
  height: 100%;
  width: calc(100% - 2.4rem);
  min-width: 9.47rem;
  /*overflow: auto;*/
  padding:0 .14rem;
  box-sizing: border-box;
}
.alert_ss_typ {
  display: flex;
  margin-top: 1.08rem;
  height: calc(100% - 1.68rem);
  position: absolute;
  width: 2.4rem;
  z-index: 1;
  /*border-radius: 4px;*/
  /*border: 1px solid #ebeef5;*/
  background: #f7f7f7;
  overflow: hidden;
  /*box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);*/
  color: #303133;
  overflow-y: auto;
  }
  .transition-box{
  width: 100%;
  padding: 0px .24rem;
  text-align: left;

  }
  .alert_ss_p p{
  padding: 4px 0px;
  color: #555555;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 1.90rem;
  font-size: .14rem;
  }
  .alert_ss_p p:hover{
    color: #2184c5;
  }
  .alert_ss_ative {
    color: #2184c5 !important;
  }
</style>
