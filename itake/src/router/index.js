import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Blog from "../views/Blog.vue";
import Collage from "../components/Collage.vue"; // Hija
import Navbar from "../components/Navbar.vue"; // Hija
import Registro from "../components/Registro.vue"; //Hija 
import Firebase from 'firebase'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: {
      login: true
    }
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  console.log("Usuario => " + user);
  let authRequired = to.matched.some(route => route.meta.login);
  if (!user && authRequired) {
    next("login");
  } else if (user && !authRequired) {
    from.name == to.name ? false : next({ name: "Blog" });
  } else {
    next();
  }
});

export default router;
