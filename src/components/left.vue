<template>
	<div class="left-div">
		<img class="my-img" src="../assets/my.jpg"/>
		<h2 class="my-name">{{$appdata.name}}</h2>
		<div><span class="my-info">意向岗位:</span></div>
		<div><span class="my-info">意向城市:</span></div>
		<div><span class="my-info">期望薪资:</span></div>
		<div><span class="my-info">求职类型:</span></div>
		<div class="mgt30"><span class="my-info">年龄:</span></div>
		<div><span class="my-info">电话:</span></div>
		<div><span class="my-info">邮箱:</span></div>

		<div :class="canvasValue?'left-canvas':''" ref="leftCanvas" style="width:100%;height:30%;"></div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				canvasValue:0,
			}
		},
		watch:{
			canvasValue(curVal,oldVal){
				this.leftCanvas.setOption(this.$appdata.leftEchartsData)
			},
		},
		mounted(){
			this.leftCanvas = this.$echarts.init(this.$refs.leftCanvas)
			this.leftCanvas.setOption(this.$appdata.leftEchartsData)
			//动态设置 canvasValue 触发watch
			this.setInt = setInterval(()=>{
				this.canvasValue = this.$appdata.leftEchartsData.series[0].data[0]
			},100)
		}
	}
</script>
<style scoped lang="scss">
	@import '../assets/scss/color.scss';
	.left-div{
		width: $leftWidth;
		position: fixed;top: 0;left: 0;
		min-width: 200px;
		padding: 20px 20px;
		background: green;
		color: #fff;
		height:100%;
		.my-name{
			font-weight: bold;
			font-size: 1.2rem;
			margin: 20px 0 ;
			text-align: center;
		}
		.my-info{
			display: inline-block;
			padding: 5px 0;
			margin-right: 15px;
		}
		.mgt30{
			margin-top: 30px;
		}
		.left-canvas{
			box-shadow: 0 0 5px #333;
		}
	}

	.my-img{
		width: 100px;
		height: 150px;
		display: block;
		margin: 0 auto;
	}
</style>