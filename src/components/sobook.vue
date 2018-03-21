<template>
	<div class="xq">
	<el-row type="flex" class="row-bg" justify="center">
		<el-col :xs="24" :sm="16" :md="13" :lg="10" :xl="8">
		<h4>搜索结果:<i>{{id}}</i></h4>	
		<ul>
			<li v-for="c in info.books">
				<img :src="c.image" alt="">
				<p><a v-on:click="xq(c.id)">{{c.title}}</a></p>
				<p>
					<span class="pl">{{c.rating.average}} </span>
					<el-rate
					v-model="c.rating.average/2"
					disabled
					show-score
					text-color="#ff9900"
					:score-template="c.rating.average">
					<!--  -->
				</el-rate>
				({{c.rating.numRaters}}人评价)
			</p>
			<p>{{c.author[0]}}</p>
		</li>	
		</ul>
		</el-col>
	</el-row>
	</div>
</template>

<script>
	export default {
		name:'sobook',
		data(){
			return{
				info:'',
				id:''
			}
		},
		created(){

			let _this = this;
			setInterval(function(){//计时器刷新input传过来的id
				_this.id = _this.$route.params.id;
			},20);

			
		},
		watch:{//观察者模式
			id(){//如果id改变就执行下面代码
			var _this = this;
			let id = this.$route.params.id;
			console.log(id);
			this.$jsonp('https://api.douban.com/v2/book/search?q='+id).then(info =>{
				_this.info = info;
			}).catch(err=>{console.log(err)})
			}
		},
		methods:{//页面跳转
			xq(cid){this.$router.push({path:"/xq/"+cid})}
		}
	}
</script>
<style>
.pl{
	font-size: 24px;
	color: #999;
}
a{
	color: #42b983;
}
.xq ul li p{
	margin:0;
	padding:0;
}
.xq ul li{
	margin-bottom: 20px;
	padding-bottom: 10px;
	border-bottom: 1px dashed #ccc;
	text-align: left;
	list-style: none;
}
.xq ul{
	padding: 0;
	width: 100%;
}
.xq h4{
	text-align: left;
}
.xq{
	width: 100%;
	margin:0 auto;
}
</style>