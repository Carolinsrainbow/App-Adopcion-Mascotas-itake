import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    perrosPorAdoptar: [],
    name: '',
    direccion: '',
    rut: '',
    correo: '',
    celular: '',
    bautizo: '',
  },

  mutations: {
    agregarPerroPorAdoptar(state, perro) {
      state.perrosPorAdoptar.push(perro)
    },
    eliminarPerroPorAdoptar(state, perro) {
      state.perrosPorAdoptar.splice(perro, 1)
    },
    mutandoInfoAdoptantes(state, info) {
      state.infoAdoptantes
    }
    // crear mutacionEliminarPerro(state,perro) -> Filtra la lista perrosPorAdoptar
  },

  actions: {
    agregarPerroPorAdoptar(context, perro) {
      console.log(perro);
      let id = perro.id;
      let img = perro.img
      let payload = {
        email: 'asasa',
        perritos: {
          perritosAdoptados: [{
            id,
            img
          }]
        }
      }
      axios.post('https://us-central1-itake-1436f.cloudfunctions.net/personas/persona', payload).then(data => {
        console.log(data)
        context.commit('agregarPerroPorAdoptar', perro)
      })
    },
    eliminarPerroPorAdoptar(context, perro) {
      context.commit("eliminarPerroPorAdoptar", perro)
    },
    // crear eliminarPerroPorAdoptar(context, perro) -> llama mutacion 
  },

  getters: {
    getPerrosPorAdoptar(state) {
      let listaSinPerrosRepetidos = new Set(state.perrosPorAdoptar)
      return [...listaSinPerrosRepetidos]
    },
    perrosAdoptados() {
      let adoptados = this.getPerrosPorAdoptar;
      console.log(adoptados)
    },
    infoAdoptante(state) {
      let infoAdoptantes = [state.name, state.direccion, state.rut, state.correo, state.celular, state.bautizo];
      return infoAdoptantes
    }
  },

  modules: {}
});