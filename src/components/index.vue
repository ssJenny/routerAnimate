<template>

  <div class="index">
    <ul>
      <li><router-link to="pageA">pageA</router-link></li>
      <li><router-link to="pageB">pageB</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',

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
