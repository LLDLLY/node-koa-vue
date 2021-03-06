import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";
import { CONSTANT, Utils } from "../utiles/modules-index";
import { Toast } from "vant";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "ShoppingMall",
      meta: {
        tabbar: true,
        title: '首页'
      },
      component: resolve => {
        require(["@/views/home/home.vue"], resolve);
      }
    },
    {
      path: "/cityList",
      name: "CityList",
      meta: {
        tabbar: false,
        title: '城市列表'
      },
      component: resolve => {
        require(["@/views/home/city.vue"], resolve);
      }
    },
    {
      path: "/goods",
      name: "Goods",
      meta: {
        tabbar: false,
        title: '商品详情'
      },
      component: resolve => {
        require(["@/views/category/goods.vue"], resolve);
      }
    },
    {
      path: "/cart",
      name: "Cart",
      meta: {
        tabbar: true,
        title: '购物车'
      },
      component: resolve => {
        require(["@/views/cart/cart.vue"], resolve);
      }
    },
    {
      path: "/categorylist",
      name: "Categorylist",
      meta: {
        tabbar: true,
        title: '商品分类'
      },
      component: resolve => {
        require(["@/views/category/category.vue"], resolve);
      }
    },
    {
      path: "/center",
      name: "Center",
      meta: {
        auth: true,
        tabbar: true,
        title: '个人中心'
      },
      component: resolve => {
        require(["@/views/center/center.vue"], resolve);
      }
    },
    {
      path: "/register",
      name: "Register",
      meta: {
        tabbar: false,
        title: '注册'
      },
      component: resolve => {
        require(["@/views/center/register.vue"], resolve);
      }
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        tabbar: false,
        title: '登录'
      },
      component: resolve => {
        require(["@/views/center/login.vue"], resolve);
      }
    },
    {
      path: "/setting",
      name: "Setting",
      meta: {
        tabbar: false,
        title: '设置'
      },
      component: resolve => {
        require(["@/views/center/setting.vue"], resolve);
      }
    }
  ]
});


// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {

  document.title = to.meta.title;
  // tabbar 显示逻辑
  store.commit("changeShow", to.matched.some(res => res.meta.tabbar));

  if (to.matched.some(res => res.meta.auth)) {
    // 判断是否需要登录权限
    if (Utils.getLocal(CONSTANT.LOCAL_TOKEN_NAME)) {
      // 判断是否登录
      next();
    } else {
      // 没登录则跳转到登录界面
      Toast("请登录");
      next('/login')
    }
  } else {
    next();
  }
});


// 重写push,避免报错（vue-router.esm.js?8c4f:2008 Uncaught (in promise) Error:）
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router;
