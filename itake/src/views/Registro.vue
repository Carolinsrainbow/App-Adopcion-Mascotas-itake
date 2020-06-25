<template>
      <div>
    <Navbar></Navbar>
<Registrar />
       <Bajada />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Bajada from "@/components/Bajada.vue"
import Registrar from "@/components/Registro/Registrar.vue"
export default {
  name: "Login",
  components: {
    Navbar,
    Bajada,
    Registrar
  },
};
</script>