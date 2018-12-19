import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//export const store= new Vuex.store({})
//在main.js中引用的话    //import  {store} from './store'


//action.js引入
import * as actions from './actions'

//getters.js引入
import * as getters from './getters'


//getters.js引入
import * as mutations from './mutations'
    

export default new Vuex.Store({
    state:{
        // getMenuItems:{},
        MenuItems:{},
        currentUser:null,
        isLogin:false
    },
    getters,
    // getters:{//在computed中获取到这个状态   this.$store.getters.getMenuItems
    //     //获取属性的状态
    //     currentUser:state=>state.currentUser,
    //     isLogin:state=>state.isLogin
    // },
    mutations,
    // mutations:{ //在方法中提交这个方法   this.$store.commit("setMenuItems",data)
    //     //改变属性的状态
    //     setMenuItems(state,data){
    //         state.MenuItems=data;//将获取到的数据放到vuex中的state中的MenuItems中 达到公用的效果
    //     },
    //     removeMenuItems(state,item){//将匹配的对象在MenuItems中删除
    //        state.MenuItems.splice(state.MenuItems.indexOf(item),1);
    //     },
    //     pushToMenuItems(state,item){
    //         state.MenuItems.push(item)
    //     },
        //更改用户的状态信息
        // userStatus(state,user){
        //     if(user){
        //         state.currentUser=user;
        //         state.isLogin=true
        //     }else{

        //         state.currentUser=null;
        //         state.isLogin=false
        //     }
        // }

    // },
    actions
   // actions: {
    //     //应用mutations
    //     setUser({commit},user){
    //         commit("userStatus",user)
    //     }
    // }

})