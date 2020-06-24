<template>
<div>
        <Navbar></Navbar>
        <Buscar />
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Buscar from "@/components/Busqueda/Buscar.vue";
import Footer from "@/components/Footer.vue"


export default {
    name: 'Busqueda',
  components: {
    Navbar,
    Buscar,
    Footer
  },
}
</script>