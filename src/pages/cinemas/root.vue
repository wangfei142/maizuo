<template>
    <div id="cinemas" class="page">
        <router-view></router-view>
    </div>
     
</template>

<script>

import Tabs from '../../components/Tabs'
export default {
  components: {
      [Tabs.name]: Tabs
    },
}
</script>

<style lang="scss">
#cinemas {
  display: flex;
  flex-direction: column;
  height: 100%;
  
  >div:first-child {
    flex: 1;
    overflow-y: auto;
  }
}
</style>