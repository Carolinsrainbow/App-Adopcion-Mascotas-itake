<template>
  <div>
    <Navbar></Navbar>
    <h1>Los cuidados que debes tener al adoptar una mascota</h1>
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
