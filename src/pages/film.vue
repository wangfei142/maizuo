<template>
  <div id="film" class="wrapper" ref="wrapper">
    <div class="film-header" :class="{ filmHeader:falgheader }">
      <div class="goBack">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt
        />
      </div>
      <div class="title">{{FilmDetails.name}}</div>
      <!---->
    </div>
    <div class="topIMg">
      <img :src="FilmDetails.poster" alt />
    </div>
    <div class="film-details">
      <div class="fiml-name-d">
        <span>{{ FilmDetails.name }}</span>
        <em>{{ FilmDetails.filmType.name }}</em>
        <i v-if="falgGrade">
          {{ FilmDetails.grade }}
          <s>分</s>
        </i>
      </div>
      <div class="film-category-d grey-text">{{ FilmDetails.category }}</div>
      <div class="film-releaseDate-d grey-text">
        <span>{{ premiereAt }}上映</span>
      </div>
      <div class="film-nation-d grey-text">{{ FilmDetails.nation }} | {{ FilmDetails.runtime }}分钟</div>
      <div class="film-synopsis-d grey-text">
        <p
          :class="{hidde:flagtitle}"
          class="transi"
          style="min-height: 10px"
        >{{ FilmDetails.synopsis }}</p>
        <p class="title-flag" @click="flagtitle = !flagtitle">
          <img
            :class="{upper:!flagtitle}"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
            alt
          />
        </p>
      </div>
    </div>
    <div class="film-actor">
      <div class="film-actor-bar">
        <span>演职人员</span>
      </div>
      <div class="film-actor-tit">
        <ul class="film-actor-tit-ul">
          <li v-for="(actor,index) in FilmDetails.actors" :key="index">
            <p class="actor-poto">
              <img :src="actor.avatarAddress" alt />
            </p>
            <p class="actor-name">{{ actor.name }}</p>
            <p class="actor-role">{{ actor.role }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="film-stagePhoto">
      <div class="photos-title-bar">
        <span class="photos-title-text">剧照</span>
        <i class="photos-to-all">全部({{FilmDetails.photos.length}}) ></i>
      </div>
      <div class="photos-list">
        <ul>
          <li v-for="(photo,index) in FilmDetails.photos" :key="index">
            <img :src="photo" alt />
          </li>
        </ul>
      </div>
    </div>
    <a href="javascript:;" style="height: 49px; position: fixed; bottom: 0px; width: 100%;">
      <div class="goSchedule">选座购票</div>
    </a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      filmId: 4682,
      FilmDetails: [],
      flagtitle: true,
      falgheader: false,
      falgGrade: false,
      premiereAt: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.filmId = to.params.id;
      vm.getFilmDetails(vm.filmId);
    });
  },
  created() {},
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件
  },
  methods: {
    getFilmDetails(that) {
      axios
        .get(`https://m.maizuo.com/gateway?filmId=${that}&k=2819284`, {
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605781127614977018611"}',
            "X-Host": "mall.film-ticket.film.info"
          }
        })
        .then(response => {
          if (response.data.status === 0) {
            this.FilmDetails = response.data.data.film;
            this.FilmDetails.premiereAt;
            let now = new Date(this.FilmDetails.premiereAt*1000);
            let year = now.getFullYear();
            let month = now.getMonth() + 1;
            let date = now.getDate();
           this.premiereAt = year + "-" + month + "-" + date;
            if (this.FilmDetails.grade) {
              this.falgGrade = true;
            }
            console.log(this.FilmDetails);
            console.log(this.filmId);
          }
        });
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop)
      if (scrollTop > 100) {
        this.falgheader = true;
      } else {
        this.falgheader = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/common/px2rem.scss";
#film {
  height: px2rem(847);
  background-color: #f4f4f4;
  .film-header {
    position: fixed;
    background-color: hsla(0, 0%, 100%, 0);
    color: transparent;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    width: 100%;
    height: px2rem(44);
    z-index: 1;
    .goBack {
      height: px2rem(30);
      position: absolute;
      top: px2rem(5);
      left: px2rem(5);
      img {
        width: px2rem(30);
      }
    }
    .title {
      font-size: 17px;
      line-height: px2rem(44);
      width: 100vw;
      text-align: center;
    }
  }
  .filmHeader {
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    background-color: #fff;
    color: #191a1b;
  }
  .topIMg {
    img {
      width: px2rem(375);
      height: px2rem(210);
    }
  }
  .film-details {
    background-color: #fff;
    padding: px2rem(15);
    padding-top: px2rem(11);
    .fiml-name-d {
      width: px2rem(345);
      height: px2rem(26);
      line-height: px2rem(26);
      span {
        color: #191a1b;
        font-size: 18px;
        height: px2rem(24);
        line-height: px2rem(24);
        margin-right: px2rem(7);
        vertical-align: middle;
      }
      em {
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: px2rem(14);
        line-height: px2rem(14);
        padding: 0 px2rem(2);
        border-radius: 2px;
        display: inline-block;
        vertical-align: middle;
      }
      i {
        float: right;
        font-size: 18px;
        font-style: italic;
        width: calc(100% - 250px);
        text-align: right;
        color: #ffb232;
        s {
          font-size: 10px;
        }
      }
    }
    .grey-text {
      font-size: 14px;
      color: #797d82;
      margin-top: px2rem(5);
    }
    .hidde {
      height: 38px !important;
      overflow: hidden;
      transition: all 0.5s ease;
    }

    .transi {
      // height: 150px;
      transition: height 0.5s ease;
    }
    .film-synopsis-d {
      margin-top: px2rem(12);
      .title-flag {
        text-align: center;
        display: block;
        height: auto;
        width: px2rem(20);
        margin: auto;
        line-height: normal;
        // margin-top: px2rem(5);
        //  transition: height .5s ease;
        img {
          width: px2rem(8);
          margin: auto;
        }
        .upper {
          transform: rotate(180deg);
        }
      }
    }
  }
  .film-actor {
    margin-top: px2rem(10);
    background-color: #fff;
    &-bar {
      width: 100%;
      padding: px2rem(15);
      span {
        font-size: 18px;
        text-align: left;
        color: #191a1b;
        display: inline-block;
        height: px2rem(22.5);
        line-height: px2rem(22);
      }
    }
    &-tit {
      overflow-x: auto;
      overflow-y: hidden;
      height: px2rem(140);
      &-ul {
        display: flex;
        margin: 0;
        padding-left: px2rem(15);
        list-style: none;
        li {
          width: px2rem(85);
          min-width: px2rem(85);
          position: relative;
          margin-right: px2rem(10);
          .actor-poto {
            width: px2rem(85);
            height: px2rem(85);
            img {
              width: px2rem(85);
              height: px2rem(85);
            }
          }

          .actor-name {
            padding-top: px2rem(10);
            font-size: 13px;
            color: #191a1b;
            width: px2rem(85);
            height: px2rem(18);
            display: block;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
          }
          .actor-role {
            font-size: 11px;
            color: #797d82;
            text-align: center;
          }
        }
        li:last-child {
          padding-right: px2rem(15);
        }
      }
    }
  }
  .film-stagePhoto {
    margin-top: px2rem(10);
    margin-bottom: px2rem(50);
    background-color: #fff;
    // height: 200px;
    .photos-title-bar {
      height: px2rem(62);
      width: 100%;
      padding: px2rem(16);
      span {
        font-size: 16px;
        text-align: left;
        color: #191a1b;
        display: inline-block;
        height: px2rem(22.5);
        line-height: px2rem(22);
      }
      i {
        font-size: 13px;
        color: #797d82;
        float: right;
        display: inline-block;
        height: px2rem(22.5);
        line-height: px2rem(22);
      }
    }
    .photos-list {
      height: px2rem(115);
      overflow-x: auto;
      overflow-y: hidden;
      ul {
        margin-top: px2rem(5);
        padding-left: px2rem(15);
        display: flex;
        li {
          margin-right: px2rem(10);
          img {
            width: px2rem(150);
            height: px2rem(81);
          }
        }
        li:last-child {
          padding-right: px2rem(15);
        }
      }
    }
  }
  .goSchedule {
    position: fixed;
    bottom: 0;
    left: 0;
    height: px2rem(49);
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: px2rem(49);
  }
}
</style>
