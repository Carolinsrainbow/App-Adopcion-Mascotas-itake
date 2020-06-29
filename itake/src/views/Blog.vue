<template>
  <div>
    <Navbar></Navbar>
    <h1>Bienvenido al Blog de la comunidad </h1>
    <h2>Traemos toda la información que necesitas saber</h2>
    <Collage></Collage>
    <Bajada />
  </div>
</template>

<script>
import Collage from "@/components/Blog/Collage.vue";
import Navbar from "@/components/Navbar.vue";
import Bajada from "@/components/Bajada.vue";

export default {
  name: "Blog",
  components: {
    Navbar,
    Collage,
    Bajada
  },
};
</script>
