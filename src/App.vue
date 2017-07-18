<template>
  <div class="app">
    <transition name="slide-fade" model="out-in">
      <router-view></router-view>
    </transition>
    <Tips v-show="false"></Tips>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tips from './components/tips.vue'

  export default{
    name:'app',
    components:{
      Tips
    },
    data:function () {
      return {

      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  @import "./static/css/base.less";
</style>


<style scoped rel="stylesheet/less" lang="less">
.app{

  font-size: 40px;

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all 0.5s ease 0.2s;
    transform: translateX(0);
    opacity: 1;
  }
  .slide-fade-leave-active {
    transition: all 0.5s ease;
    transform: translateY(70px);
    opacity: 0;
  }

  .slide-fade-enter{
    transform: translateX(-70px);
    opacity: 0;
  }
  .slide-fade-leave{
    transform: translateY(0);
  }

}
</style>