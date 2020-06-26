<template>
    <div>
      <b-container>
    <h1>Bienvenido a</h1>
    <h2>Para navegar por el sitio necesitas logearte</h2>
    <div id="inicio">
    <h3>Ingresa tu nombre</h3>
    <b-form-input type="text" placeholder="Ingresa tu nombre" v-model="name"></b-form-input>
    <h3>Ingresa tu correo</h3>
    <b-form-input type="text" placeholder="Ingresa tu email" v-model="email"></b-form-input>
    <h3>Ingresa tu contraseña</h3>
    <b-form-input type="text" placeholder="Please input password" v-model="password"></b-form-input>
    <b-button variant="warning" @click="registrar" >Ingresar</b-button>
    </div>
  </b-container>
  </div>
</template>
<script>
import Firebase from "firebase";

export default{
     data() {
        return {
            name:"",
           email:"",
            password:"",
        };
    },
methods: {
  registrar() {

    Firebase.auth().createUserWithEmailAndPassword(this.email, thi.password).then(data =>{
      data.user.updateProfile({
        displayName:this.name
      })
      .then(() => {});
    })
    .catch(err => { this.error = err.message;});
  }
}
    }

</script>