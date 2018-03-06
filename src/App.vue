<template>
  
  <div id="app">
    <div class="h">
      <h1><a href="">{{ msg }}</a></h1>
      <h2>豆瓣读书
        <input type="text" class="inp1" v-model="sobook" placeholder="书名、作者、ISBN">
        <input type="submit" class="inp2" name="" v-on:click="book" value="搜索"></h2>
    </div>
    <router-view/>
     <!-- 这是外部引入 -->
     <el-row :xs="4" class="fool">
      <el-col :span="12" :xs="24" style="color:#999;float:left;">© 2005－2018 douban.com, all rights reserved 北京豆网科技有限公司</el-col>
      <el-col :span="12" :xs="24" style="float:left;" class="span">   
          <span>关于豆瓣</span>
          <span> · 在豆瓣工作 </span>
          <span> · 联系我们 </span>
          <span> · 免责声明  </span>
          <span> · 帮助中心 </span>
          <span> · 图书馆合作 </span>
          <span> · 移动应用 </span>
          <span> · 豆瓣广告 </span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'soso书城',
      sobook:''
    }
  },
  methods:{//页面跳转
    book(){this.$router.push({path:"/sobook/"+this.sobook})}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.inp1{
  outline:0;
  padding-left: 10px;
  width: 300px;
  height: 1.5em;
  margin-left: 20px;
  vertical-align:middle;
  /*用垂直居中的方式可以让input对齐*/
}

@media screen and (max-width:413px){
  .inp1{
  outline:0;
  padding-left: 5px;
  width: 189px;
  height: 1.5em;
  margin-left: 10px;
  vertical-align:middle;
  /*用垂直居中的方式可以让input对齐*/
  }
}

.inp2{
  outline:0;
  color: #fff;
  background: #9f9d94;
  border:0;
  height: 2em;
  padding:5px;
  margin-left: -10px;
  vertical-align:middle;
}
h1, h2 {
  color: #614e3c;
  font-weight: normal;
}
h1 a{
  color: inherit;
  text-decoration: none;
}
ol{
  list-style-type: none;
  padding: 0;
}
.span{  
  color: #42b983;
}
.fool{
  font-size: 10px;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px dashed #ccc;
}
.h{
 /* width: 900px;*/
  margin:0px auto;
}

</style>
