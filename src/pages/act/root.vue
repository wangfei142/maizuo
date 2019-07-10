<template>
  <div id="act" class="page">
    <div class="about">
      <div class="btn">
        <a href="#/" class="router-link-active">
          <i class="van-icon van-icon-arrow-left" style="font-size: 20px;">
            <!---->
          </i>
        </a>
      </div>
      <div class="imgg imgc">
        <img src="https://mall.s.maizuo.com/70a1296a6a755c1a90c651d97c1a3a50.jpg" alt />
        <img src="https://mall.s.maizuo.com/79d4658c2cc108d9305b0325c59aaeb5.jpg" alt />
        <img src="https://mall.s.maizuo.com/3be2f58c7f10146c7ba69bae43c005ac.jpg" alt />
        <img src="https://mall.s.maizuo.com/aa105aab86d1f2898c6b61283bd06cb3.jpg" alt />
        <img src="https://mall.s.maizuo.com/770479e6b17bc9fb6d55f27bb6944f53.jpg" alt />
        <img src="https://mall.s.maizuo.com/38564bce4b4bdf0fee102e5a4a93814a.jpg" alt />
        <img src="https://mall.s.maizuo.com/c7e2475cb7b60aa5ae33e7f333a33943.jpg" alt />
        <img src="https://mall.s.maizuo.com/99b72b042091e7934dbc291ecee51773.jpg" alt />
        <img src="https://mall.s.maizuo.com/ba189ac6a64004db8de3c2b64d92090e.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
#act {
  display: flex;
  flex-direction: column;
  height: 100%;

  > div:first-child {
    flex: 1;
    overflow-y: auto;
  }
  .btn {
    width: 100%;
    position: relative;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 10px;
    position: fixed;
    top: 0;
    background: #fff;
  }
  .btn:before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 1px;
    background: #ededed;
    transform: scaleY(0.5);
  }
  .imgc {
    margin: 40px 0;
  }
  .imgg img {
    width: 100%;
  }
}
</style>
