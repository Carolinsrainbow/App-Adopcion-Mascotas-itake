<template>
  <div>
    <h1>Esta es la página para que gestiones la adopción de tu nueva mascota</h1>
    <div>
      <b-card
        v-for="perro in getPerrosPorAdoptar"
        :key="perro"
        title="Card Title"
        :img-src="perro"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <!-- el perro de abajo sale del v-for  -->
        <button @click="alClickearEliminar(perro)">Eliminar</button>
      </b-card>
    </div>

    <h2>Necesitamos Saber ...</h2>

    <div id="info">
      <h3>Ingresa tu nombre completo</h3>
      <b-form-input type="text" placeholder="Ingresa tu nombre completo" v-model="name"></b-form-input>
      <h3>Ingresa tu dirección</h3>
      <b-form-input type="text" placeholder="Ingresa tu dirección" v-model="direccion"></b-form-input>
      <h3>Ingresa tu Rut</h3>
      <b-form-input type="text" placeholder="Ingresa tu Rut" v-model="rut"></b-form-input>
      <h3>Ingresa tu correo</h3>
      <b-form-input type="text" placeholder="Ingresa tu email" v-model="correo"></b-form-input>
      <h3>Ingresa tu número de celular</h3>
      <b-form-input type="text" placeholder="Ingresa tu número de celular" v-model="celular"></b-form-input>
      <h3>Ingresa el nombre para tu mascota</h3>
      <b-form-input type="text" placeholder="Ingresa el nombre para tu mascota" v-model="bautizo"></b-form-input>
      <b-button variant="warning" @click="guardar()">¡Vamos por tu nuevo amigo!</b-button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from "axios";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Gestion",

  data() {
    return {
      name: "",
      direccion: "",
      rut: "",
      correo: "",
      celular: "",
      bautizo: ""
    };
  },

  methods: {
    ...mapActions(["eliminarPerroPorAdoptar"]),

    alClickearEliminar(perro) {
      this.eliminarPerroPorAdoptar(perro);
    }
  },
  guardar() {
    var name = document.getElementById("name").value;
    var direccion = document.getElementById("direccion").value;
    var rut = document.getElementById("rut").value;
    var correo = document.getElementById("correo").value;
    var celular = document.getElementById("celular").value;
    var bautizo = document.getElementById("bautizo").value;
db.collection("personas").add({
            name: name,
            direccion: direccion,
            rut: rut,
            correo: correo,
            celular: celular,
            bautizo: bautizo
        })
        .then(function (docRef) {
            // La respuesta positiva a la promesa y se envían los datos
            // + limpieza la casilla 
            document.getElementById('name').value = '';
            document.getElementById('direccion').value = '';
            document.getElementById('rut').value = '';
            document.getElementById('correo').value = '';
            document.getElementById('celular').value = '';
            document.getElementById('bautizo').value = '';

        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
  },

  computed: {
    ...mapGetters(["getPerrosPorAdoptar"])
  }
};
</script>