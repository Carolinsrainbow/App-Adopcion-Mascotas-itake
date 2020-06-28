import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    perrosPorAdoptar: []
  },

  mutations: {
    agregarPerroPorAdoptar(state, perro) {
      state.perrosPorAdoptar.push(perro)
    }
  },

  actions: {
    agregarPerroPorAdoptar(context,perro){
      context.commit('agregarPerroPorAdoptar', perro)
    }
  },

  getters: {
    getPerrosPorAdoptar(state) {
      let listaSinPerrosRepetidos = new Set(state.perrosPorAdoptar)
      return [...listaSinPerrosRepetidos]
    }
  },

  modules: {}
});