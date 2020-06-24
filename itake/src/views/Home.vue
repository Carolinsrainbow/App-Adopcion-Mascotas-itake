<template>
  <div class="home">
    <Navbar></Navbar>
        <Carrusel />
           <Footer />
        
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Carrusel from "@/components/Home/Carrusel.vue";
import Footer from "@/components/Footer.vue"

export default {
  name: "Home",
  components: {
    Navbar,
    Carrusel,
    Footer
  }
};
</script>
