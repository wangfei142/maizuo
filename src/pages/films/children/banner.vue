<template>
  <div class="content top" @scroll="onScroll">
    <!-- 轮播图 -->
    <div class="city-fixed">
      <router-link to="/city">{{ curCityInfo && curCityInfo.name }}</router-link>
      <img src="../../../assets/styles/images/xia.png" alt="">
    </div>
    <header v-show="falgheader">
      <!---->
      <!---->
      <div class="left">
        <div class="city">
          <router-link to="/city">{{ curCityInfo && curCityInfo.name }}</router-link>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
            width="6px"
            height="3px"
          />
        </div>
      </div>
      <div class="title">
        <div>电影</div>
      </div>
      <div class="right"></div>
    </header>
    <div class="banner swiper-container" ref="banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item.bannerId">
          <img :src="item.imgUrl" />
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
          line-height="1"
          title-inactive-color="#999"
          ref="opop"
          sticky
        >
          <van-tab v-for="tabitem in toNowList" :key="tabitem.id">
            <div slot="title">
              <router-link
                :to="tabitem.path"
                :class="{active:activeFlag}"
                @click="!activeFlag"
              >{{tabitem.name}}</router-link>
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
import nowPlaying from "./nowPlaying";
import comingSoon from "./comingSoon";
import { mapGetters } from "vuex";
import $ from "jquery";
export default {
  name: "top-content",
  data() {
    return {
      bannerList: [],
      activeFlag: true,
      active: 0,
      falgheader: false,
      toNowList: [
        { id: 1, name: "正在热播", path: "nowPlaying" },
        { id: 2, name: "即将上映", path: "comingSoon" }
      ]
    };
  },

  created() {
    this.getBannerList();
    let url = location.href;
    var str = url.split('/');
    switch(str[str.length-1]){
      case "nowPlaying":
        this.active = 0;
        break;
        default:
           this.active = 1;
    }
  },

  components: {
    nowPlaying,
    comingSoon
  },
  computed: {
    ...mapGetters("city", ["curCityInfo"])
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
    },
    onScroll(e) {
      let scrollTop = e.srcElement.scrollTop;

      if (scrollTop > 180) {
        this.falgheader = true;
      } else {
        this.falgheader = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/styles/common/px2rem.scss";
@import "../../../assets/styles/common/swiper.min.css";
.top {
  width: 100%;
  position: relative;
  .banner {
    img {
      width: 100%;
    }
  }
  .city-fixed {
    position: absolute;
    top: px2rem(18);
    left: px2rem(7);

    z-index: 10;
    font-size: 13px;
    background: rgba(0, 0, 0, 0.2);
    height: px2rem(30);
    line-height: px2rem(30);
    border-radius: px2rem(15);
    text-align: center;
    padding: 0 px2rem(5);
    a {
      color: #fff;
    }
    img{
      margin-left: 5px;
      width: 10px;
    }
  }
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: px2rem(44);
    line-height: px2rem(44);
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 3000;
    background-color: #fff;
    display: flex;
    .left {
      min-width: 15%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: px2rem(15);
      float: left;
      height: px2rem(44);
      .city {
        display: flex;
        align-items: center;
        a {
          font-size: 13px;
          max-width: px2rem(58);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #191a1b;
          padding-right: px2rem(5);
        }
        img {
          width: px2rem(6);
          height: px2rem(3);
        }
      }
    }
    .title {
      text-align: center;
      font-size: 17px;
      color: #191a1b;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      float: left;
      height: px2rem(44);
    }
    .right {
      width: 15%;
      display: flex;
      align-items: center;
      margin-right: px2rem(15);
      justify-content: center;
    }
  }
}

.nowCom {
  display: flex;
  height: px2rem(49);
  line-height: px2rem(49);
  .coming,
  .nowing {
    flex: 1;
    text-align: center;
    height: px2rem(47);
    a {
      width: px2rem(56);
      height: px2rem(46);
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
.tabs-nav {
  height: px2rem(80);
  a {
    color: #000;
    display: block;
  }
}
a.router-link-exact-active.router-link-active.active {
  color: #ff5f16;
}
.van-tab--active a[data-v-63287e70] {
  color: #000;
}
.van-ellipsis {
  font-size: 30px;
}
.van-tabs--line .van-tabs__wrap {
  height: px2rem(80);
}
.van-tab {
  line-height: px2rem(80);
}
.van-tab--active {
  a {
    color: #ff5f16;
  }
}
.banner {
  .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 px2rem(2);
  }
  .swiper-pagination-bullet {
    width: px2rem(18);
    height: px2rem(2);
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
