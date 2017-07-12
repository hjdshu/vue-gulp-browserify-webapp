<template>
  <div class="home">
    <img src="./static/images/test.jpeg" alt="">
    <a href="">{{msg}}</a>
    <b>粗体 <i>斜体11</i></b>
  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    name:'home',

    components:{
    },
    data:function () {
      return {
        msg:123456881
      }
    }
  }
</script>

<style scoped rel="stylesheet/less" lang="less">
  .home {
    a {
      color: red;
    }
  }
</style>