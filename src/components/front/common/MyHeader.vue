<template>
	<div id="header">
    <div class="header-nav common-content clearfix">
      <h1 class="logo"><i class="el-icon-menu icon-logo"></i><span>大前端</span></h1>
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-header" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><router-link to='/'>首页</router-link></el-menu-item>
        <el-menu-item index="5"><router-link to='/articles'>技术文章</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to='/about'>个人简介</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to='/project'>项目经验</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to='/Works'>工作经验</router-link></el-menu-item>
      </el-menu>
    </div>
	</div>
</template>
<script>
	export default{
		name: 'myheader',
		 data() {
	      return {
	        activeIndex: '1',
	        activeIndex2: '1'
	      }
	    },
	    methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
#header {
  background-color: #324157;
  .header-nav {
    .logo {
      float: left;
      color: #fff;
      font-size: 22px;
      line-height: 60px;
      span{
        margin-left:8px;
        font-size: 16px;
      }
    }
    .el-menu-header {
      float: right;
    }
  }
}
</style>
