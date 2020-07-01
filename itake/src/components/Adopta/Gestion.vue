<template>
  <div>
    <div id="info">
      <div>
        <h1>Esta es la página para que gestiones la adopción de tu nueva mascota</h1>
        <b-card
          id="resultadoBusqueda"
          v-for="(perro,i) in getPerrosPorAdoptar"
          :key="i"
          :img-src="perro.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <!-- el perro de abajo sale del v-for  -->
          <b-form-input
            type="text"
            placeholder="Ingresa el nombre para tu mascota"
            v-model="bautizo"
          ></b-form-input>
          <button @click="alClickearEliminar(perro)">Eliminar</button>
        </b-card>
      </div>

    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from "axios";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Gestion",
  methods: {
    ...mapActions(["eliminarPerroPorAdoptar"]),

    alClickearEliminar(perro) {
      this.eliminarPerroPorAdoptar(perro);
    }
  },
  computed: {
    ...mapGetters(["getPerrosPorAdoptar"])
  }
};
</script>