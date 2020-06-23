import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Firebase from 'firebase'

//Incorporamos Boostrap 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const firebaseConfig = {
};


Firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
