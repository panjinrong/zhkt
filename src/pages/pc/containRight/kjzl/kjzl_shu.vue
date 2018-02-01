<template>
  <div class="kczi_left">
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
        pd_price:[],
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
            }, {
              id: 10,
              label: '三级 1-1-2',
              sums:3,
              level:3,
            }]
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
        if(this.filterText != ''&&this.filterText != null){
            this.$refs.tree2.filter(this.filterText);
        }
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      renderContent(h, { node, data, store }) {
        
        return (
          <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
            <span>
              <span>{node.label}</span>
            </span>
            <span>
                {data.sums}
            </span>
          </span>);
      },
      handleNodeClick(data,name,value) {
        if(value.$children.length ==1 ){
            if(value.$el.children[0].classList.length == 1){
                this.pd_price.push(value.$el);
                for(var i=0;i<this.pd_price.length;i++){
                    this.pd_price[i].children[0].classList.remove("active");
                }
                value.$el.children[0].classList.add("active");
                
            }else{
                value.$el.children[0].classList.remove("active");
            }
           
        }
        if(data.level == 1){
            
            if(value.$el.children[0].style["font-weight"] == "bold" && value.$el.className.match("is-expanded")!=null){
                value.$el.children[0].style["font-weight"]="";
            }else{
                value.$el.children[0].style["font-weight"]="bold";
            }
            
       
        }
      },
  },
  created(){
      
  }
 
}
</script>
<style>

</style>
