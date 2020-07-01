<template>
  <div id="Navbar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/">Home</router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/busqueda">Búsqueda</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/adopta">Mis Adopciones</router-link>
          </b-nav-item>
      
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
           <b-nav-item v-if="existe">
            <router-link  to="/blog">Blog</router-link>
          </b-nav-item>
          <b-nav-item v-else >
            <router-link  to="/registro">Registrate</router-link>
          </b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template   v-slot:button-content>
              <em v-if="existe">Usuario</em>
              <em v-else>Ingresa</em>
            </template>
            <b-nav-item></b-nav-item>
            <div id="usuario" >
              <b-dropdown-item  >
              <b-dropdown-item v-if="existe"  @click="logout()">Sign Out</b-dropdown-item>
                <router-link v-else  to="/login">Login</router-link>
              </b-dropdown-item>
              </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

 <script>
import { mapGetters } from "vuex";
import Firebase from "firebase";

export default {
  name: "Navbar",
  data() {
    return{
existe: null
    }
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(resolve => {
          this.$router.push("/Login");
          alert("Cerraste la sesión");
        })
        .catch(reject => {
          console.log(reject);
        });
    }
  },
  created (){
    Firebase.auth().onAuthStateChanged(existe =>{
      if(existe){
        this.existe = existe
      }else{
        this.user = null
      }
    })
  }
};
</script>

