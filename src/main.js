import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/index';
import i18n from '@/i18n/i18n.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
