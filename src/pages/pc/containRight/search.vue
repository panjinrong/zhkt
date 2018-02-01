<template>
<div class="search">
  <!-- <input type="text"> -->
    <div class="search-input">
       <input type="text" name="" placeholder="请输入关键字搜索" v-model="searchMsg">
       <span @click.stop="getSearch()"><img src="../../../assets/images/search2.png"></span>
    </div>
</div>
</template>

<script>
// import bus from '../../eventBus'
  export default {
    props:['type'],
    data() {
      return {
        searchMsg:'',
      }
    },
     methods: {
      getSearch() {
      //   console.log(this.type)
      //   var _this=this;
      //   if(_this.type=='xxmb'){
      //     bus.$emit("setSearchxxmb",_this.searchMsg);
      //   }else if(_this.type=='mbgc'){
      //     bus.$emit("setSearchmbgc",_this.searchMsg);
      //   }else{
      //     bus.$emit("setSearch",_this.searchMsg);
      //   }
      }
    },
  }

</script>

<style scoped>
.search{
  display: inline-block;
  vertical-align: top;
  float: right;
}
.search .search-input{
  font-size: 0;
  position: relative;
  border-radius: .04rem;
  overflow: hidden;
}
.search .search-input input{
  width: 2rem;
  height: .28rem;
  border:.01rem solid #2184c5;
  padding:0 .05rem;
  vertical-align: top;
}
.search .search-input span{
  height: .3rem;
  line-height: .3rem;
  display: inline-block;
  background: #2184c5;
  vertical-align: top;
  padding:.06rem .2rem;
  box-sizing: border-box;
}
</style>