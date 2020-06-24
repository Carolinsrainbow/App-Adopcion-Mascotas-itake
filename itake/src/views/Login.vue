<template>
  <div>
    <Navbar></Navbar>
<Form />
       <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Form from "@/components/Login/Form.vue";
import Footer from "@/components/Footer.vue"

export default {
  name: "Login",
  components: {
    Form,
    Navbar,
    Footer
  },
};
</script>
