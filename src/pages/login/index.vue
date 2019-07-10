<template>
  <div class="page-login">
    <div class="logo">
      <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" />
    </div>
    <div class="login-form">
      <div class="form-group">
        <input placeholder="手机号" class="input-control" type="text" v-model="username" />
      </div>
      <div class="form-group">
        <input placeholder="密码" class="input-control" type="password" v-model="password" />
      </div>
      <button
        class="submit login-btn"
        :disabled="!password || !username"
        @click="userloginof({ username, password })"
      >
        <span>登录</span>
      </button>
      <router-link to="/register" class="reg">注册账号</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "page-login",
  methods: {
    //方法向仓库发送数据
    ...mapActions("user", ["userloginof"])
  },
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style lang="scss">
@import "./index.scss";
@import "../../assets/styles/common/px2rem.scss";
.submit {
  margin-bottom: px2rem(30) !important;
}
.reg {
  float: right;
  margin-right: px2rem(40);
  font-size: 14px;
  color: #999999;
}
.reg span {
  color: #ff5f16;
}
</style>
