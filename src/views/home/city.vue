<template >
  <!-- 城市列表 -->
  <div class="city-page">
    <van-nav-bar
      title="城市列表"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>