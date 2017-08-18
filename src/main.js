import Vue       from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './components/front/style/reset.css'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
import router    from './router'
import App       from './App'

Vue.use(ElementUI)
Vue.use(VueFullpage)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
