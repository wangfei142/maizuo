<template>
  <div class="comingSoon">
    <ul>
      <li class="filmLi" v-for="item in filmList" :key="item.filmId">
        <a href="javascript:;" class="filmA">
          <div>
            <img class="filmImg" :src="item.poster" alt srcset>
          </div>
          <ol class="film-main">
            <li class="film-name">
              <span style="margin-right:4px;">{{ item.name }}</span>
              <i>{{ item.filmType.name }}</i>
            </li>
            <li class="film-actors">
              主演:
              <span v-for="actor in item.actors"
              :key="actor.filmId">
                <i>&nbsp;{{ actor.name }}</i>
              </span>
            </li>
            <li class="film-nation">上映日期：周二 7月2日</li>
          </ol>
          <div class="buy-ticket">预购</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "now-playing",

  data() {
    return {
      filmList: []
    };
  },
  created() {
    this.getFilmList();
  },
  methods: {
    getFilmList() {
      // $.ajax({
      //   url:
      //     "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=6808889",
      //   headers: {
      //     "X-Client-Info":
      //       '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605781127614977018611"}',
      //     "X-Host": "mall.film-ticket.film.list"
      //   },
      //   success: res => {
      //     if (res.status === 0) {
      //       this.filmList = res.data.films;
      //       console.log(res.data.films);
      //     }
      //   }
      // });
      axios
        .get(
          "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=6808889",
          {
            headers: {
              "X-Client-Info":
                '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605781127614977018611"}',
              "X-Host": "mall.film-ticket.film.list"
            }
          }
        )
        .then(response => {
          if (response.data.status === 0) {
            this.filmList = response.data.data.films;
            console.log(this.filmList);
          }
        });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../../../assets/styles/common/px2rem.scss";
.comingSoon {
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
        margin-top:  px2rem(3);
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

      .film-actors {
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        font-size: 13px;
        margin-top: px2rem(22);
        color: #797d82;
        span {
          font-size: 13px;
          margin-top: px2rem(5);
          color: #797d82;
        }
      }
      .film-nation {
        font-size: 13px;
        margin-top: px2rem(3);
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
        height: 92px2rem(92)px;
      }
    }
  }
}
</style>
