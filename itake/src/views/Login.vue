<template>
  <div>
    <Navbar></Navbar>
<Form />
       <Bajada />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Form from "@/components/Login/Form.vue";
import Bajada from "@/components/Bajada.vue"

export default {
  name: "Login",
  components: {
    Form,
    Navbar,
    Bajada
  },
};
</script>
