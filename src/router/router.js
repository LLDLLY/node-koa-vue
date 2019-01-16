import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            // name: "home",
            redirect: '/home',
            // component: resolve => { require(['@/views/Main.vue'], resolve) }
        },
        {
            path: '/home',
            name: 'ShoppingMall',
            component: resolve =>{require(['@/views/ShoppingMall.vue'],resolve) }
        },
    ]
});
