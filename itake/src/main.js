import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Incorporamos Boostrap 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

// Swal
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

// Firebase
import Firebase from "firebase";
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBuKQ47xEAjdxy9l_BYFxUufRN9K_Ym6Dc",
  authDomain: "itake-1436f.firebaseapp.com",
  databaseURL: "https://itake-1436f.firebaseio.com",
  projectId: "itake-1436f",
  storageBucket: "itake-1436f.appspot.com",
  messagingSenderId: "951711437113",
  appId: "1:951711437113:web:348adb4de47d5dd2c158e8"
};

Firebase.initializeApp(firebaseConfig)

// let auth = Firebase.auth();
// let db = Firebase.firestore();
// db.collection('coleccionsito').doc('').onSnapshot( )
// let Fire = new Vue({
// data:{

// },
// methods:{
//   state(collback){
//     auth.onAuthStateChanged(function(user){
//       collback(user);
//     })
//   }
// }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
