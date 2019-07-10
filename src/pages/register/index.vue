<template>
  <div class="page-login">
    <div class="logo">
      <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" />
    </div>
    <div class="login-form">
      <van-field
        @blur="tonickname"
        v-model="ruleForm.nickname"
        label="昵称"
        placeholder="请输注册用户名"
        :error-message="onemistake"
      />

      <van-field
        @blur="tousername"
        v-model="ruleForm.username"
        label="账号"
        placeholder="请输入手机号"
        :error-message="towmistake"
      />

      <van-field
        @keyup="topwd"
        v-model="ruleForm.password"
        type="password"
        label="密码"
        placeholder="请输注册登陆密码"
        :error-message="threemistake"
      />

      <button
        class="submit login-btn"
        :disabled="!ruleForm.password || !ruleForm.nickname || !ruleForm.username || !acco ||!user||!pwd"
        @click="registerup"
      >
        <span>注册</span>
      </button>
      <router-link to="/login" class="reg">
        已有账号去&nbsp;
        <span>登录&nbsp;</span>App
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "page-login",

  data() {
    return {
      onemistake: "",
      towmistake: "",
      threemistake: "",
      ruleForm: {
        nickname: "",
        username: "",
        password: ""
      },
      acco: true,
      user: true,
      pwd: true
    };
  },

  methods: {
    //校验
    tonickname() {
      let reg = /^[\u4e00-\u9fa5]{2,8}$/;
      if (!reg.test(this.ruleForm.nickname)) {
        this.onemistake = "用户名格式错误,长度为2-8位中文";
        this.acco = false;
      } else {
        this.onemistake = "";
        this.acco = true;
      }
    },
    //校验
    tousername() {
      let reg = /^1[3456789]\d{9}$/;
      if (!reg.test(this.ruleForm.username)) {
        this.towmistake = "手机号码有误，请重填";
        this.user = false;
      } else {
        this.towmistake = "";
        this.user = true;
      }
    },
    //校验
    topwd() {
      var reg = /^[\w_-]{6,16}$/;
      if (!reg.test(this.ruleForm.password)) {
        this.threemistake = "最短6位，最长16位, 非空格";
        this.pwd = false;
      } else {
        this.threemistake = "";
        this.pwd = true;
      }
    },

    //注册发送注册数据
    registerup() {
      Toast.loading({
        duration: 0,
        message: "玩命加载..."
      });
      axios
        .post("http://106.52.35.247:9090/sign-up", {
          nickname: this.ruleForm.nickname,
          username: this.ruleForm.username,
          password: this.ruleForm.password,
          headers: {
            "content-type": "multipart/form-data"
          }
        })
        .then(response => {
          Toast.clear();
          let res = response.data;
          if (response.status === 200) {
            Toast("注册成功");
            setTimeout(() => {
              this.$router.push("/login");
            }, 500);
          } else {
            Toast(res.msg);
          }
        });
    }
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
