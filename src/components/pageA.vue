<template>
  <div class="pageA">

  </div>
</template>
<script>
  let vm
  export default {

    created() {
      vm = this
    },
    methods: {
      goBack() {
        vm.$router.goBack()
      }
    }
  }
//  window.addEventListener('hashchange', function(ev){
//
//    console.log(ev)
//  });


  window.addEventListener('popstate', function(e) {

    console.log(e.state)
    if (e.state) {
      //侦测是用户触发的后退操作, dosomething
      //这里刷新当前url
      console.log('回退')
      vm.goBack()
    }
  }, false);
</script>

<style scoped lang="less" rel="stylesheet/less">
  .pageA{

    background-color: aqua;
  }
</style>
