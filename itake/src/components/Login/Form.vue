<template>
  <div class="login-fondo">
    <b-container >
      <b-row class="justify-content-center pt-5  mr-1 ">
        <div  class="col-md-4 formulario">
          <b-form >
            <b-form-group class="text-center pt-3">
              <h2>Iniciar Sesión</h2>
            </b-form-group>

            <b-form-group class="mx-sm-4 ">
              <b-form-input
                type="text"
                placeholder="Ingresa tu email"
                v-model="email"
              ></b-form-input>
            </b-form-group>

            <b-form-group class="mx-sm-4 ligth">
              <b-form-input
                type="password"
                placeholder="Please input password"
                v-model="password"
              ></b-form-input>
            </b-form-group>

            <b-form-group class="pb-5">
              <b-button  class="mx-sm-4  ingresar"  variant="warning" @click="login">Ingresar</b-button>
            </b-form-group>
          </b-form>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (accept) => {
            this.$router.push({ name: "Home" });
              alert("Iniciaste Sesión ");
          },
          (reject) => {
          }   
        );    
    },
 
  },
}

</script>

