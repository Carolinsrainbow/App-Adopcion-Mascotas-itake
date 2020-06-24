<template>
 <div>
   <h1>Selecciona una raza</h1>
    <b-form-select v-model="selected" class="mb-3">
 <b-form-select-option :value = "null">Elija una raza</b-form-select-option>
      <b-form-select-option value="labrador">Labrador</b-form-select-option>
          <b-form-select-option value="beagle">Beagle</b-form-select-option>
              <b-form-select-option value="bulldog">Bulldog</b-form-select-option>
                  <b-form-select-option value="shiba">Shiba</b-form-select-option>
                      <b-form-select-option value="papillon">Papillon</b-form-select-option>

    </b-form-select>
     <b-button variant="warning" @click="search">Buscar</b-button>
        <img :src="src">
    </div>

</template>

<script>
export default {
  name: "Buscar", 
  data() {
      return {
      selected: ''
      };
    },
    computed: {
   src(){
     let selected = this.selected;
     return `https://dog.ceo/api/{selected}/image/random`
   }
    }
};
</script>