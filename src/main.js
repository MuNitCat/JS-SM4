// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入iView
// import iView from 'iview'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
// import './index.less'

Vue.use(ViewUI)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
