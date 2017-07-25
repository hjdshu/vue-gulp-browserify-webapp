import Share from './Share.vue';
import Vue from 'vue';
import router from './router/router.js'

new Vue({
  el:'#share',
  render:function (parm) {
    return parm(Share)
  }
});