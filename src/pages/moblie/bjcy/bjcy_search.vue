<template>
  <div class="bjcy_search">
    <div class="bjcy_search_j" v-if="search">
      <input type="text" name="search" placeholder="搜索" @click="searchShow()">
    </div>
    <div class="bjcy_search_d" v-else>
      <input type="text" name="search" placeholder="搜索" @click="searchShow()">
    </div>
     <!--  <div class="bjcy_search_d" v-else>
          <input type="text" name="search" placeholder="搜索" v-model="searchtext" >
          <span v-show="searchtext.length>0" @click="deletetext()"><img src="../../../assets/images/qk.png"></span>
          <button @click="searchHide()">取消</button>
          <v-mbgc :data="data" v-show="searchtext"></v-mbgc>
      </div> -->
  </div>

</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      search:true,
      searchtext:'',
      data:'',
    }
  },
  // watch:{
  //   searchtext:{
  //     handler:function(curVal,oldVal){
  //         this.searchtext=curVal;
  //         this.getSchoolTarget();
  //         if(curVal===''){
  //           this.getSchoolTarget();
  //         }
  //       }
  //   },
  //   deep:true
  // },
  methods:{
      searchShow() {
        this.search = false;
        // bus.$emit("setSearch",this.search);
      },
      searchHide() {
        this.search = true;
        // bus.$emit("setSearch",this.search);
      },
      deletetext(){
        this.searchtext='';
      },
  },
}
</script>

<style>
.bjcy_search{
  padding:.08rem .15rem;
}
.bjcy_search .bjcy_search_j input{
  width: 100%;
  padding: .03rem .1rem .02rem;
  border:1px solid #eeeeee;
  border-radius: .05rem;
  text-align: center;
  background: url(../../../assets/images/icons.png) no-repeat 40% center;
  background-size: .15rem .15rem;
  background-color: white;
  font-size: .14rem;
  /*box-shadow: 0 0 1px rgba(0,0,0,0.3) inset;*/
}
.bjcy_search .bjcy_search_d input{
  width: 100%;
  padding: .03rem .1rem .02rem;
  border:1px solid #eeeeee;
  border-radius: .05rem;
  background-size: .15rem .15rem;
  background-color: white;
  font-size: .14rem;
  /*box-shadow: 0 0 1px rgba(0,0,0,0.3) inset;*/
}
/* .bjcy_search .bjcy_search_d{
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 min-height: 100%; 
 background: #f7f7f7; 
 z-index: 9;
}
.bjcy_search .bjcy_search_d input{
  width: 82%;
  padding: .6em 2em .3em;
  border:1px solid #eeeeee;
  border-radius: 5px;
  margin-top: .8em;
  background: url(../../../assets/images/icons.png) no-repeat .6em center;
  background-size: 1em 1em;
  background-color: white;
  margin-left: .85em; 
  box-sizing: border-box;
}
.bjcy_search_d >span{
  display: inline-block;
  margin-left: -2em;
  margin-right: 1em;
  vertical-align: top;
  margin-top: .95em;
}
.bjcy_search_d >span >img{
  width: .8em;
  height: .8em;
}
.bjcy_search .bjcy_search_d button{
  font-size: 16px;
  color: #555555;
  background:rgba(0,0,0,0);
  border:none;
  vertical-align: middle;
}*/
</style>

