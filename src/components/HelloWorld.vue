<template>
  <div class="hello">   
  <el-row type="flex" class="row-bg" justify="center">
    <!-- 用elementui作自适应 -->
    <el-col :xs="24" :sm="18" :md="14" :lg="14" :xl="12">
      <ul>
         <li>
              <img :src="book1.image">
              <div>
                 <h5>{{ book1.title }}</h5>
                 <p><span>{{ book1.author[0]}}</span><span>{{ book1.pubdate }}</span><span>{{ book1.publisher }}</span></p>
                 <p class="pp">{{ book1.summary }}</p>
              </div>
              <p><a v-on:click="xq(book1.id)">{{ book1.title }}</a></p>
              <p>{{ book1.author[0] }}</p>
              
         </li>
         <li>
              <img :src="book2.image">
              <div>
                 <h5>{{ book2.title }}</h5>
                 <p><span>{{ book2.author[0]}}</span><span>{{ book2.pubdate }}</span><span>{{ book2.publisher }}</span></p>
                 <p>{{ book2.summary }}</p>
              </div>
              <p><a v-on:click="xq(book2.id)">{{ book2.title }}</a></p>
              <p>{{ book2.author[0] }}</p>
              
         </li>
         <li>
              <img :src="book3.image">
              <div>
                 <h5>{{ book3.title }}</h5>
                 <p><span>{{ book3.author[0]}}</span><span>{{ book3.pubdate }}</span><span>{{ book3.publisher }}</span></p>
                 <p>{{ book3.summary }}</p>
              </div>
              <p><a v-on:click="xq(book3.id)">{{ book3.title }}</a></p>
              <p>{{ book3.author[0] }}</p>
         </li>
         <li>
              <img :src="book4.image">
              <div>
                 <h5>{{ book4.title }}</h5>
                 <p><span>{{ book4.author[0]}}</span><span>{{ book4.pubdate }}</span><span>{{ book4.publisher }}</span></p>
                 <p>{{ book4.summary }}</p>
              </div>
              <p><a v-on:click="xq(book4.id)">{{ book4.title }}</a></p>
              <p>{{ book4.author[0] }}</p>
         </li>
         <li>
              <img :src="book5.image">
              <div>
                 <h5>{{ book5.title }}</h5>
                 <p><span>{{ book5.author[0]}}</span><span>{{ book5.pubdate }}</span><span>{{ book5.publisher }}</span></p>
                 <p>{{ book5.summary }}</p>
              </div>
              <p><a v-on:click="xq(book5.id)">{{ book5.title }}</a></p>
              <p>{{ book5.author[0] }}</p>
         </li>
         <li>
              <img :src="book6.image">
              <div>
                 <h5>{{ book6.title }}</h5>
                 <p><span>{{ book6.author[0]}}</span><span>{{ book6.pubdate }}</span><span>{{ book6.publisher }}</span></p>
                 <p>{{ book6.summary }}</p>
              </div>
              <p><a v-on:click="xq(book6.id)">{{ book6.title }}</a></p>
              <p>{{ book6.author[0] }}</p>
         </li>
         <li>
              <img :src="book7.image">
              <div>
                 <h5>{{ book7.title }}</h5>
                 <p><span>{{ book7.author[0]}}</span><span>{{ book7.pubdate }}</span><span>{{ book7.publisher }}</span></p>
                 <p>{{ book7.summary }}</p>
              </div>
              <p><a v-on:click="xq(book7.id)">{{ book7.title }}</a></p>
              <p>{{ book7.author[0] }}</p>
         </li>
         <li>
              <img :src="book8.image">
              <div>
                 <h5>{{ book8.title }}</h5>
                 <p><span>{{ book8.author[0]}}</span><span>{{ book8.pubdate }}</span><span>{{ book8.publisher }}</span></p>
                 <p>{{ book8.summary }}</p>
              </div>
              <p><a v-on:click="xq(book8.id)">{{ book8.title }}</a></p>
              <p>{{ book8.author[0] }}</p>
         </li>
         <li>
              <img :src="book9.image">
              <div>
                 <h5>{{ book9.title }}</h5>
                 <p><span>{{ book9.author[0]}}</span><span>{{ book9.pubdate }}</span><span>{{ book9.publisher }}</span></p>
                 <p>{{ book9.summary }}</p>
              </div>
              <p><a v-on:click="xq(book9.id)">{{ book9.title }}</a></p>
              <p>{{ book9.author[0] }}</p>
         </li>
         <li>
              <img :src="book10.image">
              <div>
                 <h5>{{ book10.title }}</h5>
                 <p><span>{{ book10.author[0]}}</span><span>{{ book10.pubdate }}</span><span>{{ book10.publisher }}</span></p>
                 <p>{{ book10.summary }}</p>
              </div>
              <p><a v-on:click="xq(book10.id)">{{ book10.title }}</a></p>
              <p>{{ book10.author[0] }}</p>
         </li>
      </ul>
    </el-col>
  </el-row>
  </div>
</template>

<script>



export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'soso书城',
      book1:"",
      book2:"",
      book3:"",
      book4:"",
      book5:"",
      book6:"",
      book7:"",
      book8:"",
      book9:"",
      book10:""
    }
  },
  created:function(){
    var _this = this;
    this.$jsonp('https://api.douban.com/v2/book/27201290').then(info =>{
       _this.book1 = info;
    })
    this.$jsonp('https://api.douban.com/v2/book/27174130').then(info =>{
       _this.book2 = info;
    })
    this.$jsonp('https://api.douban.com/v2/book/27617213').then(info =>{
       _this.book3 = info;
    })
    this.$jsonp('https://api.douban.com/v2/book/27200268').then(info =>{
       _this.book4 = info;
    })
    this.$jsonp('https://api.douban.com/v2/book/27622571').then(info =>{
       _this.book5 = info;
    })
    this.$jsonp('https://api.douban.com/v2/book/27594597').then(info =>{
       _this.book6 = info;
    })
    this.$jsonp('https://api.douban.com/v2/book/27589366').then(info =>{
       _this.book7 = info;
    })
    this.$jsonp('https://api.douban.com/v2/book/27175514').then(info =>{
       _this.book8 = info;
    })
    this.$jsonp('https://api.douban.com/v2/book/27131695').then(info =>{
       _this.book9 = info;
    })
    this.$jsonp('https://api.douban.com/v2/book/26975428').then(info =>{
       _this.book10 = info;
    })
  },
  methods:{//页面跳转
    xq(cid){this.$router.push({path:"/xq/"+cid})}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pp{
/*  display:block;*/
/*  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;*/
}
h5{
  text-align: left;
  margin:0;
  padding: 0;
}
li div p{
  text-overflow: ellipsis; 
  text-align: left;
}
li div{
  text-overflow:ellipsis;
  overflow:hidden;
  z-index: 5;
  position: absolute;
  left:100%;
  top: -10%;
  display: none;
  width: 250px;
  height: 200px;
  padding:5px;
  background:#f6f6f1; 
  border-radius:5px;
  border:1px solid #ccc;

}
img:hover +  div{
 display: block;
}
ul{
  /*border:1px solid blue;*/
  width: 100%;
  height: 500px;
  margin:0px auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  position: relative;
/*  border:1px solid red;*/
  display: inline-block;
  margin: 0 10px;
  margin-top: 20px;
  width: 150px;
  height: 220px;
  float: left;
}
img {
  width: 110px;
  height: 155px;
}
a {
  color: #42b983;
}
p{
  font-size: 10px;
  margin-top: 5px;
}
</style>
