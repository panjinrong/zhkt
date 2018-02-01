<template>
	<div class="bjcy">
  <v-search></v-search>
  <mt-index-list>
    <mt-index-section v-for="(list,index) in data" :index="list.title" v-if="list.list" :key="'index'+index">
      <mt-cell v-for="(item,i) in list.list" title="" :key="'index'+i">
        <div class="bjcy_img"><img src="../../../assets/images/photo1.jpg"></div>
        <div class="bjcy_nr">
          <span>{{item.name}}</span><span v-if="item.bjzw">[{{item.bjzw}}]</span>
          <p>1234567</p>
        </div>
      </mt-cell>
    </mt-index-section>
  </mt-index-list>
	</div>
</template>
 <script>
 import search from './bjcy_search'
 export default {
  name: 'bjcy',
  components:{'v-search':search},
  data:function(){
    return {
      data:[
        {"title":"","list":[{"name":"马丽媛","bjzw":"课代表"},{"name":"潇潇","bjzw":"班长"}]},
        {"title":"A","list":[{"name":"马丽媛","bjzw":""},{"name":"潇潇","bjzw":""}]},
        {"title":"B","list":[{"name":"杨敏","bjzw":""},{"name":"蓬莱","bjzw":""},{"name":"王诗语","bjzw":""}]},
        {"title":"C","list":[{"name":"李璐璐","bjzw":""},{"name":"韦中宝","bjzw":""},{"name":"赵文杰","bjzw":""}]},
        {"title":"D","list":[{"name":"马丽媛","bjzw":""},{"name":"潇潇","bjzw":""}]},
        {"title":"E","list":[{"name":"马丽媛","bjzw":""},{"name":"潇潇","bjzw":""}]},
        {"title":"F","list":[{"name":"马丽媛","bjzw":""},{"name":"潇潇","bjzw":""}]},
        {"title":"G","list":[{"name":"马丽媛","bjzw":""},{"name":"潇潇","bjzw":""}]},
        {"title":"H","list":[{"name":"马丽媛","bjzw":""},{"name":"潇潇","bjzw":""}]},

        // {"title":"G","list":[]},
        // {"title":"H","list":[]},
        {"title":"I","list":[{"name":"马丽媛","bjzw":""},{"name":"潇潇","bjzw":""}]},
        {"title":"J","list":[{"name":"马丽媛","bjzw":""},{"name":"潇潇","bjzw":""}]}
      ],
    }
  },
 
}
</script>
<style>
.bjcy{
    height:100%;
    font-size: .16rem;
    background:#f7f7f7;
}
.bjcy_img{
  width: .36rem;
  height: .36rem;
  border-radius: .03rem;
}
.bjcy_img img{
  width: 100%;
  height: 100%;
  border-radius: .03rem;
}
.bjcy .mint-cell-title{
  display: none;
}
.bjcy_nr{
  margin-left: .12rem;
}
.bjcy_nr span{
  line-height: .2rem;
  font-family: PingFang-SC-Medium;
  font-size:.16rem;
  color: #333333;
}
.bjcy_nr p{
  font-family: PingFang-SC-Medium;
  font-size:.1rem;
  color: #555555;
  margin-top: .02rem;
}
.mint-cell{
  min-height: .55rem;
}
.mint-cell:last-child{
  background-image: linear-gradient(180deg, #ececec, #ececec 50%, transparent 50%);
}
.mint-cell-wrapper{
  background-image: linear-gradient(180deg, #ececec, #ececec 50%, transparent 50%);
  padding:0 .15rem;
}
.mint-indexlist-nav{
  border-left:none;
  background: transparent;
}
.mint-indexlist-content{
  margin-right: 0!important;
}
.mint-indexsection-index{
  padding: .03rem .15rem;
}
</style>
