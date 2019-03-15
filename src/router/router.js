import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";
import {Toast} from "vant"

Vue.use(Router);


const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'ShoppingMall',
            component: resolve => { require(['@/views/ShoppingMall.vue'], resolve) }
        },
        {
            path: '/goods',
            name: 'Goods',
            component: resolve => { require(['@/views/Goods.vue'], resolve) }
        },
        {
            path: '/categorylist',
            name: 'Categorylist',
            component: resolve => { require(['@/views/Categorylist.vue'], resolve) }
        },
        {
            path: '/center',
            name: 'Center',
            meta: {
                requireAuth: true
            },
            component: resolve => { require(['@/views/Center.vue'], resolve) }
        }, {
            path: '/register',
            name: 'Register',
            component: resolve => { require(['@/views/Register.vue'], resolve) }
        },
        , {
            path: '/login',
            name: 'Login',
            component: resolve => { require(['@/views/Login.vue'], resolve) }
        },
        , {
            path: '/setting',
            name: 'Setting',
            component: resolve => { require(['@/views/Setting.vue'], resolve) }
        },
    ]
});

let arr = ['Setting','Login','Register','Goods'];

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    for(var i= 0; i<arr.length;i++){
        if(to.name == arr[i]){
            store.commit('changeShow',false);
            break;
        }else{
            store.commit('changeShow',true);
        }
    }
    if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
        if (localStorage.getItem('username')) {// 判断是否登录
            next()
        } else { // 没登录则跳转到登录界面
            Toast('请登录');
            next({
                path: '/Login',
            })
        }
    } else {
        next()
    }
})

export default router