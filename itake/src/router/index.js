import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Blog from "../views/Blog.vue";
import Collage from "../components/Collage.vue"; // Hija
import Busqueda from "../views/Busqueda.vue";
import Firebase from 'firebase'
import NotFound from "../components/NotFound.vue"; 


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
  },
  {
    path: "/busqueda",
    name: "Busqueda",
    component: Busqueda,
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
export default router;