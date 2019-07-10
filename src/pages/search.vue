<template>
  <div class="search">
    <div class="seatch-top">
      <van-search v-model="SearchCinemasVal" placeholder="请输入城市名或拼音" />
      <p class="to-back" @click="goBack">取消</p>
    </div>
    <div class="cinema-init-area" v-show="!SearchCinemasVal">
      <div class="cinema-nearby init-list">
        <div class="cinema-index-title">离你最近</div>
        <ul class="cinema-index-detail">
          <li class="cinema-item-detail" v-for="item in getCinemas5" :key="item.cinemaId">
            <router-link tag="div" class="cinema-item-text" :to="'/cinema/'+item.cinemaId">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="cinema-search-result" v-show="SearchCinemasVal">
      <div
        class="cinema-search-result-list"
        v-show="SearchCinemasList"
      >
        <ul>
          <li class="cinema-search-result-item" v-for="item in SearchCinemasList" :key="item.cinemaId">
            <router-link :to="'/cinema/'+item.cinemaId" class="cinema-item-wrap">
              <div class="cinema-info-lf cinema-info">
                <span class="cinema-name">{{ item.name }}</span>
                <span class="cinema-address">{{ item.address }}</span>
              </div>
              <div class="cinema-info-rt cinema-info">
                <div class>
                  <span class="cinema-lowPrice price-fmt">
                    <i>￥</i>
                    <span class="interge" style="font-size: 15px;">{{ item.lowPrice | getlowPrice }}</span>
                    <span style="display: none;">.</span>
                    <span class="decimal" style="font-size: 10px;"></span>
                    <span style="display: none;">.</span>
                    <span class="decimal" style="font-size: 10px; display: none;">00</span>
                  </span>
                  <span class="upon">起</span>
                </div>
                <span class="cinema-gpsAddress">距离未知</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="empty-result"  v-show="!SearchCinemasList.length">
        <img src="../assets/styles/images/cinema.png" alt />
        <p>没有找到匹配的影院</p>
        <p class="empty-list-tip">提示：仅支持搜索“影院”，建议您检查输入的影院名称是否有误？</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters ,mapState ,mapActions} from "vuex";
export default {
  name: "search",
  data() {
    return {
    };
  },
   filters: {
    getlowPrice(value) {
      return value / 100;
    }
  },
  computed: {
    ...mapState("cinemas" ,["cinemasList"]),
    ...mapGetters("cinemas", [ "SearchCinemasList"]),
     SearchCinemasVal: {
      get() {
        return this.$store.state.cinemas.SearchCinemasVal;
      },
      set(value) {
        this.$store.commit({
          type: "cinemas/setSearchCinemasVal",
          value
        });
      }
    },
    getCinemas5(){
      return this.cinemasList.slice(0,5)
    }
  },
  methods:{
    goBack(){
      // this.$router.go(-1);
      this.$router.back()
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  .seatch-top {
    display: flex;
    .van-search {
      flex: 1;
      .van-search__content {
        height: 30px;
        border-radius: 3px;
      }
      .van-field__control {
        font-size: 12px;
      }
    }
    .to-back {
      height: 49px;
      line-height: 49px;
      width: 43px;
      font-size: 14px;
    }
  }
  .init-list {
    padding: 0 15px 8px 0;
    margin-left: 15px;
    position: relative;
  }
  .cinema-init-area {
    z-index: 4000;
    background-color: #fff;
    .cinema-index-title {
      font-size: 13px;
      line-height: 13px;
      color: #bdc0c5;
      margin: 18px 0;
    }
    .cinema-index-detail {
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: wrap;
      .cinema-item-detail {
        text-align: center;
        padding-bottom: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        float: left;
        .cinema-item-text {
          height: 30px;
          background-color: hsla(0, 0%, 96%, 0.6);
          line-height: 14px;
          border-radius: 3px;
          box-sizing: border-box;
          font-size: 13px;
          padding: 8px 12px;
        }
      }
    }
    ul:before {
      content: "";
      display: table;
    }
  }
  .cinema-search-result {
    z-index: 3004;
    position: absolute;
    top: 49px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    height: calc(100vh - 49px);
    width: 100vw;
    overflow-y: auto;
    ul {
      padding-left: 15px;
      li {
        height: 45px;
        position: relative;
        background-color: #fff;
        padding: 15px;
        padding-left: 0;
        .cinema-item-wrap {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .cinema-info-lf {
            width: calc(100% - 65px);
            text-align: left;
            .cinema-name {
              color: #191a1b;
              font-size: 15px;
            }
            .cinema-address {
              color: #797d82;
              font-size: 12px;
              margin-top: 5px;
            }
            span {
              display: block;
              width: 100%;
              overflow: hidden;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .cinema-info-rt {
            width: 65px;
            text-align: right;
            .price-fmt {
              font-size: 15px;
              color: #ff5f16;
              height: 0 !important;
              display: inline-table !important;
              i {
                font-size: 11px;
                font-style: normal;
              }
            }
            .price-fmt,
            .price-fmt span {
              float: none !important;
            }
            .upon {
              color: #ff5f16;
              font-size: 10px;
            }
            .cinema-gpsAddress {
              display: block;
              font-size: 11px;
              color: #797d82;
              margin-top: 5px;
            }
          }
        }
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
    .empty-result {
      position: absolute;
      top: 107px;
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
      .empty-list-tip {
        font-size: 11px;
        padding: 0 22vw;
      }
    }
  }
}
</style>
