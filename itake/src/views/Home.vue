<template>
  <div class="home">
    <Navbar></Navbar>
        <Carrusel />
            <h2>Fundación itake</h2>
        <div id=texto>
    
          <div class="subt1">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, varius rutrum urna hac torquent pharetra quisque ullamcorper, justo eros ultrices vehicula vulputate mollis. Ac pharetra senectus dapibus taciti cursus proin curabitur luctus, egestas dictum vivamus varius torquent tristique vehicula, lacinia nostra aptent erat massa nisl nulla. Suscipit sollicitudin pellentesque luctus vulputate fringilla sociis facilisis, ultrices urna venenatis tristique tortor a, nisi ultricies integer platea pharetra dictumst.</p>
          </div>
          <div class="subt2">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, varius rutrum urna hac torquent pharetra quisque ullamcorper, justo eros ultrices vehicula vulputate mollis. Ac pharetra senectus dapibus taciti cursus proin curabitur luctus, egestas dictum vivamus varius torquent tristique vehicula, lacinia nostra aptent erat massa nisl nulla. Suscipit sollicitudin pellentesque luctus vulputate fringilla sociis facilisis, ultrices urna venenatis tristique tortor a, nisi ultricies integer platea pharetra dictumst.</p>
            </div>
          </div>
        
<div id="card-body" class="p-5">
  <b-container> 
    <b-row>
      <b-col md="3">
  <b-card
    img-src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  >
  </b-card>
 </b-col>
  <b-col md="3">
  <b-card
    img-src="https://images.pexels.com/photos/3377909/pexels-photo-3377909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  >
  </b-card>
   </b-col>
   <b-col md="3">
  <b-card
    img-src="https://images.pexels.com/photos/1784289/pexels-photo-1784289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  >
  </b-card>
    </b-col>
  <b-col md="3">
  <b-card
    img-src="https://images.pexels.com/photos/1448055/pexels-photo-1448055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  >
  </b-card>
  </b-col>
  </b-row>
  </b-container>
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
