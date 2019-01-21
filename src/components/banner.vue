<template>
  <div id="Banner">
    <van-swipe :autoplay="autoplay">
      <van-swipe-item
        v-for="(item, index) in imagesList"
        :key="index"
        @click.native="goGoodsInfo(item.goodsId)"
      >
        <img v-lazy="item.image">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "Banner",
  props: {
    autoplay: {
      type: Number,
      default: 2000
    },
    imagesList: {
      type: Array,
      default: []
    }
  },
  methods: {
    goGoodsInfo(id) {
      this.$router.push({ path: "/goods", query: { 'goodsId': id }});
    }
  }
};
</script>
<style>
#Banner {
  clear: both;
  max-height: 9rem;
  overflow: hidden;
}
img{
  width: 100%;
}
</style>

