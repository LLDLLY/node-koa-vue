<template>
  <div id="ShoppingMall">
    <van-row class="search-top" type="flex" justify="space-between">
      <van-col span="6">
        <img @click="selectCity" class="location-icon" :src="locationIcon" alt width="35%">
        <span class="city">{{city}}</span>
      </van-col>
      <van-col span="24">
        <div class="search-input">
          <van-search
            placeholder="请输入搜索关键词"
            @cancel="onCancel"
            v-model="search"
            background="#e5017d"
            show-action
          />
        </div>
      </van-col>
    </van-row>
    <van-notice-bar mode="closeable">商城开业大酬宾，线上线下全部5折，全部5折!!! 下单满199元，免费赠送礼品一份，数量有限，送完为止</van-notice-bar>
    <Banner :imagesList="imagesList"></Banner>
    <div class="Category">
      <ul>
        <li v-for="(item,index) in homeData.category" :key="index">
          <img @click="toCategory(item.mallCategoryId)" :src="item.image" alt>
          <p>{{item.mallCategoryName}}</p>
        </li>
      </ul>
    </div>
    <div class="notice">
      <img :src="homeData.advertesPicture&&homeData.advertesPicture.PICTURE_ADDRESS" alt>
    </div>
    <p class="recommend-title">商品推荐</p>
    <div class="recommend-body">
      <swiper :options="options">
        <swiper-slide v-for="(item,key) in  homeData.recommend" :key="key">
          <div class="recommend-item" @click="goGoodsInfo(item.goodsId)">
            <img :src="item.image" width="80%">
            <p class="recommend-name">{{item.goodsName}}</p>
            <p
              class="recommend-price"
            >￥{{item.price | moneyFilter}}(￥{{item.mallPrice | moneyFilter}})</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <Foods
      :floorTitle="homeData.floorName&&homeData.floorName.floor1"
      :floorData="homeData&&homeData.floor1"
    ></Foods>
    <Foods
      :floorTitle="homeData.floorName&&homeData.floorName.floor2"
      :floorData="homeData&&homeData.floor2"
    ></Foods>
    <Foods
      :floorTitle="homeData.floorName&&homeData.floorName.floor3"
      :floorData="homeData&&homeData.floor3"
    ></Foods>
    <div class="recommend-title">热卖商品</div>
    <div class="hot-goods">
      <ul>
        <li v-for="(item,index) in homeData.hotGoods" :key="index">
          <img :src="item.image" alt>
          <p class="hot-title">{{item.name}}</p>
          <p class="hot-price">￥{{item.price | moneyFilter}}({{item.mallPrice | moneyFilter}})</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Banner from "../components/banner.vue";
import Foods from "../components/foods.vue";
import { toMoney } from "../filter/moneyFilter.js";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    Banner,
    swiper,
    swiperSlide,
    Foods
  },
  data() {
    return {
      search: "",
      locationIcon: require("../assets/img/location.png"),
      city: "上海",
      imagesList: [],
      options: {
        slidesPerView: 2.5
      }
    };
  },
  computed: {
    ...mapGetters({
      homeData: "getHomeInitData"
    })
  },
  filters: {
    moneyFilter(val) {
      return toMoney(val);
    }
  },
  created() {
    this.$store.dispatch("getHomeDataFn").then(() => {
      this.imagesList = this.homeData.slides;
    });
  },
  methods: {
    toCategory(id) {
      this.$router.push({ path: "categorylist", query: { CategoryId: id } });
    },
    onSearch() {
      alert(11);
    },
    goGoodsInfo(goodsId) {
      this.$router.push({
        path: "/goods",
        query: {
          goodsId
        }
      });
    },
    selectCity() {},
    onCancel() {
      this.search = "";
    }
  },
  watch: {
    search() {
      // search
    }
  }
};
</script>
<style>
.van-search__action {
  color: #fff;
}
.van-notice-bar__content {
  font-size: 0.5rem;
}
.van-notice-bar--withicon {
  height: 1.5rem;
  color: #f60;
  background-color: #fff7cc;
}
</style>
<style lang="less" scoped>
.search-top {
  height: 2.2rem;
  background-color: #e5017d;
  .location-icon {
    width: 1.3rem;
    margin-top: 0.4rem;
    margin-left: 0.5rem;
  }
  .city {
    font-size: 0.7rem;
    color: #fff;
    vertical-align: text-top;
  }
  .search-input {
    width: 100%;
    height: 100%;
  }
}
.Category {
  ul {
    display: flex;
    width: 100%;
    li {
      flex: 1;
      padding: 0.5rem;
      img {
        width: 100%;
      }
      p {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 0.61rem;
        text-align: center;
      }
    }
  }
}
.notice {
  height: 2rem;
  img {
    width: 100%;
  }
}
p.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
  margin-bottom: 0;
}
div.recommend-title {
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
  margin-bottom: 0;
  text-align: center;
}
.recommend-body {
  border-bottom: 1px solid #eee;
  // height: 3rem;
  img {
    width: 75%;
  }

  .recommend-item {
    padding: 0 0.5rem;
    text-align: center;
    border-right: 1px solid #eee;
  }
  .recommend-price,
  .recommend-name {
    margin-top: 0;
    margin-bottom: 0.1rem;
    font-size: 0.6rem;
    text-align: center;
  }
  // {
  //   font-size: 0.6rem;
  //      text-align: center;
  // }
}
.hot-goods {
  padding: 0 0.3rem;
  li {
    box-sizing: border-box;
    display: inline-block;
    width: 48%;
    margin: 1%;
    text-align: center;
    border-radius: 0.5rem;
    -moz-box-shadow: 0px 0px 6px #d6d6d6;
    -webkit-box-shadow: 0px 0px 6px #d6d6d6;
    box-shadow: 0px 0px 6px #d6d6d6;
    img {
      width: 90%;
    }
    p {
      padding: 0 0.6rem;
      font-size: 0.5rem;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>

 