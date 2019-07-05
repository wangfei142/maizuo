<template>
  <div class="page-city">
    <div class="header">
      <div class="left">
        <img src="../assets/styles/images/del.png" alt @click="goBack" />
      </div>
      <div class="title">当前城市 -</div>
    </div>
    <van-search v-model="searchVal" placeholder="请输入城市名或拼音" />
    <div class="lv-searchlist" v-show="searchVal">
      <ul>
        <li
          class="city-item-detail"
          v-for="item in searchList"
          :Key="item.cityId"
          @click="handleChgCity(item)"
        >
          <div class="city-item-text">{{ item.name }}</div>
        </li>
      </ul>
    </div>
    <div class="no-searchlist" v-show="!searchList.length">
      <img src="../assets/styles/images/empty.png" alt />
      <p>没有找到匹配的城市</p>
    </div>
    <div class="lv-indexlist" v-show="!searchVal">
      <ul class="lv-indexlist__content" ref="lv-indexlist__content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">定位失败</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li
                class="city-item-detail"
                v-for="item in hotCity"
                :Key="item.cityId"
                @click="handleChgCity(item)"
              >
                <div class="city-item-text">{{ item.name }}</div>
              </li>
            </ul>
          </div>
        </div>
        <li :ref="'box_' + item.py" class="lv-indexsection" v-for="item in cityList" :Key="item.py">
          <p class="lv-indexsection__index">{{ item.py }}</p>
          <ul>
            <li
              v-for="city in item.list"
              :Key="city.cityId"
              @click="handleChgCity(city)"
            >{{ city.name }}</li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li v-for="item in cityList" :Key="item.py" @click="goTop(item.py)">{{ item.py }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "city",
  data() {
    return {};
  },

  computed: {
    ...mapGetters("city", ["cityList", "hotCity", "indexlist", "searchList"]),
    searchVal: {
      get() {
        return this.$store.state.city.searchVal;
      },

      set(value) {
        this.$store.commit({
          type: "city/setSearchVal",
          value
        });
      }
    }
  },
  methods: {
    ...mapActions("city", ["getCities"]),
    goTop(py) {
      // 1. 找到左侧对应着的dom元素
      let el = this.$refs["box_" + py][0];
      let box = this.$refs["lv-indexlist__content"];
      // 2. 得到当前 el 距离顶部的距离
     
      let offsetTop = el.offsetTop - 44;
      console.log(el);
      
       console.log(offsetTop);
      // 3. 操作左侧的滚动条的 scrollTop 属性
      box.scrollTop = offsetTop;
    },
    handleChgCity(city) {
      // 1. 获取当前点击的城市的城市ID
      let cityId = city.cityId;
      // 2. 将 仓库 中的相关数据给修改了
      this.$store.commit({
        type: "city/setCurCityId",
        cityId
      });
      // 3. 编程式导航 回到上一页
      // this.$router.back();
      this.$router.go(-1);
      // 4. 将城市id给本地储存起来
      window.localStorage.setItem("curCityId", cityId);
      // 5. TODO 需要重新获取 影片与影院的数据
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.getCities();
  }
};
</script>


<style lang="scss">
@import "../assets/styles/common/mixins.scss";
.page-city {
  overflow: hidden;
  height: 100%;
  .van-field__control {
    font-size: 12px;
  }
  .van-search {
    margin-top: 44px;
    background-color: #f4f4f4 !important;
  }
  .van-search__content {
    background-color: #fff;
  }
  .lv-searchlist {
    ul {
      padding-left: 15px;
    }
    li {
      height: 44px;
      position: relative;
      line-height: 44px;
      color: #191a1b;
      font-size: 13px;
    }
    li:after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid #ededed;
      color: #ededed;
      transform-origin: 0 100%;
      transform: scaleY(0.5);
    }
  }
  .van-search {
    padding: 8px 16px;
  }
  .no-searchlist {
    position: absolute;
    top: 130px;
    width: 100%;
    text-align: center;
    img {
      width: 90px;
      margin: auto;
    }
    p {
      color: #bdc0c5;
      font-size: 14px;
      margin: 0;
    }
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 300;
    > div {
      float: left;
      height: 44px;
    }
    .left {
      width: 14%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 17px;
        margin-left: 10px;
      }
    }
    .title {
      width: 72%;
      text-align: center;
      font-size: 17px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #191a1b;
    }
  }
  .lv-indexlist {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    background: #fff;
    overflow: hidden;
    position: relative;
    &__content {
      flex: 1;
      height: 100%;
      overflow-y: auto;
    }
    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 12px;
      height: 100%;
      position: fixed;
      right: 0;
      top: 30px;
      li {
        height: 16px;
        font-size: 11px;
        color: #191a1b;
        padding: 0 6px;
      }
    }

    .lv-indexsection {
      font-size: 14px;

      &__index {
        background-color: #f4f4f4;
        color: #797d82;
        padding-left: 15px;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
      }

      ul {
        padding: 0 15px;
        margin-bottom: -1px;
        li {
          @include border-bottom;
          position: relative;
          height: 48px;
          line-height: 48px;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          display: flex;
        }
      }
    }

    .recommend-city {
      padding-left: 15px;
      padding-top: 15px;

      .city-index-title {
        font-size: 13px;
        color: #797d82;
        margin-bottom: 10px;
      }

      .city-index-detail {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .city-item-detail {
          width: 31.33%;
          text-align: center;
          padding-bottom: 15px;
          box-sizing: border-box;
          float: left;

          .city-item-text {
            height: 30px;
            line-height: 30px;
            background-color: #f4f4f4;
            border-radius: 3px;
            box-sizing: border-box;
            margin: 0 7.5px;
            font-size: 14px;
            color: #191a1b;
          }
        }
      }
    }
  }
}
</style>

