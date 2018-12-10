<template>
	<div class="center">
		<div v-for="pitem in $appdata.workData" class="experience" >
			<span class="title">{{pitem.name}}</span>
			<div class="experience-item" v-for="item in pitem.ProjectData">
				<div class="flex textColor">
					<div>{{item.workYear}}</div>
					<div>{{item.company}}</div>
					<div>{{item.department}}</div>
					<div>{{item.post}}</div>
				</div>
				<div class="des">{{item.desp}}</div>
			</div>
		</div>


		
		<div class="experience">
			<span class="title">技能特长</span>
			<div @mouseout="mouseout" ref="centerCanvas" style="width:100%;height: 300px;"></div>
			<div class="switch" @click="changeEcharts">
				<span class="switch-item">柱图</span>
				<span class="switch-item">雷达图</span>
				<span :class="isTrue?'switch-item huankuai act':'switch-item huankuai'">{{isTrue?'雷达图':'柱图'}}</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				option : {},
				isTrue:false,
			}
		},
		watch:{
			isTrue(newValue,oldValue){
				if(newValue){
					this.centerCanvas.setOption(this.$appdata.centerEchartsRandaData,true)
				}else{
					this.centerCanvas.setOption(this.$appdata.centerEchartsBarData,true)
				}
			}
		},
		methods:{
			changeEcharts(){
				this.isTrue = !this.isTrue
			},
			mouseout(){
				// this.$appdata.leftEchartsData.series[0].data[0] = 0
				this.$root.Bus.$emit('changeLeftEcharts',0)
			}
		},
		mounted(){
			this.centerCanvas = this.$echarts.init(this.$refs.centerCanvas)
			this.centerCanvas.setOption(this.$appdata.centerEchartsBarData,true)
			let that = this;
			window.addEventListener('resize',()=>{
				that.centerCanvas.resize()

				if(window.innerWidth <= 768 ){
			       	that.$appdata.smail = true;
			    }else{
			    	that.$appdata.smail = false;
			    }
			})
			this.centerCanvas.on('mouseover',(params)=>{
				if(params.seriesType == 'bar'){
					this.$root.Bus.$emit('changeLeftEcharts',params.value)
					// this.$appdata.leftEchartsData.series[0].data[0] = params.value
				}
			})
			
		}
	}
</script>
<style lang="scss" scoped>
	@import '../assets/scss/color.scss';
	.center{
		margin: 30px 0 0 $leftWidth;
		padding:0 30px;
		min-width: 700px;
	}
	.smail .center{
		margin: 60px 0 0 0;
		overflow: hidden;
	}

	.experience{
		margin-bottom: 20px;
		position: relative;
		/* width: 100%; */
		.title{
			display: inline-block;
			padding: 5px 20px;
			background: $bgColor;
			color:#fff;
			margin-bottom: 10px;
			border-radius: 5px; 
		}
		.textColor{
			color:$textColor;
		}
		.des{
			margin-top: 10px;
			font-size:0.875rem;
		}
		.experience-item{
			margin-bottom:20px;
		}
	}
	.switch{
		width: 120px;
	    position: relative;
	    height: 30px;
	    border: 1px solid $btnBgColor;
	    line-height: 30px;
	    border-radius: 40px;
	    background: #eee;
	    position:absolute;
	    top: 0;right: 0;
	    cursor: pointer;
	    font-size: 14px;
	    .switch-item{
	    	width:48%;
	    	display:inline-block;
	    	text-align: center;
	    }
		.huankuai{
			position: absolute;
			left: 0;
			top:0;
			background:$btnBgColor;
			border-radius:30px;
			height:28px;
			width:52%;
			color:#fff;
			transition: all 0.3s;
			&.act{
				left:43%;
				width:57%;
			}
		}
	}
	
</style>