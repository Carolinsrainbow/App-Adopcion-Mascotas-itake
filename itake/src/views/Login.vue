<template>
  <div>
    <Navbar></Navbar>
<Form />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Form from "@/components/Login/Form.vue";

export default {
  name: "Login",
  components: {
    Form,
    Navbar,
  },
};
</script>
