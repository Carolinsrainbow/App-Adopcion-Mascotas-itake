<template>
  <div class="home">
    <Navbar></Navbar>
        <Carrusel />
        
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Carrusel from "@/components/Home/Carrusel.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Carrusel
  }
};
</script>
