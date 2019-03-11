<template>
  <div id="Categorylist">
    <div>
      <van-nav-bar fixed title="商品列表" left-text="返回" left-arrow @click-left="backFn"/>
    </div>
    <div class="content">
        <van-row type="flex">
            <van-col span="6">
               <ul class="cate_big">
                   <li>新鲜水果</li>
                   <li>新鲜水果</li>
                   <li>新鲜水果</li>
                   <li>新鲜水果</li>
                   <li>新鲜水果</li>
                   <li>新鲜水果</li>
               </ul>
            </van-col>
            <van-col span="18">
                <van-tabs v-model="active">
                    <van-tab title="标签 1">
                        <ul class="cate_detail">
                            <li>
                                <van-col  span="8">
                                    <img src="http://images.baixingliangfan.cn/compressedPic/20180411083404_6619.jpg" alt="12"> 
                                </van-col>
                                <van-col  span="16">
                                    <p class='title'>丑橘900g/盒</p>
                                    <p class='price'>￥16.50元</p>
                                </van-col>
                            </li>
                        </ul>
                    </van-tab>
                    <van-tab title="标签 2"> <ul class="cate_detail">
                            <li>
                                <van-col  span="8">
                                    <img src="http://images.baixingliangfan.cn/compressedPic/20180411083404_6619.jpg" alt="12"> 
                                </van-col>
                                <van-col  span="16">
                                    <p class='title'>丑橘900g/盒</p>
                                    <p class='price'>￥16.50元</p>
                                </van-col>
                            </li>
                        </ul></van-tab>
                    <van-tab title="标签 3"> <ul class="cate_detail">
                            <li>
                                <van-col  span="8">
                                    <img src="http://images.baixingliangfan.cn/compressedPic/20180411083404_6619.jpg" alt="12"> 
                                </van-col>
                                <van-col  span="16">
                                    <p class='title'>丑橘900g/盒</p>
                                    <p class='price'>￥16.50元</p>
                                </van-col>
                            </li>
                        </ul></van-tab>
                    <van-tab title="标签 4">内容 4</van-tab>
                </van-tabs>
            </van-col>
        </van-row>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toMoney } from "../filter/moneyFilter.js";
export default {
//   name: "Goods",
  data() {
    return {
        id: this.$route.query.goodsId,
        active:0,
        items,
        // 左侧高亮元素的index
        mainActiveIndex: 0,
        // 被选中元素的id
        activeId: 1
    };
  },
  computed: {
    ...mapGetters({
    
    })
  },
  created() {

  },
  methods: {
    backFn() {
      this.$router.back();
    },
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
    }
  }
};
</script>
<style >
 .content .van-tabs__wrap{
        z-index: 0;
    }
</style>
<style scoped lang='less'>
#Categorylist{
    height: 100%;
    .content{
        padding-top:45px;
        height: 100%;
        .cate_big{
            height: 40rem;
            background-color: aliceblue;
            li{
                padding: 0.4rem 0;
                font-size:0.8rem;
                text-align: center;
                color: #666;
                border-top:1px solid #e4e7ed;
                border-bottom:1px solid #e4e7ed;
            }
        }
        .cate_detail{
            li{
                display: flex;
                height: 5rem;
                border-top:1px solid #e4e7ed;
                border-bottom:1px solid #e4e7ed;
                img{
                    margin-top: 0.5rem;
                    margin-left: 0.5rem;
                    height: 4rem;
                }
                p{
                    line-height: 1rem;
                }
                p.title{
                    font-size: 0.9rem;
                    color: #333;
                }
                p.price{
                        font-size: 0.8rem;
                }
            }
        }
    }
}

</style>
