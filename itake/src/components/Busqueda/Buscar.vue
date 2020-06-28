<template>
  <div id="busqueda">
    <b-container>
      <h1>Selecciona una raza</h1>
      <b-form-select v-model="selecters" class="mb-3">
        <b-form-select-option :value="null">Elija una raza</b-form-select-option>
        <b-form-select-option
          v-for="(raza, index) in razas"
          :key="index"
          :value="raza.toLowerCase()"
        >{{raza}}</b-form-select-option>
      </b-form-select>
      <b-button variant="warning" @click="getBreedRandomDog(selecters)">Buscar</b-button>
    </b-container>

    <div>
      <b-container class="p-5">
        <b-row>
          <b-card
            v-for="(perro,i) in arregloPerros"
            :key="i"
            title="Aqui van perritos"
            :img-src="perro"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            :id="perro.id"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            <b-button @click="elegido(perro)" variant="warning">Adoptame</b-button>
          </b-card>
        </b-row>
      </b-container>

      <h1>Carrito de compras</h1>
      {{perrosPorAdoptar}}
      <h1>Sin repetir</h1>
      {{getPerrosPorAdoptar}}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapState, mapGetters, mapActions} from "vuex";

export default {
  name: "Buscar",
  data() {
    return {
      razas: ["Chihuahua", "Boxer", "Labrador", "Germanshepherd", "Husky"],
      selecters: "",
      arregloPerros: [],
      like: false,
    };
  },
  mounted() {
    this.getBreedRandomDog("labrador");
  },
  methods: {
    ...mapActions(["agregarPerroPorAdoptar"]),

    elegido(infoPerro) {
      this.agregarPerroPorAdoptar(infoPerro)
    },

    makeLike(id) {
      this.$emit("makeLike", perro.id);
    },

    getBreedRandomDog(breed) {
      this.arregloPerros = [];
      axios
        .get(`https://dog.ceo/api/breed/${breed}/images/random/12`)
        .then(response => {
          response.data.message.forEach(perro => this.arregloPerros.push(perro));
        })
        .catch(e => console.log(e));
    }
  },

  computed: {
    ...mapState(["perrosPorAdoptar"]),
    ...mapGetters(["getPerrosPorAdoptar"])
  }
};
</script>

