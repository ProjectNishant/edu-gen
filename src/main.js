import Vue from 'vue'
import App from './App.vue'
// import VueTailwind from 'vue-tailwind'
import './assets/styles/index.css';

import VueRouter from 'vue-router'
import {routes} from './routing.js'
import {store } from './store/store'
import vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2';
import VueCountdownTimer from 'vuejs-countdown-timer';
// import bottomCard from './components/shared/bottomCard.vue'



import VueAnime from 'vue-animejs';
 
Vue.use(VueAnime)  
Vue.use(VueCountdownTimer);
// Vue.use(VueTailwind)


var VueTruncate = require('vue-truncate-filter')

Vue.use(vuelidate)

Vue.use(VueRouter);
Vue.use(VueTruncate)
Vue.use(VueSweetalert2);

export const bus = new Vue();

const router = new VueRouter({
   hashbang: false,
  routes,
  mode:'history'
  
})



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
