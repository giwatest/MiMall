import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
//import env from './env'

//根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api';
//设置超时时间
axios.defaults.timeout = 8000;
//根据不同环境变量获取不同的请求地址
//axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    //状态码为10:未登录
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
})

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
