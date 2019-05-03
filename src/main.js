import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import { routes } from './routes';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import firebase from 'firebase';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
//  firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDGBlW7HqNpZyGyfaPESa2Vuj-pAyWv-10",
  authDomain: "login-vue-8335b.firebaseapp.com",
  databaseURL: "https://login-vue-8335b.firebaseio.com",
  projectId: "login-vue-8335b",
  storageBucket: "login-vue-8335b.appspot.com",
  messagingSenderId: "39152866475"
};
firebase.initializeApp(config);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


