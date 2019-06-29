<template>
  <div class="content top">
    <!-- 轮播图 -->
    <div class="banner swiper-container" ref="banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item.bannerId">
          <img :src="item.imgUrl">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="box">
      <!-- <div class="nowCom">
        <p class="nowing">
          <router-link to="/films/nowPlaying" :class="{active:activeFlag}" @click="activeFlag">
            正在热映
            <span></span>
          </router-link>
        </p>
        <p class="coming">
          <router-link to="/films/comingSoon" :class="{active:activeFlag}" @click="!activeFlag">
            即将上映
            <span></span>
          </router-link>
        </p>
      </div>-->
      <div class="tabs-nav">
        <van-tabs
          line-width="60"
          v-model="active"
          title-active-color="#ff5f16"
          line-height="1"
          color = "#ff5f16"
          title-inactive-color="#999"
        >
          <van-tab v-for="tabitem in toNowList" :key="tabitem.id">
            <div slot="title">
              <router-link :to="tabitem.path" :class="{active:activeFlag}" @click="!activeFlag">{{tabitem.name}}</router-link>
            </div>
          <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </van-tab>
            
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
import nowPlaying from "./nowPlaying";
import comingSoon from "./comingSoon";
import $ from "jquery";
export default {
  name: "top-content",
  data() {
    return {
      bannerList: [],
      activeFlag: true,
      active: 2,
      toNowList: [
        { id: 1, name: "正在热播", path: "nowPlaying" },
        { id: 2, name: "即将上映", path: "comingSoon" }
      ]
    };
  },

  created() {
    this.getBannerList();
  },
  components: {
    nowPlaying,
    comingSoon
  },
  methods: {
    getBannerList() {
      $.ajax({
        url: "https://m.maizuo.com/gateway?type=2&cityId=440300&k=9241777",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15611114019290014261849"}',
          "X-Host": "mall.cfg.common-banner"
        },
        success: res => {
          // console.log(res);
          if (res.status === 0) {
            this.bannerList = res.data;
            // 当前这轮事件循环完成，数据渲染到真实dom树之后，就会触发我们的参数，
            this.$nextTick(() => {
              new Swiper(".swiper-container", {
                autoplay: true,
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                  el: ".swiper-pagination",
                  loop: true,
                  autoplay: 800,
                  effect: "flip",
                  observer: true,
                  observeParents: true,
                  pagination: ".swiper-pagination",
                  paginationClickable: true,
                  centeredSlides: true,
                  notNextTick: true,
                  autoplayDisableOnInteraction: true
                }
              });
            });
          }
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/styles/common/swiper.min.css";
.top {
  width: 100%;
  .banner {
    img {
      width: 100%;
    }
  }
}
.nowCom {
  display: flex;
  height: 49px;
  line-height: 49px;
  .coming,
  .nowing {
    flex: 1;
    text-align: center;
    height: 47px;
    a {
      width: 56px;
      height: 46px;
      font-size: 14px;
      color: #444;
      display: inline-block;
    }
    .router-link-active {
      color: #ff5f16;
      border-radius: 2px;
    }
  }
}
.tabs-nav{
    height:80px;
    a{
        color:#000;
        display: block;
    }
}
.van-ellipsis{
    font-size: 30px;
}
.van-tabs--line .van-tabs__wrap{
    height:80px;
}
.van-tab{
    line-height: 80px;
}
.van-tab--active{
    a{
      color:#ff5f16
    }
}
</style>
<style lang="scss">
.banner {
  .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 2px;
  }
  .swiper-pagination-bullet {
    width: 18px;
    height: 2px;
    border-radius: 0;
    background: #fff;
    opacity: 0.3;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
  }
}
</style>