<template>
  <div class="page-main home">
    <div class="container">
      <div class="">A Vue webapp : {{msg}}</div>

      <div  class="turn" @click="go_act()" href="">go ACT page</div>

      <img class="ex" src="./static/images/test.jpeg" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    name:'home',

    components:{
    },
    data() {
      return {
        msg:'no use webpack,just gulp+browserify!!'
      }
    },
    methods:{
      go_act(){
        this.$router.push({name:'Act'})
      },
    }
  }
</script>

<style scoped rel="stylesheet/less" lang="less">
  .home {

    .turn{
      color: blue;
      margin: 40px auto;
    }
    .ex{
      width: 350px;
    }
  }
</style>