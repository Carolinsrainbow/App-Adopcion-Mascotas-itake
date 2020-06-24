<template>
  <div>
    <template>
  <div>
    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">Value: {{ text }}</div>
  </div>
  
</template>
      <b-button variant="warning">Warning</b-button>

    <b-card
      title="Aqui van perritos"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

      <b-button href="#" variant="primary">
        <i class="far fa-paw-alt"></i>
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Buscar", 
  data() {
      return {
        text: ''
      }
    }
};
</script>