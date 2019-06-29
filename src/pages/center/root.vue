<template>
    <div id="center" class="page">
        <router-view></router-view>
        <app-tabs></app-tabs>
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
#center {
  display: flex;
  flex-direction: column;
  height: 100%;
  
  >div:first-child {
    flex: 1;
    overflow-y: auto;
  }
}
</style>