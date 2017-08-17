<template>
  <div id="app">
    <router-view class="child-view"></router-view>
  </div>
</template>

<script>
  let vm
  export default {


  }
</script>

<style scoped>

  #app{
    height: 100%;
    width: 100%;
  }
  .child-view{
    width: 100%;
    height: 100%;
  }
</style>


