<template>
<div>
        <Navbar></Navbar>
        <Buscar />
        <Bajada />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Buscar from "@/components/Busqueda/Buscar.vue";
import Bajada from "@/components/Bajada.vue"


export default {
    name: 'Busqueda',
  components: {
    Navbar,
    Buscar,
    Bajada
  },
}
</script>