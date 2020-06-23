<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
         <router-link to="/">Home </router-link> 

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
      <router-link to="/busqueda">Búsqueda </router-link> 
      <router-link to="/blog">Blog </router-link> 
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
      <router-link to="/login">Login </router-link> 
            <b-dropdown-item @click="logout()">Sign Out</b-dropdown-item>
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
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(resolve => {
          this.$router.push("/Login");
          console.log("Cerraste la sesión");
        })
        .catch(reject => {
          console.log(reject);
        });
    }
  }
};
</script>
