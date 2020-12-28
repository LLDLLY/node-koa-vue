<template>
  <div id="app">
    <keep-alive exclude="Goods,Cart,Center">
      <router-view></router-view>
    </keep-alive>
    <van-tabbar
      v-model="active"
      @change="changeTabbar(active)"
      v-if="this.$store.state.common.show"
    >
      <van-tabbar-item icon="shop"> 首页 </van-tabbar-item>
      <van-tabbar-item icon="records"> 商品分类 </van-tabbar-item>
      <van-tabbar-item icon="cart"> 购物车 </van-tabbar-item>
      <van-tabbar-item icon="contact"> 个人中心 </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "vant";
export default {
  data() {
    return {
      active: 0,
      path: "", // 当前路径
    };
  },
  computed: {
    ...mapState(["cartInfo"]),
  },
  created() {
    this.changeTabBarActive();
  },
  updated() {
    this.changeTabBarActive();
  },
  methods: {
    changeTabBarActive() {
      this.path = this.$route.path;
      // 如果是地址选择页隐藏tab栏
      if (this.path == "/city") {
        this.show = false;
      } else {
        this.show = true;
      }
      switch (this.path) {
        case "/home":
          this.active = 0;
          break;
        case "/categorylist":
          this.active = 1;
          break;
        case "/cart":
          this.active = 2;
          break;
        case "/center":
          this.active = 3;
          break;
        default:
          this.active = 0;
      }
    },
    changeTabbar(active) {
      switch (active) {
        case 0:
          this.$router.push("/home");
          break;
        case 1:
          this.$router.push("/categorylist");
          break;
        case 2:
          this.$router.push("/cart");
          break;
        case 3:
          this.$router.push("/center");
          break;
      }
    },
  },
  watch: {},
};
</script>

<style lang='less'>
@import url("./assets/style/common.less");
@import url("./assets/style/vant.less");
#app {
  height: 100%;
}
</style>
