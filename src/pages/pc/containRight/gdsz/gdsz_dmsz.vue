<template>
  <div class="dmsz">
    <div class="dmsz_dqsj">
      <h4>当前点名持续时间</h4>
      <p><span>{{second}}</span>秒</p>
    </div>
    <div class="dmsz_set">
     <!--  <input type="number" v-model="minute"><span>分</span>
      <input type="number" v-model="second"> -->
        <el-select v-model="second" placeholder="请选择" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span>秒</span>
    </div>
    <div class="dmsz_btn">
      <button>取消设置</button>
      <button>确认修改</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        minute:0,
        second:30,
        options: [{ value: '10', label: '10'},
           {
          value: '20',
          label: '20'
        }, {
          value: '30',
          label: '30'
        }, {
          value: '40',
          label: '40'
        }, {
          value: '50',
          label: '50'
        }, {
          value: '60',
          label: '60'
        }, {
          value: '70',
          label: '70'
        }, {
          value: '80',
          label: '80'
        }, {
          value: '90',
          label: '90'
        }],
        value: ''
      };
    },
    methods: {
    },
    created(){
      this.$emit('childInfos') // 隐藏面包屑3级
    }
  };
</script>
<style>
.dmsz{
  font-size: .16rem;
}
.dmsz_dqsj h4{
  font-size: .14rem;
  font-family: "MicrosoftYaHei-Bold";
  color: #555555;
  line-height: .5rem;
}
.dmsz_dqsj p{
  font-size: .18rem;
  font-family: "MicrosoftYaHei-Bold";
  color: #2184c5;
}
.dmsz_dqsj p>span{
  font-size: .24rem;
}
.dmsz_set{
  margin-top: .82rem;
}
.dmsz_set input{
  width: 1rem;
  text-align: center;
}
.dmsz_set span{
  margin-left: .1rem;
}
.dmsz_btn{
  margin-top: 3rem ;
  text-align: center;
}
.dmsz_btn button{
  width: 1rem;
  height: .3rem;
  font-size: .14rem;
  font-family: "MicrosoftYaHei";
  border-radius: .15rem;
}
.dmsz_btn button:nth-child(1){
  color: #999999;
  border:.01rem solid #aaaaaa;
  background: #ffffff;
  margin-right: .2rem;
}
.dmsz_btn button:nth-child(2){
  color: #ffffff;
  border:.01rem solid #2184c5;
  background: #2184c5;
  margin-left: .2rem;
}
</style>
