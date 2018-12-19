import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import About from '../components/about/About'
import Login from '../components/Login'
import Register from '../components/Register'
//二级路由
import Contact from '../components/about/Contact'
import Delivery from '../components/about/Delivery'
import History from '../components/about/History'
import OrderingGuide from '../components/about/OrderingGuide'
//三级路由
import Phone from '../components/about/contact/Phone.vue'
import PersonName from '../components/about/contact/PersonName.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
   
    {
      path: '/',
      name: 'homeLink',
      components:{
        default:Home,
        'OrderingGuide':OrderingGuide,
        'Delivery':Delivery,
        'History':History
      }
    },
    {
      path: '/Home',
      name: 'HomeLink',
      component: Home
    },
    {
      path: '/Login',
      name: 'loginLink',
      component: Login
    },
    {
      path: '/Register',
      name: 'registerLink',
      component: Register
    },
    {
      path: '/menu',
      name: 'menuLink',
      component: Menu
    },
    {
      path: '/Admin',
      name: 'adminLink',
      component: Admin
    },
    {
      path: '/About',
      name: 'aboutLink',
      component: About,
      redirect:'/about/contact',
      children:[
        {
          path:'/about/contact',
          name:'contactLink',
          component:Contact,
          redirect: '/personname',
          children:[
            {path:'/phone',name:'phoneNumber',component:Phone},
            {path:'/personname',name:'personName',component:PersonName}
          ]
        },
        {
          path:'/about/history',
          name:'historyLink',
          component:History
        },
        {
          path:'/about/delivery',
          name:'deliveryLink',
          component:Delivery
        },
        {
          path:'/about/orderingGuide',
          name:'orderingGuideLink',
          component:OrderingGuide
        }
      ]
    },
    {
      path: '*',    
      redirect: '/Login'

    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // return {x:0,y:100}
    // return {selector:'.btn'}//选择器，选中元素当前的位置
    if(savedPosition){//savedPosition只有在浏览器中中触发前进和后退的按钮时候才会被调用
      return savedPosition;
    }
    else{
      return {x:0,y:0}
    }
  }
})
