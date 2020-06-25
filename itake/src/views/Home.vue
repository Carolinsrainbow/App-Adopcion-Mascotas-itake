<template>
  <div class="home">
    <Navbar></Navbar>
        <Carrusel />
        <div id=texto>
          <div id="subt1">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, varius rutrum urna hac torquent pharetra quisque ullamcorper, justo eros ultrices vehicula vulputate mollis. Ac pharetra senectus dapibus taciti cursus proin curabitur luctus, egestas dictum vivamus varius torquent tristique vehicula, lacinia nostra aptent erat massa nisl nulla. Suscipit sollicitudin pellentesque luctus vulputate fringilla sociis facilisis, ultrices urna venenatis tristique tortor a, nisi ultricies integer platea pharetra dictumst.</p>
          </div>
          <div id="subt2">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, varius rutrum urna hac torquent pharetra quisque ullamcorper, justo eros ultrices vehicula vulputate mollis. Ac pharetra senectus dapibus taciti cursus proin curabitur luctus, egestas dictum vivamus varius torquent tristique vehicula, lacinia nostra aptent erat massa nisl nulla. Suscipit sollicitudin pellentesque luctus vulputate fringilla sociis facilisis, ultrices urna venenatis tristique tortor a, nisi ultricies integer platea pharetra dictumst.</p>
            </div>
          </div>
          <div>
            <div>
  <b-card
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  </b-card>
</div>
</div>
           <Bajada />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Carrusel from "@/components/Home/Carrusel.vue";
import Bajada from "@/components/Bajada.vue"

export default {
  name: "Home",
  components: {
    Navbar,
    Carrusel,
    Bajada
  }
};
</script>
