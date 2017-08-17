<template>
  <div class="pageA">
    A
    <li><router-link to="/pageB">pageB</router-link></li>
  </div>
</template>
<script>
  let vm
  export default {

    data() {
      return {
        vuegConfig: {
          forwardAnim: this.$store.state.page.forwardAnim,
          backAnim: this.$store.state.page.backAnim,
          duration: this.$store.state.page.duration,
          disable:false
        }
      }
    },
    created() {
      vm = this
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .pageA{

    background-color: aqua;
  }
</style>
