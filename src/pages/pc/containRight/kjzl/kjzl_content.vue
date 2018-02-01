<template>
	<div class="kczi">
         <v-kzjlshu></v-kzjlshu>
    <div class="kczi_right">
        <v-table></v-table>
    </div>
	</div>
</template>
 <script >
 import kzjlshu from './kjzl_shu.vue'
 import table from './kjzlj_table.vue'
  let id = 1000;
 export default {
  components:{
      'v-table':table,'v-kzjlshu':kzjlshu
  },
  data:function(){
    return {
    }
  },
  // watch: {
  //     filterText(val) {
  //       this.$refs.tree2.filter(val);
  //       console.log(this)
  //     }
  // },
  methods:{
      
      
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
     
  }
}
</script>
<style>
.kczi{
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
.kczi_left{
  width: 2.4rem;
  height: 100%;
  background: #f7f7f7;
}
.kczi_right{
  height: 100%;
  /*width: calc(100%);*/
  width: calc(100% - 2.4rem);
  padding: 0 .24rem;
  box-sizing:border-box;
}
.js_content{
  color: #777777;
  font-size: 0.12rem;
  margin:0 .14rem;
}
.js_content .el-tree{
  border:none;
  background: #f7f7f7;
}
/*.kjzl {
    font-size: .16rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
}*/
.search2{
  padding-top: .28rem;
  margin-left: .24rem;
}
.el-input{
  width: 165px;
}
.el-tree-node__content{
  display: flex;
  align-items: center;
}
.el-tree-node__content:hover{
  background:none;
}
.active{
  color:#2184c5;
}
.el-input__icon{
  right: -30px;
  font-size: 18px;
  top: 3px;
}
.el-input__inner{
  border: none;
  background: none;
  border-bottom: 1px solid #E6EAED;
  border-radius: 0px;
}
.Name_cla2{
  height: 0.24rem;
  color: #777777;
  margin: .2rem .24rem .1rem .24rem;
  font-size: .14rem;
  color: #a3abb0;
}
.Name_cla2 p:nth-child(1){
  float: left;
}
.Name_cla2 p:nth-child(2){
  float: right;
}
/*.is-current{
  font-weight: bold;
}*/
/*el-tree-node__content*/
.el-tree-node__expand-icon{
  border:none;
  background-image: url("../../../../assets/images/file.png");
  background-repeat:no-repeat;
  margin-top: 10px;
  width: 20px;
  height: 20px;
}
.is-leaf{
  background-image: none;
  margin-top: 0px;
  width: 0px;
  height: 0px;
}
.el-tree-node__expand-icon.expanded {
  transform: unset;
}
</style>
