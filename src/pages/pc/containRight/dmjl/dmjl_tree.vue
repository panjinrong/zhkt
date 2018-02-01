<template>
  <div class="dmjl_left">
        <div class="search2">
                    <div class="el-input el-input--suffix"><!---->
                      <input autocomplete="off" placeholder="请输入课程和老师名称" rows="2" suffix-icon="el-icon-date"    validateevent="true" v-model="filterText" suffixicon="el-icon-date" class="el-input__inner" type="text"><!---->
                      <span class="el-input__suffix"><span class="el-input__suffix-inner">
                      <i @click="seek_box" style="cursor: pointer;" class="el-input__icon el-icon-search"></i></span><!----></span><!---->
                    </div>
        </div>
        <div class="Name_cla2">
            <p>分类</p>
            <!-- <p>数量</p> -->
        </div>
        <div class="js_content" style="overflow-y: auto;height: calc(100% - 1.2rem);">
          
            <el-tree
              ref="tree2"
              class="filter-tree"
              :data="data2"
              :props="defaultProps"
              :getCheckedKeys="true"
              :default-expand-all="true"
              :filter-node-method="filterNode"
              @node-click="handleNodeClick"
              :render-content="renderContent">
              >
            </el-tree>
        </div>

  </div>

</template>
 <script>
 import bus from '../../eventBus.js'
var url
var array=[];
var qwe='';
 export default {
  
  data:function(){
    return {
        pd_price:[],
        pd_price2:[],
        filterText: '',
        data2:[],
        defaultProps: {
          children: 'children',
          label: 'value'
        }
     }
  },
  // watch: {
  //   filterText(val) {
  //       this.$refs.tree2.filter(val);
  //       this.pd_show = false;
  //       // this.data2 = this.data2;

  //   }
  // },
  methods: {
      seek_box(){
       this.$emit("dmhl-alrt",this.filterText);
          
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      renderContent(h, { node, data, store }) {
        if(node.label){
            if(node.label.length>=10){ 
            return (
              <span style="flex: 1; display: flex; align-items: center;  justify-content: space-between; font-size: 14px; padding-right: 8px;"> 
              <span>
                <el-tooltip effect="light" placement="top" open-delay='500'>
                <div slot="content">{data.value}<br/></div>
                <span class="pd_length">{node.label.substring(0,9)+'…'}</span>
                </el-tooltip >
              </span>
              <span style="display:none;" class="el-icon-loading" >
              </span>
            </span>
            );
          }else{
            return (
              <span style="flex: 1; display: flex; align-items: center;  justify-content: space-between; font-size: 14px; padding-right: 8px;"> 
                <span>
                  <span>{node.label}</span>
                </span>
                <span style="display:none;" class="el-icon-loading">
                </span>
              </span>
            );
          }
        }else{
               if(node.value.length>=10){
              return (
              <span style="flex: 1; display: flex; align-items: center;  justify-content: space-between; font-size: 14px; padding-right: 8px;"> 
              
              <span>
                <el-tooltip effect="light" placement="top" open-delay="500">

                <div slot="content">{node.value}<br/></div>

                <span class="pd_length">{node.value.substring(0,9)+'…'}</span>
                </el-tooltip >

              </span>
              <span  style="display:none;" class="el-icon-loading">
                  
              </span>
              
            </span>
            );
          }else{
            return (
              <span style="flex: 1; display: flex; align-items: center;  justify-content: space-between; font-size: 14px; padding-right: 8px;"> 
              
              <span>
                <span>{node.label}</span>
              </span>
              <span style="display:none;" class="el-icon-loading">
                  
              </span>
              
            </span>
            );
          }
        }
      },
      // 
      handleNodeClick(data,name,value) {
        // console.log(value.$children)
        // console.log(name.level)
        // console.log(value)
        if(name.level==1){
           bus.$emit('dmjl-table-tz');
        }
        if(name.level==2){
            if(value.$el.children[0].classList.length == 1){
                array=[];
                this.pd_price.push(value.$el);
                for(var i=0;i<this.pd_price.length;i++){
                    if(document.getElementsByClassName("active")[0]){
                      document.getElementsByClassName("active")[0].classList.remove("active");
                    } 
                    this.pd_price[i].children[0].children[1].children[0].classList.remove("active");
                }
               value.$el.children[0].children[1].children[0].classList.add("active");
                // value.$el.children[0].classList.add("active");
                array.push({
                  'id': data.id,
                  'type':data.type
                })
            }
        }else if(name.level==3){
            if(value.$el.children[0].classList.length == 1){
                array=[];
                this.pd_price.push(value.$el);
                for(var i=0;i<this.pd_price.length;i++){
                  if(document.getElementsByClassName("active")[0]){
                      document.getElementsByClassName("active")[0].classList.remove("active");
                  } 
                  this.pd_price[i].children[0].classList.remove("active");
                  value.$el.parentNode.parentNode.childNodes[0].classList.add("active");
                }
                value.$el.children[0].classList.add("active");
                array.push({
                  'id': data.id,
                  'type':data.type
                });
                array.push({
                  'id': name.parent.data.id,
                  'type':name.parent.data.type
                });
            }else{
                value.$el.children[0].classList.remove("active");
                array.splice(1,1);
                
            }
        }
        var param ={'id':name.data.id,'type':name.data.type}; 
        if(name.level==3){
            this.$axios({
              method: 'get',
              url: COURSES.url+'/cms/zhkt/sssjjk',
              // ,"id":name.parent.data.id
              params:{'id':name.data.id,'type':name.data.type}
            }).then((res) => {
               
                  bus.$emit('userDefinedEvent',name.parent.data.value,res.data);
                  bus.$emit('dmjl-tree-switer',name.parent.parent.data.value);
              
            });
            bus.$emit('dmjl-table-tz',param);
        }else if(name.level==2){
            this.$axios({
              method: 'get',
              url: COURSES.url+'/cms/zhkt/sssjjk',
              // ,"id":name.data.id
              params:{'id':name.data.id,'type':name.data.type}
            }).then((res) => {
                  bus.$emit('userDefinedEvent',data.value,res.data);
                  bus.$emit('dmjl-tree-switer',name.parent.data.value);
             });
            bus.$emit('dmjl-table-tz',param);
        }
        if( name.data.children &&  name.data.children[0] == undefined){
          value.$el.children[0].children[1].children[1].style.display = 'block';
          value.$el.children[0].style.cursor = 'wait';
          this.$axios(COURSES.url+'/xxzzjg?id='+name.data.id+'&type='+name.data.type+'').then((res) => {
                      if(res.data.code == "40001"){
                        if(name.data.children){
                          name.data.children = res.data.content;
                        }
                      }
                     
          });
            var t;
            clearTimeout(t)
            t = setTimeout(function (){
                value.$el.children[0].style.cursor = 'pointer';
                value.$el.children[0].children[1].children[1].style.display = 'none';
            }, 1500);
          
        }
        this.$router.push('/dmjl/swith');
      },
  },
  created(){
      this.$axios(COURSES.url+'/xxzzjg?id=0&type=0').then((res) => {
                    if(res.data.code == "40001"){
                        this.data2 = res.data.content;

                    }
                   
        });
  },
  mounted(){
       
  }
 
} 
</script>
<style>
.el-tree >.el-tree-node>.el-tree-node__content>span:nth-child(2){
  font-weight:bold;

}
.js_content{
  color: #777777;
  font-size: 0.12rem;
  margin-left:.14rem;
}
.js_content .el-tree{
  border:none;
  background: #f7f7f7;
}
.dmjl_left{
  width: 2.4rem;
  min-width: 2.3rem;
  height: 100%;
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
}
.el-tree >.el-tree-node>.el-tree-node__content>.el-tree-node__expand-icon{
  background-image: url("../../../../assets/images/file.png");
  background-repeat:no-repeat;
  margin-top: 10px;
  width: 20px;
  height: 20px;
}
/*.el-tree >.el-tree-node>.el-tree-node__children>.el-tree-node>.el-tree-node__content>.el-tree-node__expand-icon{
  background-image: url("../../../../assets/images/file.png");
  background-repeat:no-repeat;
  margin-top: 10px;
  width: 20px;
  height: 20px;
}*/
.is-leaf{
  background-image: none;
  margin-top: 0px;
  width: 0px;
  height: 0px;
}
.el-tree-node__expand-icon.expanded {
  transform: unset;
}
/*.pd_length{
  overflow: hidden;
  width: 1.39rem;
  text-overflow: ellipsis;
  display: block;
}*/
.js_content .el-tree-node{
  display: block !important;
}
</style>
