<template>
  <div>
    <Navbar></Navbar>
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
