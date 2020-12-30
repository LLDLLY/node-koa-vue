<template >
  <!-- 城市列表 -->
  <div class="city-page" ref="cityPage">
    <van-nav-bar
      fixed
      title="城市列表"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <!-- city -->
    <div class="hot-city card">
      <!-- 热门城市 -->
      <!-- <p class="title">热门城市</p>
      <ul class="flex flex-wrap">
        <li v-for="(item, index) in hotCities" :key="index" class="city-item">
          {{ item.name }}
        </li>
      </ul> -->
      <!-- 城市列表 -->
      <!-- <p class="title">城市列表</p> -->
      <div class="flex-jcb">
        <div class="city-item-wrap">
          <div v-for="item in cityKeys" :key="item">
            <p>{{ item }}</p>
            <ul class="flex flex-wrap" :ref="`${refStr}${item}`">
              <li
                class="city-item"
                v-for="(item, index) in cityData[item]"
                :key="index"
                @click="() => selectCity(item)"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
        <ul class="city-key-wrap flex-dc flex-center">
          <li
            v-for="(item, index) in cityKeys"
            :key="index"
            :class="`city-key-item flex-center ${
              index === activeIndex ? 'active' : ''
            }`"
            @click="() => keyToView(item, index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Utils } from "../../utiles/modules-index";
export default {
  data() {
    return {
      refStr: "city_",
      activeIndex: 0,
      clickKey: false, // 点击右侧字母，true，滚动
      heightList: [
        {
          top: 0,
          name: "A",
          index: -1,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      hotCities: (state) => state.common.hotCities,
      cityData: (state) => state.common.cityData,
      cityKeys: (state) => state.common.cityKeys,
    }),
  },
  created() {
    this.$store.dispatch("getCityFn");
  },
  mounted() {
    const _this = this;
    this.$nextTick(() => {
      this.$refs.cityPage.addEventListener(
        "scroll",
        Utils.throttle(_this.getCurrentTop, 300)
      );
    });
  },
  methods: {
    selectCity(item) {
      this.$store.commit("setState", { city: item });
      this.goBack();
    },
    // 滚动到什么城市，active相应的字母
    getCurrentTop(e) {
      if (!e) return;
      const top = e.target.scrollTop;
      // 前指针 后指针
      let front = 0;
      let end = 1;

      // 当end下标不存在，则数组循环结束
      while (this.heightList[end]) {
        // 先判断范围
        if (
          this.heightList[front].top <= top &&
          top <= this.heightList[end].top
        ) {
          this.activeIndex = this.heightList[end].index;
          break;
        }
        // 两指针都向后走一步
        front++;
        end++;
      }
    },
    saveCityDomData() {
      // 收集渲染后的城市模块的高度数据
      this.$nextTick(() => {
        this.cityKeys.forEach((item, index) => {
          this.heightList.push({
            top: this.$refs[`${this.refStr}${item}`][0].offsetTop,
            name: item,
            index,
          });
        });
      });
    },
    goBack() {
      this.$router.back();
    },
    keyToView(item, index) {
      // 点击首字母跳到相应的位置
      const top = this.$refs[`${this.refStr}${item}`][0].offsetTop - 90;
      this.$refs.cityPage.scrollTo(0, top);
      this.activeIndex = index;

      // 使用scrollIntoView方法会受到van-nav-bar的样式影响
      // this.$refs[`${this.refStr}${item}`][0].scrollIntoView();
    },
  },
  watch: {
    cityData(data, old) {
      if (data) {
        this.saveCityDomData();
      }
    },
  },
};
</script>
<style lang="less">
@import url("../../assets/style/constant.less");
.city-page {
  padding-top: 45px;
  font-size: 0.65rem;
  height: calc(100% - 45px);
  overflow: auto;
  .card {
    padding-right: 0.3rem;
  }
  p.title {
    font-size: 0.7rem;
    color: #ccc;
    margin: 5px 0 8px 0;
    &:first-child {
      margin-top: 0;
    }
  }
  .city-item {
    width: 30.5%;
    text-align: center;
    padding: 0.3rem 0;
    border-radius: 0.25rem;
    margin: 0 0.5rem 0.5rem 0;
    background-color: rgb(245, 245, 245);
    &:active {
      background-color: #ccc;
    }
  }
  .city-key-wrap {
    position: sticky;
    top: 0;
    height: calc(100vh - 45px);
    .city-key-item {
      font-size: 0.5rem;
      width: 0.8rem;
      height: 0.8rem;
      margin-bottom: 0.2rem;
      &.active {
        background: @theme;
        border-radius: 50%;
        color: #fff;
      }
    }
  }
}
</style>