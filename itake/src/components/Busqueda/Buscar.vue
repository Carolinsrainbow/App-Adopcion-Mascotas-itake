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
          <!-- <b-card
            v-for="(perro,i) in arregloPerros"
            :key="i"
            title="Aqui van perritos"
            :img-src="perro.img"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            :id="perro.id"
          >
            <b-card-text>Lorem ipsum dolor sit amet consectetur adipiscing elit lacinia gravida porttitor, iaculis curabitur nullam sodales duis consequat sed interdum platea scelerisque, eleifend facilisi parturient aptent class hendrerit erat conubia luctus.</b-card-text>
            <b-button @click="elegido(perro)" variant="warning">Adoptame</b-button>
          </b-card>-->
          <div
            class="mb-2"
            style="width: 18rem; padding: 10px"
            v-for="(perro,i) in arregloPerros"
            :key="i"
            title="Aqui van perritos"
            :id="perro.id"
          >
            <div
              class="card-img-top"
              :style="{backgroundImage: 'url('+perro.img+')', backgroundSize: 'cover', height: '300px'}"
              alt="Card image cap"
            ></div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p
                class="card-text"
              >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <label for>Nombre del perrito:</label>
              <input type="text" />
              <button @click="elegido(perro)" class="btn btn-warning">Adoptame</button>
            </div>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Buscar",
  data() {
    return {
      razas: ["Chihuahua", "Boxer", "Labrador", "Germanshepherd", "Husky"],
      selecters: "",
      arregloPerros: [],
      like: false
    };
  },
  mounted() {
    this.getBreedRandomDog("labrador");
  },
  methods: {
    ...mapActions(["agregarPerroPorAdoptar"]),

    elegido(infoPerro) {
      this.agregarPerroPorAdoptar(infoPerro);
    },
    getBreedRandomDog(breed) {
      this.arregloPerros = [];
      axios
        .get(`https://dog.ceo/api/breed/${breed}/images/random/12`)
        .then(response => {
          // response.data.message.forEach(perro => this.arregloPerros.push(perro));
          this.formatApi(response);
        });
      // .catch(e => console.log(e));
    },
    formatApi(response) {
      let dogs = {};
      response.data.message.forEach(perrito => {
        this.arregloPerros.push({
          id: btoa(perrito),
          img: perrito
        });
      });
      /* for (let index = 0; index < response.data.message.length; index++) {
        dogs = {
          id: btoa(response.data.messa)
          img: response.data.message[index]
        }
        this.arregloPerros.push(dogs)        
      }*/
      console.log(this.arregloPerros);
      btoa("123");
    }
  },

  computed: {
    ...mapState(["perrosPorAdoptar"]),
    ...mapGetters(["getPerrosPorAdoptar"])
  }
};
</script>


