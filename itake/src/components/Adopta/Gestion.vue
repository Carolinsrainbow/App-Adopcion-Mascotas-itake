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
         :style="{backgroundImage: 'url('+perro.img+')', backgroundSize: 'cover', height: '300px'}"
          class="mb-2"
        >
          <!-- el perro de abajo sale del v-for  -->
          <b-button @click="alClickearEliminar(perro)" variant="warning">Eliminar</b-button>
          <!-- <button @click="alClickearEliminar(perro)">Eliminar</button> -->
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
  },
  mounted(){
    let email = firebase.auth().currentUser.email
axios.get('https://us-central1-itake-1436f.cloudfunctions.net/personas/personas/' + email).then(data =>{

let datosFavoritos = data.data.perritosFavoritos
this.$store.dispatch("actionFavoritos", datosFavoritos)
})
  }
};

</script>