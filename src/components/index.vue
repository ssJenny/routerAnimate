<template>

  <div class="index">
    <ul>
      <li><router-link to="/pageA">pageA</router-link></li>
      <li><router-link to="/pageB">pageB</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>

  .index{
    height: 100%;
    background-color: aquamarine;
  }
  li{
    text-align: center;
  }
</style>
