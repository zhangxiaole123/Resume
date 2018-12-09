<template>
	<div class="center">
		<div class="experience">
			<span class="title">工作经验</span>
			<div class="flex textColor">
				<div>2018/4-至今</div>
				<div>武汉佰钧成科技有限公司</div>
				<div>信息技术部</div>
				<div>WEB前端开发</div>
			</div>
			<div class="des">艾斯德斯大撒所大多萨达所大大所多爱仕达大所多</div>
		</div>
		<div class="experience">
			<span class="title">项目经验</span>
			<div class="flex textColor">
				<div>2018/4-至今</div>
				<div>武汉佰钧成科技有限公司</div>
				<div>信息技术部</div>
				<div>WEB前端开发</div>
			</div>
			<div class="des">艾斯德斯大撒所大多萨达所大大所多爱仕达大所多</div>
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
				this.$appdata.leftEchartsData.series[0].data[0] = 0
			}
		},
		mounted(){
			this.centerCanvas = this.$echarts.init(this.$refs.centerCanvas)
			this.centerCanvas.setOption(this.$appdata.centerEchartsBarData,true)
			let that = this;
			window.addEventListener('resize',()=>{
				that.centerCanvas.resize()
			})
			this.centerCanvas.on('mouseover',(params)=>{
				if(params.seriesType == 'bar'){
					this.$appdata.leftEchartsData.series[0].data[0] = params.value
				}
			})
			
		}
	}
</script>
<style lang="scss" scoped>
	@import '../assets/scss/color.scss';
	.center{
		margin: 30px 0 0 $leftWidth;
		padding:0 20px;
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
		}
	}
	.switch{
		width: 120px;
	    position: relative;
	    height: 30px;
	    border: 1px solid #aaa;
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