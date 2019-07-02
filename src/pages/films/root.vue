<template>
  <div id="films" class="page">
    <Banner></Banner>
  </div>
</template>

<script>
import Banner from "./children/banner";
export default {
  components: {
    Banner
  },
  methods: {
 
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
</style>