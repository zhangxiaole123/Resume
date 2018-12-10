// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'

import '../static/css/reset.css';
import './assets/scss/color.scss';

Vue.config.productionTip = false
import {Data} from './data.js'

Vue.prototype.$appdata = Data
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{
  	Bus:new Vue()
  },
  components: { App },
  template: '<App/>'
})
