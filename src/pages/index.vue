<template>
  <div id="films" class="page">
    <keep-alive>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </keep-alive>
    <app-tabs></app-tabs>
  </div>
</template>

<script>
import Tabs from "../components/Tabs";
export default {
  components: {
    [Tabs.name]: Tabs
  }
};
</script>

<style lang="scss" >
#films {
  display: flex;
  flex-direction: column;
  height: 100%;

  > div:first-child {
    flex: 1;
    overflow-y: auto;
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>