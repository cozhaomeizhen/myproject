<template>
	<div id="wrapper">
    <my-header></my-header>
    <router-view class="content"></router-view>
    <my-footer></my-footer>
	</div>
</template>

<script>
  import MyHeader         from './common/MyHeader'
  import MyFooter         from './common/MyFooter'
  import Home            from './home.vue'
  import About            from './About.vue'
  import Works            from './Works.vue'
  import Project          from './Project.vue'
  import Articles         from './Articles.vue'
  import Article          from './article.vue'


   export default {
    data(){
      return {
        msg : '欢迎学习es6'
      }
    },
   	components: {
      MyHeader,
      MyFooter ,
      About,
      Works,
      Project,
      Articles ,
      Article,
      Home
    }
   }


</script>
<style lang="scss" rel="stylesheet/scss" scoped>
 #wrapper{}
</style>
