<template>
<div>
<Navbar></Navbar>
    <h1> La ruta no es válida</h1>
    </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import Bajada from "@/components/Bajada.vue"


export default {
    name: 'NotFound',
  components: {
    Navbar,
    Bajada
  },
}
</script>
