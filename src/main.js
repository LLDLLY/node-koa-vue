import Vue from "vue";
import App from "./views/Main.vue";
import router from "./router/router";
import store from "./store/index";

import { Button, Tabbar, TabbarItem, NavBar, Icon, Search, Row, Col, NoticeBar, Swipe, SwipeItem ,Lazyload,Toast,Tab, Tabs } from 'vant';
Vue.use(Button).use(Tabbar).use(TabbarItem).use(NavBar).use(Icon).use(Search).use(Row).use(Col).use(NoticeBar).use(Swipe).use(SwipeItem).use(Lazyload).use(Toast).use(Tab).use(Tabs);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
