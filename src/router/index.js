import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/front/index.vue'
import Home from '../components/front/home.vue'
import About from '../components/front/About.vue'
import Project from '../components/front/Project.vue'
import Works from '../components/front/Works.vue'
import Articles from '../components/front/Articles.vue'
import Article from '../components/front/article.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: Index,
      children: [
        {path: 'home',name: 'home',component: Home, meta: {title: '博客首页'}},
        {path: 'about', name: 'about', component: About, meta: {title: '关于我'}},
        {path: 'project', name: 'project', component: Project, meta: {title: '项目经验'}},
        {path: 'Works', name: 'works', component: Works, meta: {title: '工作经验'}},
        {path: 'about', name: 'about', component: About, meta: {title: '个人简介'}},
        {path: 'articles', name: 'articles', component: Articles, meta: {title: '学习笔记'}},
        {path: 'articles/:id', name: 'article', component: Article}
      ]
    },
  ]
})

export default router
