import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Blog from "../views/Blog.vue";
import Busqueda from "../views/Busqueda.vue";
import Firebase from 'firebase'
import NotFound from "../components/NotFound.vue";
import Adopta from "../views/Adopta.vue"
import Registro from "../views/Registro.vue";


Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: {
      login: true
    }
  },
  {
    path: "/busqueda",
    name: "Busqueda",
    component: Busqueda,
  },
  {
    path: "/adopta",
    name: "Adopta",
    component: Adopta,
    meta: {
      login: true
    }
  },
  {
    path: "/registro",
    name: "Registro",
    component: Registro,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
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
     next("Home");
  } else {
    next();
  }
});
export default router;