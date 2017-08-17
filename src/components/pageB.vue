<template>
  <div class="pageB">

    B
  </div>
</template>
<script>
  export default {

    data() {
      return {
        vuegConfig: {
          forwardAnim:'touchPoint',
          backAnim: this.$store.state.page.backAnim,
          duration: this.$store.state.page.duration,
          disable:false
        }
      }
    },
    created() {
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .pageB{

    background-color: coral;
  }
</style>
