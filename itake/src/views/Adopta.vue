<template>
    <div>
 <Navbar></Navbar>
      <Gestion/>
    <Bajada />
    </div>
</template>

<script>
import Gestion from "@/components/Adopta/Gestion.vue"
import Navbar from "@/components/Navbar.vue";
import Bajada from "@/components/Bajada.vue";

export default {
    name: 'Adopta',
       components: {
        Navbar, 
        Gestion,
        Bajada
    }

}
</script>