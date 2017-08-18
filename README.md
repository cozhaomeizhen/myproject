# myblog

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### something about study vue
+ 构建用户界面的 渐进式框架
+ 只关注视图层(view)

### 要点1 响应的数据绑定
  当数据发生改变  -> 自动更新视图
  利用Object.defineProperty中的setter/getter代理数据，监控对数据的操作

### 要点2 组合的视图组件
  ui页面映射为组件树
  划分自检可维护，可重用，可测试

### 虚拟DOM
  运行js的速度是很快的，大良的操作DOM就会很慢。时常在更新数据后悔重新渲染页面，这样造成在没有改变数据的地方也重新渲染了DOM节点，造成了很大程度上的资源浪费
  利用在内存中生成与真实DOM与之对应的数据结构，这个在内存中生成的结构称之为虚拟DOM
  当数据放生变化时，能够只能的计算出重新渲染组件的最小代价并应用到DOM操作上面

### MVVM模式
+ M:Model 数据模型
+ V:view  视图模板
+ VM：view-model 视图模型  vm实例

## 学习提纲
+ 基础语法
  vue 实例   
  模板语法 
    html模板  插值  v-html指令解析成DOM(有安全问题)
    template
    render函数
    createElement(标签名,[数据对象],子元素)  
       子元素为文本或数组



    模板表达式
    字符串模板  tamplate 权重比较高
  指令
    v-bind   :
    v-on     @ 
  计算属性   
  class和style 
  条件和列表渲染 
  事件处理器
  表单控件绑定   
  组件
+ 高级进阶
  vue 插件编写    
  mixin 混合
  过度效果   
  自定义命令 
  vue-router:路由系统的使用
  vueX:状态管理器
+ 构建工具
  nodejs:javascript运行环境   
  webpack 模块管理和打包工具
  vue-cli  脚手架配置