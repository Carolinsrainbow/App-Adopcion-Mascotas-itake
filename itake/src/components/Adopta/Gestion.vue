<template>
  <div>
    <h2>Esta es la página para que gestiones la adopción de tu nueva mascota</h2>
    <div>
      <b-card id="resultadoBusqueda"
        v-for="perro in getPerrosPorAdoptar"
        :key="perro"
        :img-src="perro"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"

      >
        <!-- el perro de abajo sale del v-for  -->
  <b-form-input type="text" placeholder="Ingresa el nombre para tu mascota" v-model="bautizo"></b-form-input>
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
      <b-button variant="warning" @click="guardar()" >¡Vamos por tu nuevo amigo!</b-button>
          <b-form-input type="text" placeholder="Ingresa tu número de celular" v-model="celular"></b-form-input>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from "axios";
import { mapState, mapGetters, mapActions} from "vuex";

export default {
  name: "Gestion",
  data() {
    return {
      name: "",
      direccion: "",
      rut: "",
      correo: "",
      celular: "",
      bautizo: "",
    };
  },

  methods: {
    ...mapActions(["eliminarPerroPorAdoptar"]),

    alClickearEliminar(perro) {
      this.eliminarPerroPorAdoptar(perro);
    },
    guardar(){
      console.log(this.nuevaPersona)
    }
  },
  computed: {
    ...mapGetters(["getPerrosPorAdoptar"])
  }
};
</script>