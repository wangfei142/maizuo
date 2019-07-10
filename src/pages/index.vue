<template>
  <keep-alive>
    <div id="films" class="page">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
      <app-tabs></app-tabs>
    </div>
  </keep-alive>
</template>

<script>
import {mapActions} from "vuex";
import Tabs from "../components/Tabs";
export default {
  components: {
    [Tabs.name]: Tabs
  },
  methods:{
    ...mapActions("city", ["getCities"]),
  },
  created(){
    this.getCities()
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
