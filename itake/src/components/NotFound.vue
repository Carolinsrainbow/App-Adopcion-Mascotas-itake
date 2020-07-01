<template>
<div>
<Navbar></Navbar>
<div class="NoEncontrado">
    <h1> Humano esta ruta no es válida</h1>
    </div>
          <Bajada />
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
