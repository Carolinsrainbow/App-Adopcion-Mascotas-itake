<template>
  <div class="Registro">
    <b-container>
      
      <h1>Bienvenido a iTake</h1>
      <h2>Para navegar por el sitio necesitas logearte</h2>
      <div id="inicio">
        <h3>Ingresa tu nombre</h3>
        <b-form-input
          type="text"
          placeholder="Ingresa tu nombre"
          v-model="name"
        ></b-form-input>
        <h3>Ingresa tu correo</h3>
        <b-form-input
          type="text"
          placeholder="Ingresa tu email"
          v-model="email"
        ></b-form-input>
        <h3>Ingresa tu contraseña</h3>
        <b-form-input
          type="text"
          placeholder="Please input password"
          v-model="password"
        ></b-form-input>
        <b-form-group class="pb-5">
        <b-button class="mx-sm-4  ingresar" variant="warning" @click="registrar">Ingresar</b-button>
 </b-form-group>
      </div>
    </b-container>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  name: "Registrar",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    }
  },
 methods: {
    registrar () {
    Firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user => {
      
      alert(`Cuenta creada ${this.name}`);
      this.$router.push("/busqueda");    
    },
    err => {
      alert(err.message);
    });
  }
 }
  };
</script>