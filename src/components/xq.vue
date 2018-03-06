<template>
	<div class="xq">
<!-- 	{{datas}} -->
		<h2 class="h2lf">{{datas.title}}</h2>
		<div class="xq xx">
			<img class="fl" :src="datas.image" :alt="datas.title">
			<div class="fl">
				<p>作者: <span><a href="">{{datas.author[0]}}</a></span></p>
				<p>出版社: <span>{{datas.publisher}}</span></p>
				<p v-if="datas.publisher">出品方:<span><a href="">{{datas.publisher}}</a></span></p>
				<p v-if="datas.origin_title">原作名:<span>{{datas.origin_title}}</span></p>
				<p v-if="datas.translator[0]">译者:<span><a href="">{{datas.translator[0]}}</a></span></p>
				<p>出版年:<span>{{datas.pubdate}}</span></p>
				<p>页数:<span>{{datas.pages}}</span></p>
				<p>定价:<span>{{datas.price}}</span></p>
				<p>装帧:<span>{{datas.binding}}</span></p>
				<p>ISBN:<span>{{datas.isbn13}}</span></p>
			</div>
			<div class="fr">
				<p>豆瓣评分</p>
				<h2 class="h2lf">{{datas.rating.average}}</h2>
				<p><a href="">{{datas.rating.numRaters}}人评价</a></p>
			</div>
		</div>
		<div class="jj xq">
			<h3>内容简介· · · · · ·</h3>
			<p v-for="a in summary">{{a}}</p>
		</div>
		<div class="jj xq">
			<h3>作者简介· · · · · ·</h3>
			<p v-for="b in author_intro">{{b}}</p>
		</div>
		<div class="jj xq">
			<h3>目录· · · · · ·</h3>
			<p style="text-indent:0;" v-for="c in catalog">{{c}}></p>
			
		</div>
	</div>
</template>
<script>
	export default{
		name:'xq',
		data(){
		return{
			datas:"",
			summary:"",
			author_intro:"",
			catalog:""
		}
		},
		created(){//打开执行函数
			var _this = this;
			let id = this.$route.params.id;//提取数据
			this.$jsonp('https://api.douban.com/v2/book/'+id).then(info =>{
				_this.datas = info;
				_this.summary = info.summary.split("\n");
				_this.author_intro = info.author_intro.split("\n");
				_this.catalog = info.catalog.split("\n");
			})
		}
	}
</script>
<style>
.fr{
	padding-left: 10px;
	float: right;
	width: 100px;
	height: 100px;
	border-left:1px solid #ccc;
}
.jj h3{
	text-align:left;
	color: #42b983;
}
.jj p{
	font-size: 12px;
	width: 100%;
	text-indent:2em;
	text-align: left;
	overflow: hidden;
}
.xq{
	width: 100%;
	margin:0 auto;
	/*border:1px solid red;*/
}
.xx p{
	text-align: left;
	font-size: 12px;
	padding: 2px 0;
	margin:0;
}
.xx p span a{
	text-decoration: none;
	color: #42b983;
}
.xx{
	height: 200px;
}
@media screen and (max-width:411px){
	.xx{
		height: 300px;
	}
	.fr{
		padding-left: 10px;
		margin-top: 30px;
		float: left;
		width: 100px;
		height: 100px;
		border-left:1px solid #ccc;
	}
}
.fl{
	height: 165px;
	margin-right: 10px;
	float: left;
}
.h2lf{
	text-align: left;
}

</style>