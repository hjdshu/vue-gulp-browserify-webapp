<template>
  <div class="act page-main">
    <div class="container">
      <div class="">ACT RULE PAGE: {{msg}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  console.log($)
  export default{
    name:'act',
    components:{
    },
    data:function () {
      return {
        msg:'a act rule page？'
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