<template>
  <div>
    <div>
      <van-nav-bar fixed title="商品详情" left-text="返回" left-arrow @click-left="backFn"/>
    </div>
    <div class="goods_img">
      <img :src="goodsDetail&&goodsDetail.IMAGE1" alt>
    </div>
    <p class="good_title">{{goodsDetail&&goodsDetail.NAME}}</p>
    <p class="good_price">价格: ￥{{goodsDetail&&goodsDetail.PRESENT_PRICE | toMoney}}元</p>
    <van-tabs swipeable sticky :offset-top='46'>
      <van-tab title="商品详情">
        <div class="detail" v-html="goodsDetail.DETAIL"></div>
      </van-tab>
      <van-tab title="评论" @click='()=>{alert(66)}'>
        <ul>
          <li class="rating-item van-hairline--bottom" v-for="(item,index) in goodsComments" :key='index'>
            <div class="avatar">
              <img
                width="28"
                height="28"
                :src="item.avatar"
              >
            </div>
            <div class="content">
              <h1 class="name">{{item.username}}</h1>
              <p class="text">{{item.text}}</p>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
    <div class="bottom_button">
        <van-button type="primary" @click = 'toCar'>加入购物车</van-button>
        <van-button type="danger" @click = 'toPay'>直接购买</van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toMoney } from "../filter/moneyFilter.js";
export default {
  name: "Goods",
  data() {
    return {
      id: this.$route.query.goodsId,
      active: 0,
      goodsId: "",
      goodsInfo: {}, // 商品详情
      ratings: []    // 商品评论
    };
  },
  computed: {
    ...mapGetters({
      goodsDetail: "getGoodsDetailGetter",
      goodsComments: "getGoodSCommentGetter"
    })
  },
  created() {
     window.scrollTo(0, 0);
    this.$store.dispatch("getGoodsDetailFn", this.id);
    this.$store.dispatch("getGoodsCommentsFn", this.id);
  },
  methods: {
    backFn() {
      this.$router.back();
    },
    toCar() {
alert(1)
    },
    toPay(){
alert(1)
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
  font-size: 0.5rem;
  color: #555;
  padding-left: 10px;
}
.avatar img {
  width: 1.5rem;
  border-radius: 50%;
}
.goods_img {
  padding-top: 46px;
  min-height: 3rem;
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
  min-height: 5rem;
}
.rating-item {
  display: flex;
  padding: 0.5rem;
}
.bottom_button{
  background-color: #fff;
  padding: 5px;
  width:100%;
  position: fixed;
  bottom: 2.5rem;
  text-align: center;
  box-sizing: border-box;
  button{
    width: 47%;
    margin: 0 2.5px ;
  }
} 
</style>
