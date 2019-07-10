<template>
  <div id="film" class="wrapper" ref="wrapper">
    <div class="film-header" :class="{ filmHeader:falgheader }">
      <div class="goBack" @click="goBack" v-if="!flagPhotos">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt
        />
      </div>
      <div class="goBack" @click="flagPhotos = !flagPhotos" v-else>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt
        />
      </div>

      <div class="title" v-if="!flagPhotos">{{FilmDetails.name}}</div>
      <div class="title" v-else>剧照 ({{FilmDetails.photos ? FilmDetails.photos.length : ''}})</div>
    </div>
    <div class="topIMg">
      <img :src="FilmDetails.poster" alt />
    </div>
    <div class="film-details">
      <div class="fiml-name-d">
        <span>{{ FilmDetails.name }}</span>
        <em>{{ FilmDetails.filmType ? FilmDetails.filmType.name :''}}</em>
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
        <p ref="titHeight" :class="{hidde:flagtitle}" class="transi">{{ FilmDetails.synopsis }}</p>
        <p class="title-flag" @click="flagtitlefun">
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
        <p class="noPhotos" v-if=" (FilmDetails.photos ? FilmDetails.photos.length : 0) == 0">暂无电影剧照</p>
        <i
          class="photos-to-all"
          @click="flagPhotos = !flagPhotos"
          v-if=" (FilmDetails.photos ? FilmDetails.photos.length : 0) > 0"
        >全部({{FilmDetails.photos ? FilmDetails.photos.length : ''}}) ></i>
      </div>
      <div class="photos-list">
        <ul>
          <li v-for="(photo,index) in FilmDetails.photos" :key="index">
            <img :src="photo" alt  @click="bgImg"/>
          </li>
        </ul>
      </div>
    </div>
    <a href="javascript:;" style="height: 49px; position: fixed; bottom: 0px; width: 100%;">
      <div class="goSchedule">选座购票</div>
    </a>
    <div class="album-zone" v-if="flagPhotos">
      <div class="all-photos">
        <div class="photo-context" v-for="(photo,index) in FilmDetails.photos" :key="index">
          <img :src="photo" class="target-img" @click="bgImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ImagePreview} from "vant";
export default {
  data() {
    return {
      flagPhotos: false,
      filmId: 4682,
      FilmDetails: [],
      flagtitle: true,
      falgheader: false,
      falgGrade: false,
      premiereAt: "",
      ImagePreview:[]
    };
  },
  created() {
    this.getFilmDetails();
  },
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    getFilmDetails() {
      axios
        .get(
          `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=2819284`,
          {
            headers: {
              "X-Client-Info":
                '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605781127614977018611"}',
              "X-Host": "mall.film-ticket.film.info"
            }
          }
        )
        .then(response => {
          if (response.data.status === 0) {
            this.FilmDetails = response.data.data.film;
            this.ImagePreview = this.FilmDetails.photos; 
            let now = new Date(this.FilmDetails.premiereAt * 1000);
            let year = now.getFullYear();
            let month = now.getMonth() + 1;
            let date = now.getDate();
            this.premiereAt = year + "-" + month + "-" + date;
            if (this.FilmDetails.grade) {
              this.falgGrade = true;
            }
          }
        });
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 70 || this.flagPhotos == true) {
        this.falgheader = true;
      } else {
        this.falgheader = false;
      }
    },
    flagtitlefun() {
      this.flagtitle = !this.flagtitle;
      this.$refs.titHeight.style.height =
        this.$refs.titHeight.scrollHeight + "px";
    },
    goBack() {
      this.$router.go(-1);
    },
    bgImg() {
      ImagePreview(this.ImagePreview)
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
      font-size: 13px;
      color: #797d82;
      margin-top: px2rem(5);
    }
    .hidde {
      height: 38px !important;
      overflow: hidden;
    }
    .transi {
      transition: all 0.5s ease;
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
      .noPhotos {
        font-size: 14px;
        color: #bdc0c5;
        margin: auto;
        text-align: center;
        height: 115px;
        line-height: 96px;
      }
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
  .album-zone {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    background-color: #fff;
    .all-photos {
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: wrap;
      .photo-context {
        width: calc((100% - 4px) / 2);
        height: calc((100% - 3px) / 3);
        margin-bottom: 1.5px;
        background-size: 80px;
        background-position: 50%;
        background-repeat: no-repeat;
        margin-right: 1.5px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
