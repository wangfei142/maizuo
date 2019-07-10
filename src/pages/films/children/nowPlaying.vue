<template>
  <van-list v-model="filmLoading" :finished="isFinished" :immediate-check="true" finished-text="没有更多了" @load="getFilmList">
    <div class="nowPlaying">
      <ul>
        <!-- item.filmId -->
        <li class="filmLi" v-for="(item , index) in filmList" :key="index" style=" position: relative;">
          <router-link :to="'/film/' + item.filmId" class="filmA">
            <div>
              <img class="filmImg" :src="item.poster" alt srcset />
            </div>
            <ol class="film-main">
              <li class="film-name">
                <span>{{ item.name }}</span>
                <i>{{ item.filmType.name }}</i>
              </li>
              <li class="film-grade">
                <span>观众评分</span>
                <i>{{ item.grade }}</i>
              </li>
              <li class="film-actors">
                主演:
                <span v-for="actor in item.actors" :key="actor.name">
                  <i>&nbsp;{{ actor.name }}</i>
                </span>
              </li>
              <li class="film-nation">{{ item.nation }} | {{ item.runtime }}分钟</li>
            </ol>
            <div class="buy-ticket">购票</div>
          </router-link>
        </li>
      </ul>
    </div>
  </van-list>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "now-playing",

  data() {
    return {
      filmList: [],
      pageNum: 1,
      filmLoading: false,
      cityId: 440300,
      total : 1,
      pageSize: 10, 
    };
  },
  computed: {
    // 总的页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },

    // 是否还有更多数据, 为true代表没有更多
    isFinished() {
      return this.pageNum > this.totalPage;
    }
  },
  // created() {
  //   this.getFilmList();
  // },
  methods: {
    getFilmList() {      
      Toast.loading({ duration: 0, mask: true, message: "加载中..." });
      axios
        .get("https://m.maizuo.com/gateway", {
          params: {
            cityId: this.cityId,
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            type: 1,
            k: 66161
          },
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156194886142949673108"}',
            "X-Host": "mall.film-ticket.film.list"
          }
        })
        .then(response => {
          if (response.data.status === 0) {
            this.total = response.data.data.total
            this.filmList = [...this.filmList, ...response.data.data.films];
          } else {
            Toast(res.msg);
          }
          this.filmLoading = false;
          this.pageNum = this.pageNum + 1;
          Toast.clear();
        });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/common/px2rem.scss";
.nowPlaying {
  .filmLi {
    margin: 0 auto;
    width: px2rem(360);
    height: px2rem(124);
    padding: px2rem(15) px2rem(7) px2rem(15) px2rem(8);
    box-sizing: border-box;
    .film-main {
      width: px2rem(210);
      margin-left: px2rem(8);
      .film-name {
        margin-top: px2rem(3);
        max-width: calc(100% - 25px);
        color: #191a1b;
        font-size: 16px;
        height: px2rem(22);
        line-height: px2rem(22);
        margin-right: px2rem(5);
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        i {
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: px2rem(14);
          line-height: px2rem(14);
          padding: 0 px2rem(2);
          border-radius: 2px;
        }
      }
      .film-grade {
        font-size: 13px;
        margin-top: px2rem(3);
        color: #797d82;
        i {
          color: #ffb232;
          font-size: 14px;
        }
      }
      .film-actors {
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        font-size: 13px;
        margin-top: px2rem(3);
        color: #797d82;
        span {
          font-size: 13px;
          margin-top: px2rem(3);
          color: #797d82;
        }
      }
      .film-nation {
        font-size: 13px;
        margin-top: px2rem(2);
        color: #797d82;
      }
    }
    .filmA {
      width: px2rem(345);
      height: px2rem(94);
      display: block;
      display: flex;
      .buy-ticket {
        line-height: 25px;
        height: px2rem(25);
        width: px2rem(50);
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: relative;
        box-sizing: border-box;
        margin-top: px2rem(35);
        margin-left: px2rem(10);
      }

      .buy-ticket:after {
        content: " ";
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        position: absolute;
        border: 1px solid #ff5f16;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        border-radius: 4px;
        box-sizing: border-box;
      }
      .filmImg {
        width: px2rem(66);
        height: 92px2rem (92) px;
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
    transform: scaleY(0.2);
  }
}
</style>

