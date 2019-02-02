<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="backFn"/>
    <div class="goods_img">
      <img src="http://images.baixingliangfan.cn/shopGoodsImg/20180407/20180407173221_2015.jpg" alt>
    </div>
    <p class="good_title">单身狗粮地中海盐味薯片 71g/袋</p>
    <p class="good_price">价格: ￥8.00元</p>
    <van-tabs v-model="active">
      <van-tab title="商品详情">
        <div class="detail">
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173924_656.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173924_3700.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173924_3416.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173924_8458.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173925_2665.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173925_8040.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173925_35.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173925_9446.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173925_2297.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173926_787.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173926_9998.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173926_759.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173926_402.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173926_38.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173926_9482.jpg"
            width="100%"
            height="auto"
            alt
          >
          <img
            src="http://images.baixingliangfan.cn/shopGoodsDetailImg/20180407/20180407173927_7697.jpg"
            width="100%"
            height="auto"
            alt
          >
        </div>
      </van-tab>
      <van-tab title="评论">
        <ul>
          <li class="rating-item van-hairline--bottom">
            <div class="avatar">
              <img
                width="28"
                height="28"
                src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              >
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
            </div>
          </li>
          <li class="rating-item van-hairline--bottom">
            <div class="avatar">
              <img
                width="28"
                height="28"
                src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              >
            </div>
            <div class="content">
              <h1 class="name">3******b</h1>
              <p class="text"></p>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Goods",
  data() {
    return {
      id:this.$route.query.goodsId,
      active: 0,
      goodsId: "",
      goodsInfo: {}, // 商品详情
      ratings: [] // 商品评论
    };
  },
  computed: {
    ...mapGetters({
      goodsDetail: "getGoodsDetailGetter"
    })
  },
  created() {
    this.$store.dispatch('getGoodsDetailFn',this.id).then(res=>{
      console.log(res)
    })
  },
  methods: {
    backFn() {
      this.$router.back();
    }
  }
};
</script>
<style>
.van-nav-bar__title {
  font-weight: 400;
}
</style>
<style scoped lang='less'>
h1.name {
  padding-left: 0.5rem;
  font-size: 0.6rem;
}
.text {
  font-size: 0.55rem;
  color: #333;
}
.avatar img {
  border-radius: 50%;
}
.goods_img {
  img {
    width: 100%;
  }
}
.good_title {
  padding: 0 15px;
  color: #666;
  font-size: 0.8rem;
}
.good_price {
  padding: 0 15px;
  color: #666;
  font-size: 0.78rem;
}
.detail {
  font-size: 0;
}
.rating-item {
  display: flex;
  padding: 0.5rem;
}
</style>
