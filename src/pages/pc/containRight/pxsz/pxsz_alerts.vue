<template>
    <div class="Ana_model_alert pxsz_alerts"  v-show="isShow">
     	<div class="alert_centent">
     			<div class="pxsz_title">
					<label>{{ namepri }}</label>
					<span class="btn_bg2" @click="showToggle">X</span>
				</div>
				<div class="pxsz_alt_input">
						<p>评学指标描述：
							<el-input
							  type="textarea"
							  :rows="2"
							  v-model="input2"
							  :maxlength='150'
							  >
							</el-input>
							<span>您还可以输入<label style="color:#2184c5">{{inout_calculate}}</label>个字符~</span>

						</p>
						<p>
							<el-button  @click="showToggle" round plain>取消</el-button>
							<el-button @click="add_data" round plain>确定</el-button>
						</p>

				</div>
     	</div>
    </div>
</template>
<script>	
    export default {
    	props:['values','pdbjsum'],
    	data () {
    		return{
    			isShow:false,
    			namepri:'新建指标',
    			input2:'',
    			inout_calculate:'150'
    		}
    	},
    	computed: {
    		
		},
		watch:{
			input2(){
    			this.inout_calculate = 150 - this.input2.length
    		},
    		values(){
    			this.input2 = this.values;
    		}
		},
        methods: {
      		showToggle(){
      			this.isShow = false;
      		},
      		alert_box(){
      			this.isShow = true;
      		},
      		add_data(){

      			if(this.values != ''){
      				this.isShow = false;
      				this.$emit('child-say',this.input2);
      			}else{
      				if(this.input2 != ''){
	      				this.isShow = false;
	      				this.$emit('child-say',this.input2);
	      				this.values = '';
	      				this.input2 = '';
	      			}else{
	      				this.$message({
				          message: '字段不能为空！',
				          type: 'warning'
				        });
	      			}
      			}
      		}
        },
        created() {
        	// console.log(this.values)
        	// if(this.values != ''){

        	// 		this.input2 = this.values;
        	// }
	    },
	    mounted(){
	    	
	    }

    }
</script>
<style>
 	.Ana_model_alert{
 		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0,0,0,0.5);
		z-index: 888;
		/*display: none;*/
 	}
 	.alert_centent{
 		position: fixed;
		background: #ffffff;
		width: 864px;
		height: 596px; 
		z-index: 889;
		border-radius: 8px;
		margin: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
 	}
 	.pxsz_title{
 		height: .4rem;
 		color: #2184c5;
 		background: #F6F8F9;
 		border-radius: 5px 5px 0 0;
 	}
 	.pxsz_title label{
 		float: left;
		margin-left: .34rem;
		line-height: .4rem;
		font-weight: bold;
 	}
 	.pxsz_title span{
 		float: right;
		line-height: .4rem;
		margin-right: .32rem;
		cursor: pointer;
 	}
 	.pxsz_alt_input {
 		text-align: center;
 	}
 	.pxsz_alt_input p:nth-child(1) span{
 		font-size: .11rem;
		color: #bbbbbb;

		position: absolute;
		display: flex;
		margin-left: 5.5rem;
	}
 	.pxsz_alt_input p:nth-child(1) .el-textarea{
 		width: 3.66rem;
		vertical-align: top;
		max-height: 2rem;
		min-height: 1.5rem !important;;
 	}
 	.pxsz_alt_input p:nth-child(1) .el-textarea textarea{
		max-height: 2rem;
		min-height: 1.5rem !important;
		resize: none;
		font-size: .16rem;
		color: #2184c5;
 	}
	.pxsz_alt_input p:nth-child(1) {
	 	font-size: .14rem;
	 	color: #555555;
	 	margin-top: 1.3rem;
	}
	.pxsz_alt_input p:nth-child(2) {
	 	margin-top: 1.5rem;
	}
	.pxsz_alt_input p:nth-child(2) button{
	 	border-radius: 20px;
		padding: .05rem .3rem;
		color:#999999;
	}
	.pxsz_alt_input p:nth-child(2) button:nth-child(1){
		margin-right: .8rem;
	}
</style>
