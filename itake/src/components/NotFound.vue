<template>
<div>
<Navbar></Navbar>
    <h1> Humano esta ruta no es válida</h1>
    <img src="https://images.pexels.com/photos/1331821/cat-eyes-angry-suspicious-1331821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="invalida">
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
