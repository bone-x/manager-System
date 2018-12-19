<template>
    <Header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">       
            <a class="py-2" href="#">
             <img src="./../assets/house.png" alt="">
            </a>
            <a href='#' class='navbar-brand'>我的管理系统</a>
            <ul class='navbar-nav'>
                <li><router-link to='/' class='nav-link'>主页</router-link></li>
                <li><router-link :to='{ name: "menuLink", params: { userId: 123 }}' class='nav-link'>菜单</router-link></li>
                <li><router-link :to='{name:"adminLink"}' class='nav-link'>管理</router-link></li>
                <li><router-link :to='{name:"aboutLink"}' class='nav-link'>关于我们</router-link></li>
            </ul> 
            <ul class='navbar-nav ml-auto'>
                <li><router-link :to='{name:"loginLink"}' class='nav-link' v-show="!isLogin">登录</router-link></li>
                
                <li class="nav-link">
                    {{currentUser}}
                </li>
                
                 <li><router-link :to='{name:"loginLink"}' class='nav-link' v-show="isLogin">【退出】</router-link></li>

                <li><router-link :to='{name:"registerLink"}' class='nav-link' v-show="!isLogin">注册</router-link></li>
            </ul>   
        </nav> 
        
    </Header>
</template>
<script>
import { mapGetters } from 'vuex'
    export default{
        data(){
            return{

            }
        },
        computed:{
            // currentUser(){
            //     return this.$store.getters.currentUser//拿到currentUser状态
            // },
            //  isLogin(){
            //     return this.$store.getters.isLogin//拿到isLogin状态
            // }
             ...mapGetters([
                    'currentUser',
                    'isLogin'
                ])
        }
    }
</script>
<style>
    /* ul,li,div{padding:0;margin:0}
    li{list-style: none;}
    a{text-decoration-line: none;display:block;}
    nav ul{width:200px;text-align:center;}
    nav ul li{line-height:50px;}
    .router-link-active{background:#aaa;color:#fff;} */
</style>

