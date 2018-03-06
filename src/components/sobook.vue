<template>
	<div class="xq">
	<h4>搜索结果:<i>{{id}}</i></h4>
	<ul>
		<li v-for="c in info.books">
			<img :src="c.image" alt="">
			<p><a v-on:click="xq(c.id)">{{c.title}}</a></p>
			<p><span class="pl">{{c.rating.average}}  </span>({{c.rating.numRaters}}人评价)</p>
			<p>{{c.author[0]}}</p>
		</li>
		
	</ul>
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
			setInterval(function(){
				_this.id = _this.$route.params.id;
			},20);

			
		},
		watch:{//观察者模式
			id(){
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