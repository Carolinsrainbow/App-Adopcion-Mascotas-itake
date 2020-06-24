<template>
 <div>
   <h1>Selecciona una raza</h1>
    <b-form-select v-model="selecters" class="mb-3">
 <b-form-select-option :value = "null">Elija una raza</b-form-select-option>
      <b-form-select-option value="labrador">Labrador</b-form-select-option>
          <b-form-select-option value="beagle">Beagle</b-form-select-option>
              <b-form-select-option value="bulldog">Bulldog</b-form-select-option>
                  <b-form-select-option value="shiba">Shiba</b-form-select-option>
                      <b-form-select-option value="papillon">Papillon</b-form-select-option>

    </b-form-select>
     <b-button variant="warning" @click="getSelecters">Buscar</b-button>
       
         <div>
    <b-card v-for="(selecter,i) in selecters" :key="i"
      title="Aqui van perritos"
      :img-src="selecter" 
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
    </b-card>
  </div>
    </div>


</template>

<script>
import axios from "axios"
export default {
  name: "Buscar",
  data(){
    return{
      selecters:"",
    }
  },
mounted (){
  this.getSelecters();
},
methods: {
  getSelecters(){
    axios.get('https://dog.ceo/api/breeds/image/random/3').then(response =>{
      this.selecters = response.data.message
    })
    .catch(e => console.log(e))
  }
}
};
</script>