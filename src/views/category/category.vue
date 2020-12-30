<template>
  <div id="Categorylist">
    <div>
      <van-nav-bar
        fixed
        title="商品列表"
        left-text="返回"
        left-arrow
        @click-left="backFn"
      />
    </div>
    <div class="content">
      <van-row type="flex">
        <van-col span="6">
          <ul class="cate_big">
            <li
              v-for="(item, index) in goodsCategories"
              :key="index"
              @click="getCategoriesChild(item.ID, index)"
              :class="`${mainActiveIndex === index ? 'active' : ''}`"
            >
              {{ item.MALL_CATEGORY_NAME }}
            </li>
          </ul>
        </van-col>
        <van-col span="18">
          <van-tabs v-model="active" @click="changeTab">
            <van-tab
              v-for="(item, index) in categoriesChild"
              :key="index"
              :title="item.MALL_SUB_NAME"
            >
              <ul class="cate_detail">
                <li
                  v-for="(item, index) in cateList"
                  :key="index"
                  @click="goGoodsInfo(item.ID)"
                >
                  <van-col span="8">
                    <img :src="item.IMAGE1" alt="" />
                  </van-col>
                  <van-col span="16">
                    <p class="title">{{ item.NAME }}</p>
                    <p class="price">
                      ￥<span>{{ item.ORI_PRICE | toMoney }}</span> 元
                    </p>
                  </van-col>
                </li>
              </ul>
            </van-tab>
          </van-tabs>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getCategoriesChildApi, getCategoriesListApi } from "../../request/api";
export default {
  data() {
    return {
      active: 0,
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1,
      categoriesChild: [],
      loading: false,
      finished: false,
      selectedCate: {},
      cateList: [],
      cateTabFrist: [],
      page: 1,
    };
  },
  computed: {
    ...mapGetters({
      goodsCategories: "getgoodsCategoriesGetter",
    }),
  },
  created() {
    this.$store.dispatch("getGoodsCategoriesFn");
    this.getCategoriesChild(1, 0);
  },
  methods: {
    backFn() {
      this.$router.back();
    },
    getCategoriesChild(id, index) {
      // 保持tab 默认选中第一个
      this.active = 0;
      this.mainActiveIndex = index;
      getCategoriesChildApi(id).then((res) => {
        // console.log(res);
        if (res.code == 200) {
          this.categoriesChild = res.result;
          // 大类切换，自动加载第一个tab里的数据
          this.changeList(this.categoriesChild[0].ID);
        }
      });
    },
    changeTab(index, title) {
      let _this = this;
      this.categoriesChild.forEach((item) => {
        if (item.MALL_SUB_NAME == title) {
          _this.selectedCate = item;
          _this.changeList(item.ID);
        }
      });
    },
    changeList(id) {
      const _this = this;
      let param = {
        page: _this.page,
        id: id,
      };
      getCategoriesListApi(param).then((res) => {
        if (res.code == 200) {
          _this.cateList = res.result;
        }
      });
    },
    goGoodsInfo(goodsId) {
      this.$router.push({
        path: "/goods",
        query: {
          goodsId,
        },
      });
    },
  },
};
</script>
<style scoped lang="less">
#Categorylist {
  height: 100%;
  .content {
    padding-top: 45px;
    height: 100%;
    .cate_big {
      height: 100%;
      background-color: #f8f8f8;
      li {
        padding: 0.48rem 0;
        font-size: 0.8rem;
        text-align: center;
        color: #666;
        border-bottom: 1px solid #e4e7ed;
        &.active {
          background-color: #fff;
        }
      }
    }
    .cate_detail {
      margin-bottom: 2.8rem;
      li {
        display: flex;
        // height: 5rem;
        border-top: 1px solid #e4e7ed;
        border-bottom: 1px solid #e4e7ed;
        img {
          margin-top: 0.5rem;
          margin-left: 0.5rem;
          height: 4rem;
          width: 4rem;
        }
        p {
          line-height: 1rem;
          padding-left: 0.4rem;
        }
        p.title {
          font-size: 0.7rem;
          color: #333;
          font-weight: 500;
          width: 8rem;
        }
        p.price {
          font-size: 0.68rem;
          span {
            color: rgb(255, 94, 0);
          }
        }
      }
    }
  }
}
</style>
