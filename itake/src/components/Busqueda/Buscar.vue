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
            <svg class="svg-icon" viewBox="0 0 20 20" width=25%>
							<path fill="yellow" d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"></path>
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
      arregloPerros: []
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

