import './assets/scss/color.scss';

let data = [
	{name:'JavaScript',value:'90'},
	{name:'Vue',value:'90'},
	{name:'React',value:'87'},
	{name:'JQuery/Zepto',value:'90'},
	{name:'HTML5/CSS3',value:'90'},
	{name:'Sass/Less',value:'85'},
	{name:'Git/Svn',value:'83'},
	{name:'Element',value:'89'},
	{name:'BootStrap',value:'89'},
	{name:'Webpack/Gulp',value:'85'},
]
let xAxisData=[] ;
data.map(item=>{
	xAxisData.push(item.name)
})
let seriesData=[] ;
data.map(item=>{
	seriesData.push(item.value)
})
let randaData = [];
data.map(item=>{
	randaData.push({
		name:item.name,
		max:100
	})
})


let Data = {
	name:'张小乐',
	imgSrc:'../assets/my.jpg',
	centerEchartsBarData:{
		tooltip:{},
		title:{
			text:'技能',
			left:'center'
		},
		grid:{
			bottom:80
		},
	    xAxis: {
	        type: 'category',
	        data: xAxisData,
	        axisTick:{
	        	alignWithLabel:true,
	        },
	        axisLabel:{
	        	interval:0,
	        	rotate:-45
	        }
	    },
	    yAxis: {
	        type: 'value',

	    },
	    series: [{
	        data: seriesData,
	        type: 'bar'
	    }]
	},
	centerEchartsRandaData:{
	    title:{
			text:'技能',
			left:'center'
		},
	    radar: {
	        name: {
	            textStyle: {
	                color: '#fff',
	                backgroundColor: '#999',
	                borderRadius: 3,
	                padding: [3, 5]
	           }
	        },
	        // triggerEvent: true,
	        radius:'60%',
	        indicator:randaData,
	        center:['50%','55%']
	    },
	    series: [{
	        type: 'radar',
	        data :[{value:seriesData}]
	    }]

	},

	leftEchartsData:{

		series: [
			{
				type: 'gauge',
				detail: {formatter:'{value}'},
				data: [0],
				center: ["50%", "55%"],
				detail:{
					offsetCenter:[0 ,'75%']
				},
				axisLine:{
					lineStyle:{
						color:[[0.3,'red'],[0.7,'yellow'],[1,'#0080ff']],
						width:10,

					}
				},
				splitLine:{
					show:false,
					length:-23,
					
				},
				axisTick:{
					show:false 
				}
			}
		]
	}
}
export {Data}