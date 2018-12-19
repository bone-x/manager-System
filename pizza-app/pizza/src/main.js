// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from './router/index.js'
import axios from 'axios'
// axios.defaults.baseURL="xxxxx"
Vue.prototype.$axios=axios
Vue.config.productionTip = false


//import  {store} from './store'
//如果store里面不是index.js是store.js则要加上最后一层，index.js不需要，默认会直接找到   import  {store} from './store/store'
import  store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
//2
// new Vue({
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// }).$mount('#app') 



// router.beforeEach((to,from,next)=>{
//   console.log(to)
//  if(to.path=='/Login'||to.path=='/Register'){
//         next();
//     }else{
//       alert("还没有登录,请先登录")

//     }
//   })
//后置钩子
// router.afterEach((to,from)=>{
//     alert("after Each")
// })







