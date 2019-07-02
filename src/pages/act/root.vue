<template>
  <div id="act" class="page">
<p>123</p>
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
}
</style>
