<template>
  <div>
   <h1>Esta es la página para que gestiones la adopción de tu nueva mascota</h1>
<p>**RESULTADO DE FAVORITOS**</p>   
IMG FAVORITOOO
   <h2>Necesitamos Saber ...</h2>

   <div id="info">
    <h3>Ingresa tu nombre completo</h3>
    <b-form-input type="text" placeholder="Ingresa tu nombre completo" v-model="name"></b-form-input>
    <h3>Ingresa tu dirección </h3>
    <b-form-input type="text" placeholder="Ingresa tu dirección" v-model="direccion"></b-form-input>
       <h3>Ingresa tu Rut </h3>
    <b-form-input type="text" placeholder="Ingresa tu Rut" v-model="rut"></b-form-input>
       <h3>Ingresa tu correo </h3>
    <b-form-input type="text" placeholder="Ingresa tu email" v-model="correo"></b-form-input>
      <h3>Ingresa tu número de celular </h3>
    <b-form-input type="text" placeholder="Ingresa tu número de celular" v-model="celular"></b-form-input>
      <h3>Ingresa el nombre para tu mascota </h3>
    <b-form-input type="text" placeholder="Ingresa el nombre para tu mascota" v-model="bautizo"></b-form-input>
      <b-button variant="warning">¡Vamos por tu nuevo amigo!</b-button>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Gestion',
data(){
  return{
     name: '',
      direccion: '',
      rut: '',
      correo:'',
      celular: '',
      bautizo: '',
  }
    }
    
}
</script>