<template>
  <div>
    <van-nav-bar
      title="用户注册"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <div class="register-panel">
      <van-field 
        v-model="username" 
        label="用户名" 
        icon="clear" 
        placeholder="请输入用户名"
        required
        @click-icon="username=''"
        :error-message="usernameErrorMsg"
      />
      <van-field 
        v-model="password"
        type="password"
        label="密码"  
        placeholder="请输入密码"
        required
        :error-message="passwordErrorMsg"
      />
    </div>
    <div class="tqq"></div>

    <div class="toregister"><router-link to="/login">已有账号？去登录</router-link></div>
    <div class="register-button">
      <van-button type="primary" size="large" @click="register" 
      :loading="openLoading">马上注册</van-button>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'vant'
  export default {
    data () {
      return {
        username: '',
        password: '',
        openLoading: false,  // 注册loading
        usernameErrorMsg: '', // 当用户名出现错误时的提示
        passwordErrorMsg: '', // 当密码出现错误时的提示
      }
    },
    mounted(){
    },
    methods: {
      goBack () {
        this.$router.back()
      },
      register() {
        this.checkForm() && this.registerUser()
      }, 
      registerUser () {
        this.openLoading = true;
        const _this = this;
        let params={
          username:_this.username,
          password:_this.password
        }
        this.$store.dispatch('userRegisterFn',params)
        //  this.$store.dispatch('userRegisterFn').then(res=>{
        //      console.log(res);
        //  })
      },
      checkForm () {
        let isOK = true
        if (this.username.length < 5) {
          this.usernameErrorMsg = "用户名不能少于5位"
          isOK = false
        } else {
          this.usernameErrorMsg = ''
        }
        if (this.password.length < 6) {
          this.passwordErrorMsg = "密码不能少于6位"
          isOK = false
        } else {
          this.passwordErrorMsg = ''
        }
        return isOK
      }
    }
  }
</script>

<style lang='less' scoped>
  .toregister{
    font-size: 0.7rem;
    text-align: right;
    padding-right:0.5rem ;
    a{
    color:dodgerblue;
    }
  }
  .register-panel {
    padding: 12px 8px;
    border-radius: 25px;
  }
  .register-button {
    margin-top: 10px;
    padding: 0 8px;
  }
</style>