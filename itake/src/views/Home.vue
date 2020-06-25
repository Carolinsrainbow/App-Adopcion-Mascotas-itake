<template>
  <div class="home">
    <Navbar></Navbar>
        <Carrusel />
           <Bajada />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Carrusel from "@/components/Home/Carrusel.vue";
import Bajada from "@/components/Bajada.vue"

export default {
  name: "Home",
  components: {
    Navbar,
    Carrusel,
    Bajada
  }
};
</script>
