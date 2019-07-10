<template>
  <div id="app">
    <keep-alive>
     <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </keep-alive>
     
  </div>
</template>



<script>
// import { mapActions } from "vuex";
// export default {
//   data() {
//     return {};
//   }
//   ,

//   methods:{
//     ...mapActions("cinemas", ["getCinemasList"])
//   },
//     created() {
//     this.getCinemasList();
    
//   }
// };
</script>

<style scoped>

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
