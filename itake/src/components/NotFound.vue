<template>
<div>
<Navbar></Navbar>
    <h1> Humano esta ruta no es válida</h1>
    <img src="https://images.unsplash.com/photo-1526636355180-fe37f8ce86cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="invalida">
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
