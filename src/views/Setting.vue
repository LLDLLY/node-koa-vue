<template>
  <div>
    <van-nav-bar
      title="我的设置"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <van-cell-group>
      <van-cell  title="登录" is-link to='login'/>
      <van-cell  title="注册" is-link to='register'/>
      <van-cell  title="注销" is-link  />
      <van-cell  title="修改密码" is-link to='' />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  created(){
    
  },
  mounted(){
  },
  methods: {
       goBack () {
        this.$router.back()
      },
  },
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