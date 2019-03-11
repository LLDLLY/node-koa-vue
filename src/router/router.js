import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
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
            component: resolve =>{require(['@/views/ShoppingMall.vue'],resolve) }
        },
        {
            path: '/goods',
            name: 'Goods',
            component: resolve =>{require(['@/views/Goods.vue'],resolve) }
        },
        {
            path: '/categorylist',
            name: 'Categorylist',
            component: resolve =>{require(['@/views/Categorylist.vue'],resolve) }
        },
    ]
});
