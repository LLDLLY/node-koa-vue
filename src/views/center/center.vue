<template>
  <div>
    <img
      class="user-poster"
      src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"
    />
    <van-row class="user-links">
      <van-col span="6"> <van-icon name="pending-payment" />待付款 </van-col>
      <van-col span="6"> <van-icon name="records" />待发货 </van-col>
      <van-col span="6"> <van-icon name="tosend" />已发货 </van-col>
      <van-col span="6"> <van-icon name="logistics" />已完成 </van-col>
    </van-row>

    <van-cell-group>
      <van-cell icon="records" title="全部订单" is-link />
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
      <van-cell icon="setting-o" title="我的设置" is-link to="setting" />
    </van-cell-group>
  </div>
</template>

<script>
// import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
  //   components: {
  //     [Row.name]: Row,
  //     [Col.name]: Col,
  //     [Icon.name]: Icon,
  //     [Cell.name]: Cell,
  //     [CellGroup.name]: CellGroup
  //   }
};
</script>

<style lang="less">
.user {
  &-poster {
    width: 100%;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>