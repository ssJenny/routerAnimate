<template>
  <div>
    <transition :enter-active-class="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  let vm
  export default {
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'animated slideInRight'

      } else {
        this.transitionName = 'animated slideInLeft'
      }
      console.log(this.transitionName)
      this.$router.isBack = false
      next()
    },
    created() {
      vm = this
    }
  }
</script>

<style scoped>
  .child-view {
    position: absolute;
    width:100%;
    height: 100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }

</style>
