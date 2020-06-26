<template>
  <div id="busqueda">
    <b-container>
      <h1>Selecciona una raza</h1>
      <b-form-select v-model="selecters" class="mb-3">
        <b-form-select-option :value="null">Elija una raza</b-form-select-option>
        <b-form-select-option v-for="(raza, index) in razas" :key="index" :value="raza.toLowerCase()">{{raza}}</b-form-select-option>
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
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            <b-button variant="warning">Adoptame</b-button>
            <svg v-if="!like" @click="like=true" style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="black" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
    </svg>

    <svg  v-if="like" @click="like=false" style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
    </svg>
          </b-card>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Buscar",
  data() {
    return {
      razas: ["Chihuahua", "Boxer", "Labrador","Germanshepherd","Husky"],
      selecters: "",
      arregloPerros: [],
      like: false
    };
  },
  mounted() {
    this.getBreedRandomDog("labrador");
  },
  methods: {

    getBreedRandomDog(breed) {
      this.arregloPerros = []
      axios
        .get(`https://dog.ceo/api/breed/${breed}/images/random/12`)
        .then(response => {
          response.data.message.forEach(perro => this.arregloPerros.push(perro));
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

