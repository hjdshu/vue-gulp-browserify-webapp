<template>
  <div class="act">
    <div class="">规则啊{{msg}}</div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    name:'act',
    components:{
    },
    data:function () {
      return {
        msg:'规则是这样吗？'
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