<template>
<div>
        <Navbar></Navbar>
        <Buscar />

    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Buscar from "@/components/Busqueda/Buscar.vue";

export default {
    name: 'Busqueda',
  components: {
    Navbar,
    Buscar
  },
}
</script>