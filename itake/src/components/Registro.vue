<template>
    <div>
    <h1>Bienvenido a</h1>
    <h2>Para navegar por el sitio necesitas logearte</h2>
    <h3>Ingresa tu correo</h3>
    <b-form-input type="text" placeholder="Ingresa tu email" v-model="email"></b-form-input>
    <h3>Ingresa tu contraseña</h3>
    <b-form-input type="text" placeholder="Please input password" v-model="password"></b-form-input>
    <b-button variant="warning" @click="login">Ingresar</b-button>
  </div>
</template>



<script>
import Firebase from "firebase";
export default{
    data() {
        return {
            email:"",
            password:"",
        };
    },
methods: {
    login() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          accept => {
            this.$router.push({ name: "Home" });
          },
          reject => {
            alert("No estas logueado");
          }
        );
    }
  },
    }

</script>