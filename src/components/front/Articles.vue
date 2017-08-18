<template>
  <div class="articles-container common-content clearfix">
    <div class="articles-type">
      <dl>
          <dt>文章分类</dt>
          <dd><a href="#">HTML+CSS</a></dd>
          <dd><a href="#">vueJs</a></dd>
          <dd><a href="#">react</a></dd>
          <dd><a href="#">angular</a></dd>
          <dd><a href="#">前端安全</a></dd>
          <dd><a href="#">HTTP</a></dd>
      </dl>
    </div>
    <div class="articles-list">
      <ul>
        <li><router-link :to="{ name: 'articles', params: { id: 123 }}" exact>怎么初始化一个vue项目？有路由</router-link><span class="time-span">2017-08-18</span></li>
        <li><a href="#">怎么初始化一个vue项目？</a><span class="time-span">2017-08-18</span></li>
        <li><a href="#">怎么初始化一个vue项目？</a><span class="time-span">2017-08-18</span></li>
        <li><a href="#">怎么初始化一个vue项目？</a><span class="time-span">2017-08-18</span></li>
        <li><a href="#">怎么初始化一个vue项目？</a><span class="time-span">2017-08-18</span></li>
        <li><a href="#">怎么初始化一个vue项目？</a><span class="time-span">2017-08-18</span></li>
        <li><a href="#">怎么初始化一个vue项目？</a><span class="time-span">2017-08-18</span></li>
        <li><a href="#">怎么初始化一个vue项目？</a><span class="time-span">2017-08-18</span></li>
        <li><a href="#">怎么初始化一个vue项目？</a><span class="time-span">2017-08-18</span></li>
      </ul>
      <div class="pageNavigation">
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'articles' ,
    data(){
    return {
      msg : '列表'
    }
  }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .articles-container{
    margin-top:30px;
    overflow:hidden;
    zoom:1;
    padding: 15px;
    background-color:#fff;
    .articles-list{
      padding-right: 300px;
      min-height: 500px;
      text-align:left;
      ul{
        li{
          padding:0 30px;
          line-height: 45px;
          &:hover{
            background-color: #f5f5f5;
           }
           a{
             color: #333;
           }
           .time-span{
             float: right;
             display: inline-block;
           }
        }
      }
      .pageNavigation{
        text-align: center;
        margin-top: 40px;
      }
    }
    .articles-type{
      float: right;
      width: 280px;
      border: 1px solid #ddd;
      min-height:400px;
      dl{
        text-align: left;
        padding-bottom:20px;
        dt{
          height: 40px;
          line-height: 40px;
          background-color: #f5f5f5;
          padding-left: 30px;
          font-size: 22px;
          border-bottom: 1px solid #ddd;
          margin-bottom: 15px;
        }
        dd{
          padding-left: 30px;
          line-height: 40px;
          a{
            color:#333;
            &:hover{
              color:#0074D9;
             }
          }
        }
      }
    }
  }
</style>
