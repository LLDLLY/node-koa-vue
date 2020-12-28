import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index";
import filters from "./filter/moneyFilter";
import { CONSTANT } from "./utiles/modules-index";

import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Icon,
  Search,
  Row,
  Col,
  NoticeBar,
  Swipe,
  SwipeItem,
  Lazyload,
  Toast,
  Tab,
  Tabs,
  List,
  Dialog,
  Cell,
  CellGroup,
  Field,
  Sticky
} from "vant";
Vue.use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Icon)
  .use(Search)
  .use(Row)
  .use(Col)
  .use(NoticeBar)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Toast)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(Dialog)
  .use(Cell)
  .use(CellGroup)
  .use(Field)
  .use(Sticky);

// 统一toast 关闭时间 3s
Toast.setDefaultOptions({ duration: CONSTANT.LOADING_TIME });

Vue.config.productionTip = false;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
