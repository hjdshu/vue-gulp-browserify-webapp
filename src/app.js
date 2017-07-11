import App from './App.vue';
import Vue from 'vue';
import router from './router/router.js'

new Vue({
  el:'#app',
  router,
  render:function (parm) {
    return parm(App)
  }
});