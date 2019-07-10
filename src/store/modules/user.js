import axios from "axios";
import { Toast } from "vant";
import router from "@/router/index";

const state = {
  userInfo: window.localStorage.getItem("userInfo")
    ? JSON.parse(window.localStorage.getItem("userInfo"))
    : null
};

const getters = {};

const mutations = {
  setUserInfo(state, payload) {
    state.userInfo = payload.info;
    // console.log(state.userInfo);
  },

  setUserAvatar(state, payload) {
    //覆盖对象 { ...state.userInfo, avatar: payload.avatar }
    let newUserInfo = { ...state.userInfo, avatar: payload.avatar };
    //重新赋值更新 state
    state.userInfo = newUserInfo;
    //重新存储数据
    window.localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
  }
};

const actions = {
  //payload 页面传送过来的数据
  userloginof(context, payload) {
    // console.log(payload);
    Toast.loading({ duration: 0, message: "加载中..." });
    axios.post("http://106.52.35.247:9090/sign-in", payload).then(response => {
      // response axios请求过来的数据
      Toast.clear();
      let res = response.data;
      // console.log(res);
      if (res.code === 0) {
        //登陆成功
        // 本地存储
        window.localStorage.setItem("userInfo", JSON.stringify(res.data));
        //提交 mutation
        context.commit({ type: "setUserInfo", info: res.data });
        Toast("登陆成功");
        setTimeout(() => {
          let redirect = router.currentRoute.query.redirect || "/center";
          router.replace(redirect);
        }, 1000);
      } else {
        Toast("密码或账号错误");
      }
    });
  },

  headportraitup({ commit, state }, event) {
    Toast.loading({
      duration: 0,
      message: "玩命加载..."
    });
    // new formData():将form表单元素的name与value进行组合，实现表单数据的序列化，从而减少表单元素的拼接，提高工作效率。
    let formData = new FormData();
    //追加数据
    formData.append("userId", state.userInfo.userId);
    //获取 document ，  event.target.files[0] ， 文件上传的路径并追加起来
    formData.append("avatar", event.target.files[0]);
    axios
      .post("http://106.52.35.247:9090/user/profile", formData, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(response => {
        Toast.clear();
        let res = response.data;
        if (res.code === 0) {
          Toast("修改成功");
          // console.log(response)
          commit({ type: "setUserAvatar", avatar: res.data });
        } else {
          Toast(res.msg);
        }
      });
  },

  handleLogout(context) {
    context.commit({
      type: "setUserInfo",
      info: null
    });
    window.localStorage.removeItem("userInfo");
    let redirect = router.currentRoute.query.redirect || "/home";
    router.replace(redirect);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
