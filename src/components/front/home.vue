<template>
  <div class="home-content">
      <div class="banner">
        <div class="banner-text common-content">
          <h3>前端视觉之美</h3>
          <h4>专注于高品质的视觉体检以及互联网设计开发，从事网站开发、移动界面设计及开发、软件界面设计、品牌形象策划</h4>
        </div>
      </div>
      <div class="introduce-grid common-content">
        <h3 class="grid-title">前端技术栈</h3>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content grid-content-text">
              <h3 class="grid-text-title">HTML+CSS</h3>
              <p class="grid-text-desc">something about tag and style</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content grid-content-text">
              <h3 class="grid-text-title">HTML+CSS</h3>
              <p class="grid-text-desc">something about tag and style</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content grid-content-text">
              <h3 class="grid-text-title">HTML+CSS</h3>
              <p class="grid-text-desc">something about tag and style</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content grid-content-text">
              <h3 class="grid-text-title">HTML+CSS</h3>
              <p class="grid-text-desc">something about tag and style</p>
            </div>
          </el-col>
        </el-row>
      </div>
  </div>
</template>
<script>
  export default{
    name:'home' ,
    data() {
      return {
        msg:'学习'
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
     .home-content{
       .banner{
         height: 600px;
         background: url("../../assets/images/bg.jpg") no-repeat left top;
         text-aling:center;
         color:#fff;
         .banner-text{
           padding: 180px 15% 30px;
         }
         h3{
           font-size: 40px;
           line-height: 50px;
           margin-bottom: 20px ;
         }
         h4{
           font-size: 22px;
           line-height: 30px;
         }
       }
       .introduce-grid{
         padding: 20px 0;
         .grid-title{
           font-size: 32px;
           line-height: 46px;
           padding-bottom:20px;
           text-align: center;
         }
         .grid-text-title{
           color: #0074D9;
           margin-bottom: 10px;
         }
         .grid-text-desc{
           color: #666;
         }
       }
       .el-row {
         margin-bottom: 20px;
         &:last-child {
            margin-bottom: 0;
          }
       }
       .el-col {
         border-radius: 4px;
       }
       .grid-content-text {
         background: #fff;
         padding: 15px 10px;
         overflow: hidden;
         position: relative;
           &:after{
              transition:background-color 120ms linear;
              background-color:transparent;
              content:"";
              height:100%;
              left:0;
              position:absolute;
              top:0;
              visibility:inherit;
              width:100%
            }
           &:hover:after{
              background-color:rgba(0,0,0,.1);
            }
         }
         .grid-content {
           border-radius: 4px;
           min-height: 36px;
           height:200px;
         }
     }
</style>
