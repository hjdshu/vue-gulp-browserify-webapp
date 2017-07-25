<template>
  <div class="act page-main">
    <div class="container">
      <div class="">ACT RULE PAGE: {{msg}}</div>
      <div class="new_msg">111222333+{{new_msg}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    name:'act',
    components:{
    },
    data:function () {
      return {
        msg:'a act rule pages？',
        new_msg:2224444,
      }
    }
  }
</script>

<style scoped rel="stylesheet/less" lang="less">
  .act {
    a {
      color: red;
    }
  }
</style>