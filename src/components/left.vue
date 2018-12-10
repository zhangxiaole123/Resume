<template>
	<div class="left-div">

		<div v-show="!smail">
			<img :class="smail?'my-img smail-img':'my-img '" src="../assets/my.jpg">

			<h2 class="my-name">{{$appdata.name}}</h2>
			<div><span class="my-info">意向岗位:</span>{{$appdata.post}}</div>
			<div><span class="my-info">意向城市:</span>{{$appdata.city}}</div>
			<div><span class="my-info">期望薪资:</span>{{$appdata.money}}</div>
			<div><span class="my-info">工作经验:</span>{{$appdata.year}}</div>
			<div class="mgt30"><span class="my-info">年龄:</span>{{$appdata.age}}</div>
			<div><span class="my-info">电话:</span>{{$appdata.phone}}</div>
			<div><span class="my-info">邮箱:</span>{{$appdata.email}}</div>
		</div>
		<div v-show="smail" class="flex">
			<img :class="smail?'my-img smail-img':'my-img '" src="../assets/my.jpg">
			<div class="my-name">{{$appdata.name}}</div>
			<div>{{$appdata.post}}</div>
			<div>{{$appdata.phone}}</div>
			<div>{{$appdata.year}}</div>
		</div>

		<div v-show="!smail" :class="canvasValue?'left-canvas':''" ref="leftCanvas" style="width:100%;height:30%;"></div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				canvasValue:0,
				smail:false
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
			// this.setInt = setInterval(()=>{
			// 	this.canvasValue = this.$appdata.leftEchartsData.series[0].data[0]
			// },100)
			let that = this;
			window.addEventListener('resize',()=>{
				that.leftCanvas.resize()
				if(window.innerWidth <= 768 ){
		            that.smail = true;
		        }else{
		            that.smail = false;
		        }
			})
			this.$root.Bus.$on('changeLeftEcharts',(value)=>{
				this.canvasValue=this.$appdata.leftEchartsData.series[0].data[0] = value
			})
		}
	}
</script>
<style scoped lang="scss">
	@import '../assets/scss/color.scss';
	.left-div{
		width: $leftWidth;
		position: fixed;top: 0;left: 0;
		min-width: 200px;
		padding: 20px;
		background: $bgColor;
		color: #fff;
		height:100%;
		font-size:0.875rem;
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
		&.smail-img{
			width:40px;
			height:40px;
			border-radius: 50%;
			margin: -15px 20px;
		}
	}

	.my-info{
		margin-right:15px;
	}
	.smail .left-div{
		width:100%;
		height:50px;
		overflow: hidden;
		.my-name{
			margin: 0;
		}
	}
</style>