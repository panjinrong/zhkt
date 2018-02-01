<template>
  <div class="pxsz_tree">
        <div class="search2">
                    <div class="el-input el-input--suffix"><!---->
                      <input autocomplete="off" placeholder="请输入课程和老师名称" rows="2" suffix-icon="el-icon-date"    validateevent="true" v-model="filterText" suffixicon="el-icon-date" class="el-input__inner" type="text"><!---->
                      <span class="el-input__suffix"><span class="el-input__suffix-inner">
                      <i @click="seek_box" style="cursor: pointer;" class="el-input__icon el-icon-search"></i></span><!----></span><!---->
                    </div>
                </div>
                <div class="Name_cla2">
                    <p>分类</p>
                    <p>数量</p>
                </div>
         <div class="js_content">

          <el-tree
              ref="tree2"
              class="filter-tree"
              :data="data2"
              :props="defaultProps"
              :getCheckedKeys="true"
              :default-expand-all="pd_cj3"
              :expand-on-click-node="pd_cj"
              :accordion="pd_cj2"
              :filter-node-method="filterNode"
              @node-click="handleNodeClick"
              :render-content="renderContent">
              >
          </el-tree>
    </div>
  </div>
</template>
 <script>
 export default {
  data:function(){
    return {
        pd_cj:true,
        pd_cj2:true,
        pd_cj3:false,
        pd_price:[],
        pd_price2:[],
        filterText: '',
        data2: [{
          id: 1,
          label: '土木工程学院',
          sums:37,
          level:1,
          children: [{
            id: 4,
            label: '二级 1-1',
            sums:20,
            level:2,
            children: [{
              id: 9,
              label: '三级 1-1-1',
              sums:2,
              level:3,
                  children: [{
                  id: 9,
                  label: '三级 1-1-1',
                  sums:2,
                  level:4
                }]
            }, {
              id: 10,
              label: '三级 1-1-2',
              sums:3,
              level:3,
                  children: [{
                  id: 9,
                  label: '三级 1-1-1',
                  sums:2,
                  level:4
                }]
            },
            {
              id: 10,
              label: '三级 1-1-2',
              sums:3,
              level:3,
                  children: [{
                  id: 9,
                  label: '三级 1-1-1',
                  sums:2,
                  level:4
                }]
            }
            ]
          }]
        }, {
          id: 2,
          label: '学院',
          sums:27,
          level:1,
          children: [{
            id: 5,
            label: '二级 3-1',
            sums:3,
            level:2,
            children: [{
              id: 9,
              label: '三级 1-1-1',
              sums:2,
              level:3,
                  children: [{
                  id: 9,
                  label: '三级 1-1-1',
                  sums:2,
                  level:4
                }]
                  }]
          }, {
            id: 6,
            label: '专业',
            sums:20,
            level:2,
          }]
        }, {
          id: 3,
          label: '一级 3',
          sums:37,
          level:1,
          children: [{
            id: 7,
            label: '二级 3-1',
            sums:37,
            level:2,
          }, {
            id: 8,
            label: '二级 3-2',
            sums:37,
            level:2,
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
     }
  },
  methods: {
      seek_box(){
       
            this.$refs.tree2.filter(this.filterText);
      
      },
      filterNode(value, data) {

        if (!value) return true ;
        return data.label.indexOf(value) !== -1;
      },
      renderContent(h, { node, data, store }) {

        
        return (
          <span style="flex: 1; display: flex; align-items: center;  justify-content: space-between; font-size: 14px; padding-right: 8px;"> 
            <span>
              <span>{node.label}</span>
            </span>
            <span>
                {data.sums}
            </span>
          </span>);
      },
      handleNodeClick(data,name,value) {
        // console.log(value.$children)
        // console.log(name.level)
        // console.log(value)
        if(name.level==3){
           this.pd_cj2 = true;
            if(value.$el.children[0].classList.length == 1){

                this.pd_price.push(value.$el);
                for(var i=0;i<this.pd_price.length;i++){
                    this.pd_price[i].children[0].classList.remove("active");
                }
                value.$el.children[0].classList.add("active");

            }
        }else if(name.level==4){
            if(value.$el.children[0].classList.length == 1){
                this.pd_price.push(value.$el);
                for(var i=0;i<this.pd_price.length;i++){
                  console.log(this.pd_price[i].parentNode.children[0].classList.remove("active"))
                  this.pd_price[i].children[0].classList.remove("active");
                  value.$el.parentNode.parentNode.childNodes[0].classList.add("active")
                }
                value.$el.children[0].classList.add("active");
            }else{
                value.$el.children[0].classList.remove("active");
            }

        }else{
          this.pd_cj2 = false;
        }
      },
  },
  created(){
        
  }
 
}
</script>
<style>
.pxsz-tree{
 
 /* box-shadow: 0 15px 25px -4px #003086, inset 0 -3px 4px -1px #003086, 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 3px 4px -1px #003086, inset 0 0 5px 1px #003086, inset 0 20px 30px 0 #003086;*/
}
.pxsz_tree .el-tree >.el-tree-node>.el-tree-node__content>span:nth-child(2){
  font-weight:bold;

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
.pxsz_tree .active{
  color:#2184c5;
}
.pxsz_tree .el-input__icon{
  right: -30px;
  font-size: 18px;
  top: 3px;
}
.pxsz_tree .el-input__inner{
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
}
.pxsz_tree .el-tree >.el-tree-node>.el-tree-node__content>.el-tree-node__expand-icon{
  background-image: url("../../../../assets/images/file.png");
  background-repeat:no-repeat;
  margin-top: 10px;
  width: 20px;
  height: 20px;
}
.pxsz_tree .el-tree >.el-tree-node>.el-tree-node__children>.el-tree-node>.el-tree-node__content>.el-tree-node__expand-icon{
  background-image: url("../../../../assets/images/file.png");
  background-repeat:no-repeat;
  margin-top: 10px;
  width: 20px;
  height: 20px;
}
.pxsz_tree .is-leaf{
  background-image: none;
  margin-top: 0px;
  width: 0px;
  height: 0px;
}
.pxsz_tree .el-tree-node__expand-icon.expanded {
  transform: unset;
}
</style>
