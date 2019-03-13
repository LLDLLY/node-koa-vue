<template>
  <div id="Categorylist">
    <div>
      <van-nav-bar fixed title="商品列表" left-text="返回" left-arrow @click-left="backFn"/>
    </div>
    <div class="content">
      <van-row type="flex">
        <van-col span="6">
          <ul class="cate_big">
            <li
              v-for="(item,index) in goodsCategories"
              :key="index"
              @click="getCategoriesChild(item.ID)"
            >{{item.MALL_CATEGORY_NAME}}</li>
          </ul>
        </van-col>
        <van-col span="18">
          <van-tabs v-model="active" @click="changeTab">
            <van-tab
              v-for="(item,index) in categoriesChild"
              :key="index"
              :title="item.MALL_SUB_NAME"
            >
              <ul class="cate_detail">
                <li v-for='(item,index) in cateList' :key='index'>
                  <van-col span="8">
                    <img :src="item.IMAGE1" alt="">
                  </van-col>
                  <van-col span="16">
                    <p class="title">{{item.NAME}}</p>
                    <p class="price">￥{{item.ORI_PRICE|toMoney }}元</p>
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
import { toMoney } from "../filter/moneyFilter.js";
import { getCategoriesChildApi, getCategoriesListApi } from "../service/api";
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
      page: 1
    };
  },
  computed: {
    ...mapGetters({
      goodsCategories: "getgoodsCategoriesGetter"
    })
  },
  created() {
    this.$store.dispatch("getGoodsCategoriesFn");
    this.getCategoriesChild(1)
  },
  methods: {
    backFn() {
      this.$router.back();
    },
    getCategoriesChild(id) {
      this.active = 0;
      getCategoriesChildApi(id).then(res => {
        if (res.data.code == 200) {
          this.categoriesChild = res.data.data;
        }
      });
    },
    changeTab(index, title) {
        let _this = this;
        this.categoriesChild.forEach(item => {
            if (item.MALL_SUB_NAME == title) {
            _this.selectedCate = item;
            _this.changeList(item.ID);
            }
        });
    },
    changeList(id){
        const _this = this;
        let param = {
            page:_this.page,
            id:id
        }
        getCategoriesListApi(param).then(res=>{
           if(res.data.code == 200){
               _this.cateList = res.data.data;
               debugger
           }
        })
    }
  }
};
</script>
<style >
.content .van-tabs__wrap {
  z-index: 0;
}
</style>
<style scoped lang='less'>
#Categorylist {
  height: 100%;
  .content {
    padding-top: 45px;
    height: 100%;
    .cate_big {
      height: 40rem;
      background-color: aliceblue;
      li {
        padding: 0.55rem 0;
        font-size: 0.8rem;
        text-align: center;
        color: #666;
        border-top: 1px solid #e4e7ed;
        border-bottom: 1px solid #e4e7ed;
      }
    }
    .cate_detail {
      li {
        display: flex;
        // height: 5rem;
        border-top: 1px solid #e4e7ed;
        border-bottom: 1px solid #e4e7ed;
        img {
          margin-top: 0.5rem;
          margin-left: 0.5rem;
          height: 5rem;
        }
        p {
          line-height: 1rem;
        }
        p.title {
          font-size: 0.9rem;
          color: #333;
        }
        p.price {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
