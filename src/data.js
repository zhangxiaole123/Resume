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
	post:'WEB前端开发',
	phone:'17716767693',
	email:'17716767693@163.com',
	money:'15k-20k',
	city:'深圳',
	year:'3年',
	age:'24',
	imgSrc:'../assets/my.jpg',
	workData:[
		{
			name:'工作经验',
			ProjectData:[
				{
					workYear:'2018/4-至今',
					company:'武汉佰钧成科技有限公司',
					department:'bu8',
					post:'WEB前端开发',
					desp:'负责公司权限控制系统eIam前端开发，同时维护eCmdb系统，持续优化，迭代。并且在用新技术解决了项目中的难点，从学习到交付只用了一周时间。并且用新技术优化了eCmdb部分页面！'
				},
				{
					workYear:'2017/6-2018/4',
					company:'上海贝格计算机数据服务有限公司',
					department:'投研事业部',
					post:'WEB前端开发',
					desp:`负责项目前端部分整体布局，需求讲解。<br>
							负责前端开发环境搭建，编译部署。<br>
							负责编写项目中公用组件的开发，页面开发。<br>
							指导初级员工开发。`
				},
				{
					workYear:'2015/3-2017/4',
					company:'深圳怡源通科技有限公司',
					department:'信息技术部',
					post:'WEB前端开发',
					desp:`
							深圳怡源通科技有限公司是专注于跨境出口的互联网电商公司。我在该公司主要负责:<br>
							1.根据UI设计师提供的设计图，实现一流的Web界面，优化代码并保持在各浏览器下良好的兼容性； <br>
							2. Web前端表现层及与后端交互的架构设计和开发； <br>
							3. JavaScript程序模块开发，通用类库、框架编写； <br>
							4. 配合后台开发人员实现产品界面和功能； <br>
							5. 对完成的页面进行维护和对网站前端性能做相应的优化。
						`
				},
			]
		},
		{
			name:'项目经验',
			ProjectData:[
				{
					workYear:'2018/9-至今',
					company:'武汉佰钧成科技有限公司',
					department:'eCmdb',
					post:'WEB前端开发',
					desp:`
云基础设施配置管理系统，简称eCmdb。该系统涵盖了华为方所有的资产配置，所有资产的关系，模型，查询等功能`
				},
				{
					workYear:'2018/4-至今',
					company:'武汉佰钧成科技有限公司',
					department:'eIam',
					post:'WEB前端开发',
					desp:`
项目总共包括3大系统，组织管理，租户管理和服务管理。
组织管理分为系统管理员和租户管理员，每个管理员可以管理其名下的成员。
租户管理包括用户管理。权限管理等。
服务管理包括api管理和角色管理等。`
				},
				{
					workYear:'2018/2-2018/4',
					company:'上海贝格计算机数据服务有限公司',
					department:'凯丰投资论坛',
					post:'WEB前端开发',
					desp:`
						用作凯丰人员内部投资研究交流。地址tybbs.kffund.cn端口8090
						负责项目前端部分整体布局，需求讲解。
						负责前端开发环境搭建，编译部署。
						负责编写项目中公用组件的开发，页面开发。
						负责单点登录，整体项目权限控制。
						指导初级员工开发。
						`
				},
				{
					workYear:'2017/6-2018/2',
					company:'上海贝格计算机数据服务有限公司',
					department:'广发资讯项目终端',
					post:'WEB前端开发',
					desp:`
						内嵌广发证券操盘手资讯项目，用作投资者浏览最新投资新闻，浏览股市信息，帮助投资者正确投资。地址info.gf.com.cn
						
负责项目前端部分整体布局，需求讲解。
负责前端开发环境搭建，编译部署。
负责编写项目中公用组件的开发，页面开发。
负责单点登录，整体项目权限控制。
负责跟广发证券操盘手终端对接数据。
指导初级员工开发。
						`
				},

			]
		},
	
	],
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
	        type: 'bar',
	        color:"#19A15F"
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
						color:[[0.3,'red'],[0.7,'yellow'],[1,'#fff']],
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