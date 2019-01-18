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
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Banner from "../components/banner.vue";
export default {
  components: {
    Banner
  },
  data() {
    return {
      search: "",
      locationIcon: require("../assets/img/location.png"),
      city: "上海",
      imagesList: []
    };
  },
  computed: {
    ...mapState(["homeData"])
  },
  created() {
    // this.getHomeDataFn();
    console.log(this.$store)
  },
  methods: {
    onSearch() {
      alert(11);
    },
    selectCity() {},
    onCancel() {
      this.search = "";
    },
    // ...mapActions({ getHomeDataFn: "getHomeDataFn" })
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
.banner {
  height: 8rem;
  background-color: blue;
}
</style>

 