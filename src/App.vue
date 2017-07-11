<template>
  <div class="app">
    <router-view></router-view>
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

<style scoped rel="stylesheet/less" lang="less">
.app{
  a{
    color: red;
  }
  b{
    color: red;
    i{
      color:green;
    }
  }
}
</style>