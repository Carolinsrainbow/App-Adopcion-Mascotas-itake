import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    perrosPorAdoptar: [],
  },

  mutations: {
    agregarPerroPorAdoptar(state, perro) {
      state.perrosPorAdoptar.push(perro)
    },
    eliminarPerroPorAdoptar(state, perro) {
      state.perrosPorAdoptar.splice(perro, 1)
    },
   
    // crear mutacionEliminarPerro(state,perro) -> Filtra la lista perrosPorAdoptar
  },

  actions: {
    agregarPerroPorAdoptar(context, perro) {
      context.commit('agregarPerroPorAdoptar', perro)
    },
    eliminarPerroPorAdoptar(context, perro) {
      context.commit("eliminarPerroPorAdoptar", perro)
    }
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
  },

  modules: {}
});