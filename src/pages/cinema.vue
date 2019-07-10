<template>
  <div class="cinema">
    <div class="cinema-schedule">
      <div class="header-left" @click="goBack">
        <img src="../assets/styles/images/you.png" width="11px" height="18px" />
      </div>
      <img src="../assets/styles/images/del.png" width="17px" height="17px" style="display: none;" />
      <!-- xiugai -->
      <div class="header-title">保利国际影城北京天安门店</div>
      <div class="cinema-wrap" style>
        <div class="cinema-info" style>
          <div class="tags">
            <div class="tag">前台兑换</div>
            <div class="tag">儿童票</div>
            <div class="tag">停车</div>
            <div class="tag">3D眼镜</div>
            <i class="tag-more" style="font-size: 10px;">></i>
          </div>
          <div class="address">
            <img src="../assets/styles/images/weizhi.png" width="14px" height="21px" alt />
            <div class="address-des">北京市西城区前门煤市街北京坊C1区，B1\B2层</div>
            <a href="tel:010-63015188" class="tel-icon">
              <img src="../assets/styles/images/phone.png" width="17px" height="18px" alt />
            </a>
          </div>
        </div>
      </div>

      <div class="service-info" style="display: none;">
        <div class="services">
          <div class="detail clearfix">
            <div class="left">前台兑换</div>
            <div class="right">该影院支持卖座卡前台兑换，您可前往影院服务台，出示卖座卡卡号和密码，凭卡换取纸质电影票，入场观影。</div>
          </div>
          <div class="detail clearfix">
            <div class="left">儿童票</div>
            <div class="right">1.3米以下儿童观看2D/3D影片免票无座，一位成人限带一名</div>
          </div>
          <div class="detail clearfix">
            <div class="left">停车</div>
            <div class="right">商业地下停车场650余个位置</div>
          </div>
          <div class="detail clearfix">
            <div class="left">3D眼镜</div>
            <div class="right">免押金提供成人3D眼镜，观影完毕后需归还。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.cinema {
  .cinema-schedule {
    overflow: hidden;
    padding-top: 44px;
    background: #fff;
  }
  .header-left {
    position: fixed;
    top: 0;
    height: 44px;
    line-height: 44px;
    padding-left: 15px;
    z-index: 303;
    img {
      vertical-align: middle;
    }
  }
  .fix-header-title {
    // position: fixed;
  }
  .header-title {
    position: relative;
    text-align: center;
    font-size: 17px;
    color: #191a1b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    padding: 0 15px;
    background: #fff;
    top: 0;
    height: 44px;
    line-height: 44px;
    z-index: 302;
  }

  .service-info {
    position: fixed;
    top: 88px;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    overflow: auto;
    z-index: 301;
    .services {
      padding: 0 30px;
      .detail {
        margin-top: 20px;
        color: #797d82;
        .left {
          position: relative;
          display: inline;
          float: left;
          height: 100%;
          text-align: center;
          padding: 0 6px;
          margin: 0 2.5px;
          font-size: 10px;
          color: #ffb232;
        }
        .left:after {
          content: " ";
          transform: scale(0.5);
          position: absolute;
          border: 1px solid #ffb232;
          top: -50%;
          right: -50%;
          bottom: -50%;
          left: -50%;
          border-radius: 4px;
          border-radius: 1px;
        }
        .right {
          padding: 0 0 0 70px;
          line-height: 15px;
        }
      }
    }
  }
  .cinema-wrap {
    .cinema-info {
      .tags {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        color: #ffb232;
        overflow: hidden;
        position: relative;
        padding: 5px 0 15px;
        .tag {
          position: relative;
          padding: 0 6px;
          margin: 0 2.5px;
          font-size: 10px;
        }
        .tag-more {
          margin-left: 5px;
          color: #ffb232;
        }
        .tag:after {
          content: " ";
          -webkit-transform: scale(0.5);
          -ms-transform: scale(0.5);
          transform: scale(0.5);
          position: absolute;
          border: 1px solid #ffb232;
          top: -50%;
          right: -50%;
          bottom: -50%;
          left: -50%;
          border-radius: 4px;
          border-radius: 1px;
        }
      }
      .tags:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #ededed;
        color: #ededed;
        -webkit-transform-origin: 0 100%;
        -ms-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        -ms-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
      .address {
        height: 50px;
        position: relative;
        display: flex;
        padding-left: 17px;
        align-items: center;
        .address-des {
          color: #333;
          font-size: 14px;
          height: 20px;
          padding: 0 12px;
          flex: 1;
          position: relative;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .address-des:after {
          content: " ";
          position: absolute;
          right: 0;
          top: 0;
          width: 1px;
          bottom: 0;
          border-right: 1px solid #ededed;
          color: #ededed;
          transform-origin: 100% 0;
          transform: scaleX(0.5);
        }
        .tel-icon {
          height: 18px;
          padding: 0 25px;
        }
      }
    }
  }
}
</style>

