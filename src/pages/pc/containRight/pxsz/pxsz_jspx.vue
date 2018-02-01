<template>
	<div class="jspx">
      <P><img :src="img1"><span>{{box_name}}</span><el-button type="primary" @click="box_set">评学设置</el-button></P>
      <div v-if="pd_show">
          <el-table :data="tableData6" border style="width: 100%; margin-top: 20px;color: #555555;font-size: 0.14rem;">
              <el-table-column prop="type" label="评学类型" width="180">
              </el-table-column>
              <el-table-column prop="names" label="评学指标">
                    <template slot-scope="scope">
                       <p class="lint_jspx" v-bind:class="{pd_botom:index>0}" v-for="(value,index) in scope.row.names">
                         {{value}}
                       </p>
                    </template>
              </el-table-column>
              
          </el-table>
      </div>
      <div v-else class="jspx_content">
      
          <div style="margin-bottom:.2rem;" v-for="(site,index) in sites">
              
              <el-collapse>
              <el-collapse-item>
              <template slot="title">
              <p class="jspx_set0_p" @click.stop="show_qh(index)"><label>评学类型：</label><span>{{site.name_ktqk}}</span><button @click.stop="deletes(index)">删除类型</button></p>
               </template>
              <el-table 
                      :data="site.tableData"
                      border
                      style="width: 100%;">
                      <el-table-column
                        label="序号"
                        type="index"
                        width="180"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="评学指标"
                        >
                      </el-table-column>
                      <el-table-column
                        label="指标管理"
                        width="150"
                        >
                        <template slot-scope="scope">
                          <el-button class="hove_jspx"  @click="handleClick(scope.$index,site.tableData)" type="text" size="small">删除</el-button>
                          <el-button class="hove_jspx" @click="compile(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
                        </template>
                      </el-table-column>
              </el-table>
              <p class="jspx_set_p" @click="add_serial(index)"><img :src="img_tjtb"><span>添加图标</span></p>
              </el-collapse-item>
              </el-collapse>
          </div>
      </div>
      <v-alert ref="box1" :values='values'  v-on:child-say="listenToMyBoy"></v-alert>
	</div>
</template>
 <script>
import img1 from '../../../../assets/images/pjsz_name.png'
import img_tjtb from '../../../../assets/images/pxsz_tjtb.png'
import alert from './pxsz_alerts'
 export default {
  name: 'jspx',
  components:{
            'v-alert':alert
  },
  data:function(){
    return {
        pd_show:true,
        box_name:'机械制造技术基础',
        img1:img1,
        img_tjtb:img_tjtb,
        values:'',
        pd_index:'',
        pdprice:'',
        tableData6: [{
          type: '12987122',
          names:['王小虎','王小虎2','王小虎','王小虎2'] 
         
        }, {
          type: '12987123',
          names:['王小虎','王小虎3'] 
        }],
        sites:[
             {
              name_ktqk:"课堂情况1",
              tableData: [{
                  name: '上海市普陀区金沙江路 15182 弄',
                 
                }, {
                  name: '上海市普陀区金沙江路 1518 弄',
                 
                }, {
                  name: '上海市普陀区金沙江路 1518 弄',
                  
                }, {
                  name: '上海市普陀区金沙江路 1518 弄',
                 
             }]
            },
            {
              name_ktqk:"课堂情况2",
              tableData: [{
                  name: '上海市普陀区金沙江路 1522182 弄',
                 
                }, {
                  name: '上海市普陀区金沙江路 1518 弄',
                 
                }, {
                  name: '上海市普陀区金沙江路 1518 弄',
                  
                }, {
                  name: '上海市普陀区金沙江路 1518 弄',
                 
             }]
            }
        ],
        
    }
  },
  watch:{

  },
  methods: {  
      box_set(){
        // this.$router.push('/pxsz/jspxset');
          this.pd_show = false;
          this.$emit('boxshow');
      },
      pd_show_indexs(){

        this.pd_show = true;
      },
      add_serial(index){
        this.values = '';
        this.$refs.box1.alert_box();
        this.pd_index = index;
      },
      handleClick(index,rows) {  //删除

        rows.splice(index, 1);

      },
      listenToMyBoy(data){
          if(this.values != ''){
               this.pdprice.name = data;
          }else{
             this.sites[this.pd_index].tableData.push({
              'name':data,
            })
          }
          // this.$message({
          //       message: '添加成功！',
          //       type: 'warning'
          // });
      },
      compile(parse,item){  //编辑
          this.values = item.name;
          this.$refs.box1.alert_box();
          this.pdprice = item;
      },
      deletes(index){
        console.log(1)
        this.sites.splice(index,1)
          // console.log(this.sites[index] = undefined)

      },
      show_qh(index){
         console.log(2)
        this.pd_show2a = index
        // this.$el.children[1].children[index].children[1].style.transition='3s';
        //  console.log(this.$el.children[1].children[index].children[1].style.display='block')
      }
     
  },
  created(){
     
  }
 
}
</script>
<style>
.jspx{
  overflow-y: auto;
  height: calc(100% - .62rem);
}
.hove_jspx{
  font-size:.12rem;
  color:#999999;
}
.hove_jspx:hover{
  color:#2184c5;
}
.jspx_content{
  margin-bottom: .2rem;
}
.jspx .el-table__footer-wrapper thead div,.jspx .el-table__header-wrapper thead div{
  background-color: #fff;
}
.jspx_set0_p{
  margin-top: .06rem;
  font-size: .14rem;
  font-weight: bold;
  color: #555555;
  height: .38rem;
  line-height: .38rem;
  background: #f7f9fd;
}
.jspx_set0_p:hover{
  background: #EBF2F8;
}
.jspx_set0_p label{
  margin-left: .20rem;
}
.jspx_set0_p span{
  color:#2184c5;
}
.jspx_set0_p button{
  float: right;
  border: none;
  color: currentcolor;
  background: none;
  height: .3rem;
  line-height: .4rem;
  margin-top: .02rem;
  margin-right: .20rem;
  border-bottom: 1px dashed #999999;
  color: #999999;
  cursor: pointer;
}
.jspx_set_p{
  text-align: center;
  line-height: .4rem;
  height: .4rem;
  border-right: 1px solid #DFE6EC;
  border-left: 1px solid #DFE6EC;
  border-bottom: 1px solid #DFE6EC;
  cursor: pointer;
  font-size: .14rem;
  color: #999999;
}
.jspx_set_p img{
  vertical-align: middle;
  margin-right: .08rem;
}
.lint_jspx{
  text-align: left;
  text-indent: .1rem;
  font-size: 0.12rem;
  color: #777777;
}
.jspx .el-table th > .cell {
  line-height: 40px;
}
.jspx .cell{
  padding: 0px;
  text-align: center;
  /*height: 100%;*/
  line-height: 40px;
}
.jspx>p:nth-child(1){
  margin-top: .2rem;
}
.jspx>p:nth-child(1) img{
  vertical-align: text-top;
  margin-right: .06rem;
}
.jspx>p:nth-child(1) button{
  float: right;
  padding: .05rem .08rem;
  background: #2184c5;
}
.jspx>p:nth-child(1) span{
  font-weight: bold;
}
.pd_botom{
  border-top: 1px solid rgb(223, 230, 236);
}

.jspx .el-collapse{
  border: none;
}
.jspx .el-collapse-item__header{
  height:.38rem;
  line-height:.38rem;
  padding-left: 0rem;
  background-color:none;
  border-bottom: none;
}
.jspx .el-collapse-item__header__arrow{
  display: none;
}
.jspx .el-collapse-item__content{
  padding: 0rem;
}
.jspx .el-collapse-item__wrap{
  border-bottom:none;
}

</style>
